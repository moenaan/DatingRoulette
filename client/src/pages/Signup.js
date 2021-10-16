import React, { useState } from 'react';
import { FormGroup, Label } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';


import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

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
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="login-form">
    {/* <div className='new'>
      <img src='public/img1.jpg'/> 
    </div>  */}

<FormGroup>
    <Label></Label>
    <input
    className="form-control"
    placeholder="Your username"
    name="name"
    type="text"
    value={formState.name}
    onChange={handleChange}
    />
    </FormGroup>

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

    <button className="w-100 btn btn-lg btn-dark mt-3" type="submit">Sign Up</button> 
    
    {/* <FacebookLoginButton className="mt-3 mb-3"/> */}

    <div className="text-center">
        Already have an account Login  <Link href="/login">here</Link>
        <span className="p-2">|</span>
    <a href="/forgot-password">Forgot Password</a>
    </div>

    {error && (
          <div className="my-3 p-3 bg-danger text-white">
            {error.message}
          </div>
        )}
</form>
    
  );
};

export default Signup;
