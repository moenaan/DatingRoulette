import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GoogleLoginButton } from 'react-social-login-buttons';

import { FormGroup, Label } from 'reactstrap';

import Auth from '../utils/auth';
//sign up page

// sign up ends
const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main className="login-form">
      <div className="col-12 col-lg-10">
      <div className="card">
      <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">

          {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <form onSubmit={handleFormSubmit} className>
              <FormGroup>
                <Label></Label>
                <input
                className="form-control"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                />
              </FormGroup>

              <FormGroup>
                <Label></Label>
                <input
                className="form-control"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                /> 
                </FormGroup>
                <button className="w-100 btn btn-lg btn-dark mt-3" type="submit">Login</button>
                <FacebookLoginButton className="mt-3 mb-3"/>
                <GoogleLoginButton className="mt-3 mb-3"/><br></br>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
