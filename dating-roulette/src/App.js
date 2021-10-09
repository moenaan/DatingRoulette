import React from 'react';
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
 import Form from '../src/components/Form'
 import Setup from './components/Setup'
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { FacebookLoginButton } from 'react-social-login-buttons';
import { Jumbotron } from 'reactstrap';

function App() {
    return (
        <div className ="App">
            <Jumbotron>
                <Form/>; 
                <Setup/>
            </Jumbotron>
        </div>
    )
}


export default App;
