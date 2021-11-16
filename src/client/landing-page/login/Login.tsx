import React, { useState, useCallback } from 'react';

import useField from './../../hooks/useField';

import './Login.scss';

export default function Login({
  showSignUpPage,
  showPasswordRecoveryPage
}: {
  showSignUpPage: () => void;
  showPasswordRecoveryPage: () => void;
}) {
  const [email, onEmailChange] = useField('');
  const [password, onPasswordChange] = useField('');
  const [wasFailedAttemptMade, setWasFailedAttemptMade] = useState<boolean>(false); // TODO

  const attemptLogin = useCallback(() => {
    // TODO POST /login
    console.log('login attempt made'); // ! remove

    setWasFailedAttemptMade(true);
  }, [email, password]);

  return (<>
    <h1>Login</h1>
    <div id='login-form'>
      <input type='email' value={email} onChange={onEmailChange} />
      <input type='password' value={password} onChange={onPasswordChange} />
      <button type='submit' onClick={attemptLogin}>Login</button>
      <button type='submit' onClick={showSignUpPage}>Sign Up</button>
      {wasFailedAttemptMade && <div>
        <a id='password-recovery' onClick={showPasswordRecoveryPage}>Forgot password?</a>
      </div>}
    </div>
  </>);
}
