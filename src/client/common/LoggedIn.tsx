import React from 'react';

import { Page } from './../types';
import NavBar from './NavBar';
import WishList from './../wishlist/Wishlist';
import ShoppingList from './../shoppinglist/Shoppinglist';
import Besties from './../besties/Besties';
import Settings from './../settings/Settings';

import './LoggedIn.scss';

export default function LoggedIn({
  page
}: {
  page: Page
}) {
  return (
    <div id='logged-in-wrapper'>
      <NavBar />
      <main>
        {page === Page.WishList && <WishList />}
        {page === Page.ShoppingList && <ShoppingList />}
        {page === Page.Besties && <Besties />}
        {page === Page.Settings && <Settings />}
      </main>
    </div>
  );
}
