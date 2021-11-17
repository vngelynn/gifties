import React, { useState, useCallback, MouseEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { AppState } from './../redux/store';
import { Bestie, BestieSearchItem } from './../types';
import { searchForBesties } from './../utils/fetch';
import useField from './../hooks/useField';
import Splash from './../common/Splash';
import SearchItem from './SearchItem';
import BestieItem from './BestieItem';
import { deleteBestie } from './../redux/bestiesSlice';

import './Besties.scss';

export default function Besties() {
  const [search, onSearchChange] = useField('');
  const [searchResult, setSearchResult] = useState<null | BestieSearchItem[]>(null);
  const [modalState, setModalState] = useState({
    isOpen: false,
    x: NaN,
    y: NaN,
    bestieId: NaN,
    bestieName: ''
  });

  const besties: Bestie[] = useSelector((state: AppState) => state.besties);

  const dispatch = useDispatch();

  const handleKeyPress = useCallback(async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (search.length === 0) return setSearchResult(null);

      let bestiesResult = await searchForBesties(search);
      if (bestiesResult === undefined) bestiesResult = [];

      setSearchResult(bestiesResult as BestieSearchItem[]);
    }
  }, [search]);

  const openModal = useCallback((x: number, y: number, id: number) => {
    const bestieName: string | undefined = besties.find(bestie => bestie.id === id)?.name;

    setModalState({ isOpen: true, x, y, bestieId: id, bestieName: bestieName || '' });
  }, [besties]);

  const closeModal = useCallback(() => {
    setModalState(state => ({ ...state, isOpen: false }));
  }, []);

  const removeBestie = useCallback((id: number) => {
    const bestieToRemove = besties.find(bestie => bestie.id === id);
    if (bestieToRemove === undefined) return;

    dispatch(deleteBestie(bestieToRemove));
    closeModal();
  }, [besties, closeModal, dispatch]);

  return (
    <div id='besties'>
      {modalState.isOpen &&
        <div id='bestie-avatar-modal' style={{ top: modalState.y, left: modalState.x }}>
          <span onClick={closeModal}>x</span>
          <h4>{modalState.bestieName}</h4>
          <button onClick={() => removeBestie(modalState.bestieId)}>Remove</button>
        </div>
      }
      <input
        type='text'
        placeholder='Find your besties...'
        value={search}
        onChange={onSearchChange}
        onKeyPress={handleKeyPress}
      />
      {search.length === 0 && <div id='your-besties'>
        {besties.map(bestie =>
          <BestieItem
            key={bestie.id}
            name={bestie.name}
            openModal={(event: MouseEvent) => openModal(event.pageX, event.pageY, bestie.id)}
          />
        )}
        {besties.length === 0 && <h4>Go make some friends!</h4>}
      </div>}
      {search.length !== 0 &&
        (searchResult === null
          ? <Splash />
          : (searchResult as BestieSearchItem[])
            .filter(bestie => bestie.status !== 'unknown')
            .map((bestie, i) =>
              <SearchItem
                key={i}
                name={bestie.name}
                status={bestie.status as 'accepted' | 'pending' | 'unknown'}
              />
            )
        )
      }
    </div>
  );
}
