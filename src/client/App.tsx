import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Page } from './types';
import { AppState } from './redux/store';
import { setPage } from './redux/pageSlice';
import Login from './landing-page/login/Login';
import SignUp from './landing-page/signup/SignUp';
import LoggedIn from './common/LoggedIn';
import LandingPage from './landing-page/LandingPage';

import './App.scss';

export default function App() {
  const page: Page = useSelector((state: AppState) => state.page);

  const dispatch = useDispatch();

  const showSignUpPage = useCallback(() => {
    dispatch(setPage(Page.SignUp));
  }, [dispatch]);

  return (<div id='app'>
    {page === Page.Login &&
      <LandingPage ><Login showSignUpPage={showSignUpPage} /></LandingPage>
    }
    {page === Page.SignUp && <LandingPage><SignUp /></LandingPage>}
    {page !== Page.Login && page !== Page.SignUp && <LoggedIn page={page} />}
  </div>);
}
