export enum Page {
  Login,
  SignUp,
  WishList,
  ShoppingList,
  Besties,
  Settings
}

export type User = {
  userId: number;
  name: string;
  email: string;
  profileImage?: string;
}

export interface GiftItem {
  id: number,
  label: string,
  description?: string,
  link?: string,
}

export interface ShoppingGiftItem extends GiftItem {
  bestie: string,
  status: 'available' | 'purchased' | 'gifted' | 'removed'
}

export interface Bestie {
  id: number,
  name: string,
}

export type ErrorMessage = {
  error: string,
}

export type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';
