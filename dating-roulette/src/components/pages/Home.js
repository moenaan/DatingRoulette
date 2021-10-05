
import React, { useState } from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

// import '../../Contact.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword } from '../../utils/helpers';

function FormField() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either username, and password
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
   };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!checkPassword(password) || !userName) {
      setErrorMessage('password or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(password)) {
      setErrorMessage(
        `Choose a more secure password for the account: ${userName}`
      );
      return;
    }
    alert(`Hello ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
  };


//   return (
//     <div>
//     <p>Hello {userName}</p>
//     <form className="form">
//       <input
//         value={userName}
//         name="userName"
//         onChange={handleInputChange}
//         type="text"
//         placeholder="username"
//       />
//       <input
//         value={password}
//         name="password"
//         onChange={handleInputChange}
//         type="password"
//         placeholder="Password"
//       />
//      <button type="button" onClick={handleFormSubmit}>Submit</button>
//     </form>
//     {errorMessage && (
//       <div>
//         <p className="error-text">{errorMessage}</p>
//       </div>
//     )}
//   </div>
//  );
// }

// export default Form;

 return (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            value={userName}
            onChange={handleInputChange}
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            type='userName'
          />
          <Form.Input
            value={password}
            onChange={handleInputChange}
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' onClick ={handleFormSubmit} icon='signup' size='big' />
        <Form.Input
            value={password}
            onChange={handleInputChange}
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />
            <Form.Input
            value={userName}
            onChange={handleInputChange}
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            type='userName'
          />
         
      </Grid.Column>
      {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
 )
}

export default FormField;
