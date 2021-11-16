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
  status: string
}
