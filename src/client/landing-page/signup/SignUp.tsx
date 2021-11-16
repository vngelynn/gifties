import React, { useCallback } from 'react';

import useField from './../../hooks/useField';

import './SignUp.scss';

export default function SignUp() {
  const [name, onNameChange] = useField('');
  const [email, onEmailChange] = useField('');
  const [password, onPasswordChange] = useField('');

  const attemptCreateAccount = useCallback(() => {
    // TODO POST /api/user
    console.log('signup attempt made'); // ! remove
  }, [name, email, password]);

  return (<>
    <h1>Sign Up</h1>
    <div id='signup-form'>
      <input type='text' value={name} onChange={onNameChange} />
      <input type='email' value={email} onChange={onEmailChange} />
      <input type='password' value={password} onChange={onPasswordChange} />
      {/* TODO handle profile image selection and security questions */}
      <button type='submit' onClick={attemptCreateAccount}>Create Account</button>
    </div>
  </>);
}
