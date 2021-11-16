import React, { useState, useCallback } from 'react';

import { Page } from './types';
import Login from './landing-page/login/Login';
import SignUp from './landing-page/signup/SignUp';
import LoggedIn from './common/LoggedIn';
import LandingPage from './landing-page/LandingPage';

import './App.scss';

export default function App() {
  const [page, setPage] = useState<Page>(Page.Login);

  const showSignUpPage = useCallback(() => {
    setPage(Page.SignUp);
  }, []);

  return (<div id='app'>
    {page === Page.Login && <LandingPage >
      <Login
        showSignUpPage={showSignUpPage}
      />
    </LandingPage>}
    {page === Page.SignUp && <LandingPage ><SignUp /></LandingPage>}
    {page !== Page.Login && page !== Page.SignUp && <LoggedIn page={page} />}
  </div>);
}
