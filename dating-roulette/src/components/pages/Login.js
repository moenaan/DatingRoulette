
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';

import useForm from '../UseForm';

const Login = () => {
  const { handleChange, values, handleSubmit} = useForm();


  return (
      <Form className="login-form" onSubmit={handleSubmit}>
         <h1>Dating Roulette</h1> 
         <h2 className="text-center"> Welcome</h2>
         <FormGroup>
             <Label>Email</Label>
             <Input type="email"
              placholder="Email" 
              value={values.email}
              onChange={handleChange}
               />
         </FormGroup>
         <FormGroup>
             <Label>Password</Label>
             <Input type="password"
              placholder="Password" 
              value={values.password} 
              onChange={handleChange} 
              />
         </FormGroup>
         
         <Button className="btn-lg btn-dark mt-3">
          Log in 
         </Button>
         <div className="text-center pt-3">
             Log in with Facebook
         </div>
         <FacebookLoginButton className="mt-3 mb-3"/>
         <div className="text-center">
             <a href="/sign-up">Sign up</a>
             <span className="p-2">|</span>
             <a href="/forgot-password">Forgot Password</a>
         </div>
      </Form>    
   )
}

export default Login;
