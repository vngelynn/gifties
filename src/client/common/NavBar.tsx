import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { setPage } from './../redux/pageSlice';
import { Page } from './../types';

import teamPic from './../assets/team-pic.png';
import './NavBar.scss';

export default function NavBar() {
  const dispatch = useDispatch();

  const showWishList = useCallback(() => dispatch(setPage(Page.WishList)), [dispatch]);
  const showShoppingList = useCallback(() => dispatch(setPage(Page.ShoppingList)), [dispatch]);
  const showBesties = useCallback(() => dispatch(setPage(Page.Besties)), [dispatch]);
  const showSettings = useCallback(() => dispatch(setPage(Page.Settings)), [dispatch]);

  return (
    <nav>
      <div id='nav-wishlist' style={{ backgroundImage: `url(${teamPic})` }} onClick={showWishList} />
      <div id='nav-besties' style={{ backgroundImage: `url(${teamPic})` }} onClick={showBesties} />
      <div id='nav-shopping-list' style={{ backgroundImage: `url(${teamPic})` }} onClick={showShoppingList} />
      <div id='nav-settings' style={{ backgroundImage: `url(${teamPic})` }} onClick={showSettings} />
    </nav>
  );
}
