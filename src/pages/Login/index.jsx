import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSelectors } from './../../reducers';
export default function Login() {
  const dispatch = useDispatch();
  const password = useSelector((state) =>
    loginSelectors.getPassword(state.login)
  );

  const onPassChange = (e) => {
    console.log(e.target.value);
    dispatch({ type: 'SAVE_PASSWORD', password: e.target.value });
  };

  const savePassword = () => {
    dispatch({ type: 'SAVE_PASSWORD' });
  };
  return (
    <div className="login">
      {' '}
      this is Login
      <input onChange={onPassChange} value={password} />
      <button onClick={savePassword}> save password</button>
      {password ? <span>{password}</span> : null}
    </div>
  );
}
