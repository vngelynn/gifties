import React from 'react';

import { Page } from './../types';
import NavBar from './NavBar';
import WishList from './../wishlist/Wishlist';
import ShoppingList from './../shoppinglist/Shoppinglist';
import Besties from './../besties/Besties';
import Settings from './../settings/Settings';

import './LoggedIn.scss';

// Mock wishList 
const wishList = [
  {
    id: 1,
    label: 'Mario Cart',
    description: 'The best game of all time',
    link: 'www.mariorulz.com'
  },
  {
    id: 2,
    label: 'Mario Cart2',
    description: 'The best game of all time',
    link: 'www.mariorulz.com'
  },
  {
    id: 3,
    label: 'Mario Cart3',
    description: 'The best game of all time',
    link: 'www.mariorulz.com'
  },
  {
    id: 4,
    label: 'Mario Cart4',
    description: 'The best game of all time',
    link: 'www.mariorulz.com'
  },
  {
    id: 5,
    label: 'Mario Cart5',
    description: 'The best game of all time',
    link: 'www.mariorulz.com'
  }
];

export default function LoggedIn({
  page
}: {
  page: Page
}) {
  return (
    <div id='logged-in-wrapper'>
      <NavBar />
      <main>
        {page === Page.WishList && <WishList wishList={wishList}/>}
        {page === Page.ShoppingList && <ShoppingList />}
        {page === Page.Besties && <Besties />}
        {page === Page.Settings && <Settings />}
      </main>
    </div>
  );
}
