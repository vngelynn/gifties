import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useField from './../../hooks/useField';
import { Page, ErrorMessage } from './../../types';
import { AppState } from 'redux/store.ts';
import { createAccountRequest } from './../../utils/fetch';
import { setPage } from './../../redux/pageSlice';
import { setUser } from './../../redux/userSlice';
import { setBesties } from './../../redux/bestiesSlice';
import { setShoppingList } from './../../redux/shoppingListSlice';
import { setWishList } from './../../redux/wishListSlice';

import './SignUp.scss';

export default function SignUp() {
  const [name, onNameChange] = useField('');
  const [email, onEmailChange] = useField('');
  const [password, onPasswordChange] = useField('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const dispatch = useDispatch();

  const attemptCreateAccount = useCallback(async () => {
    // TODO validate input fields before making server request
    const serverResponse = await createAccountRequest(name, email, password);

    if ((serverResponse as ErrorMessage).error !== undefined) {
      setErrorMessage((serverResponse as ErrorMessage).error);
    } else {
      // ! is this the correct way to do this? I feel like this should be combined into a single reducer all
      const appState: AppState = serverResponse as AppState;
      dispatch(setUser(appState.user));
      dispatch(setBesties(appState.besties));
      dispatch(setShoppingList(appState.shoppingList));
      dispatch(setWishList(appState.wishList));
      dispatch(setPage(Page.WishList));
    }
  }, [dispatch, email, name, password]);

  return (<>
    <h1>Sign Up</h1>
    <div id='signup-form'>
      {errorMessage.length > 0 && <p className='error-message'>{errorMessage}</p>}
      <input type='text' value={name} onChange={onNameChange} />
      <input type='email' value={email} onChange={onEmailChange} />
      <input type='password' value={password} onChange={onPasswordChange} />
      {/* TODO handle profile image selection and security questions */}
      <button type='submit' onClick={attemptCreateAccount}>Create Account</button>
    </div>
  </>);
}
