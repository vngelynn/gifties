import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AppState } from './../redux/store';
import { Bestie, BestieSearchItem } from './../types';
import { searchForBesties } from './../utils/fetch';
import useField from './../hooks/useField';
import Splash from './../common/Splash';
import SearchItem from './SearchItem';

export default function Besties() {
  const [search, onSearchChange] = useField('');
  const [searchResult, setSearchResult] = useState<null | BestieSearchItem[]>(null);

  const besties: Bestie[] = useSelector((state: AppState) => state.besties);

  const handleKeyPress = useCallback(async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (search.length === 0) return setSearchResult(null);

      let bestiesResult = await searchForBesties(search);
      if (bestiesResult === undefined) bestiesResult = [];

      setSearchResult(bestiesResult as BestieSearchItem[]);
    }
  }, [search]);

  return (
    <div id='besties'>
      <input
        type='text'
        placeholder='Find your besties...'
        value={search}
        onChange={onSearchChange}
        onKeyPress={handleKeyPress}
      />
      {search.length === 0 && <h1>Show friend list</h1>}
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
