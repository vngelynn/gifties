import React, { useState } from 'react';

import { Page } from './types';
import SignIn from './login/Login';
import SignUp from './signup/SignUp';
import LoggedIn from './common/LoggedIn';


export default function App() {
  const [page, setPage] = useState<Page>(Page.Login);

  return (
      {page === Page.Login && <SignIn />}
      {page === Page.SignUp && <SignUp />}
      {page !== Page.Login && page !== Page.SignUp && <LoggedIn page={page} />}
  );
}
