
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import useForm from './UseForm';
import validate from './validateInfo';

const Login = ({submitForm}) => {
  const { handleChange, values, handleSubmit, errors} = useForm(
        submitForm, 
        validate
        );


  return (
    <Form onSubmit={handleSubmit} className="login-form" noValidate>
        <h1>Dating Roulette</h1> 
        <h2 className="text-center"> Welcome</h2>

        <FormGroup>
            <Label>Email</Label>
            <Input 
            type='email'
            name='email'
            placholder='Email' 
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
        </FormGroup>

        <FormGroup>
            <Label>Password</Label>
            <Input
            type='password'
            name='password'
            placholder='Password' 
            value={values.password} 
            onChange={handleChange} 
            />
            {errors.password && <p>{errors.password}</p>}
            
        <Button className="btn-lg btn-dark mt-3">
            Log in 
        </Button>
        <div className="text-center pt-3">
            Log in with Facebook
        </div>
        </FormGroup>
         
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
