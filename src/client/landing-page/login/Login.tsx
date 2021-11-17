import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useField from './../../hooks/useField';
import { Page } from './../../types';
import { loginRequest } from './../../utils/fetch';
import { setPage } from './../../redux/pageSlice';
import { setUser } from './../../redux/userSlice';
import { setBesties } from './../../redux/bestiesSlice';
import { setShoppingList } from './../../redux/shoppingListSlice';
import { setWishList } from './../../redux/wishListSlice';

import './Login.scss';

export default function Login({
  showSignUpPage,
  // showPasswordRecoveryPage
}: {
  showSignUpPage: () => void;
  // showPasswordRecoveryPage: () => void;
}) {
  const [email, onEmailChange] = useField('');
  const [password, onPasswordChange] = useField('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  // const [wasFailedAttemptMade, setWasFailedAttemptMade] = useState<boolean>(false); // TODO

  const dispatch = useDispatch();

  const attemptLogin = useCallback(async () => {
    // TODO validate input fields before making server request
    const appState = await loginRequest(email, password);

    if (appState === undefined) {
      setErrorMessage('Invalid credentials, please try again.');
    } else {
      // ! is this the correct way to do this? I feel like this should be combined into a single reducer all
      dispatch(setUser(appState.user));
      dispatch(setBesties(appState.besties));
      dispatch(setShoppingList(appState.shoppingList));
      dispatch(setWishList(appState.wishList));
      dispatch(setPage(Page.WishList));
    }
  }, [dispatch, email, password]);

  return (<>
    <h1>LOGIN</h1>
    <div id='login-form'>
      {errorMessage.length > 0 && <p className='error-message'>{errorMessage}</p>}
      <input type='email' value={email} onChange={onEmailChange} />
      <input type='password' value={password} onChange={onPasswordChange} />
      <button type='submit' onClick={attemptLogin}>LOGIN</button>
      <button type='submit' onClick={showSignUpPage}>SIGN UP</button>
      { /*wasFailedAttemptMade && <div>
        <a id='password-recovery' onClick={showPasswordRecoveryPage}>Forgot password?</a>
      </div> */ }
    </div>
  </>);
}
