import React, { useState } from 'react';
import Login from './Login';
import FormSuccess from './FormSuccess';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
        <div className='form-container'>
          <span className='close-btn'>×</span>
          <div className='form-content-left'></div>
            {!isSubmitted ? <Login submitForm=
            {submitForm} /> : <FormSuccess />}
        </div>
      </>
     
    );
};

export default Form;