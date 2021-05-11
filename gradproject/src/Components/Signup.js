import React from 'react';
import {Card} from 'react-bootstrap';
import FormSignup from './Signupform';

const Signup =()=>{
    return(
        <div>
             <Card class="nono">
  <Card.Header className = 'CardHeader'>Sign Up</Card.Header>
  <Card.Body>
  <FormSignup action="/signedup"/>
  </Card.Body>
</Card>
          
        </div>
    )

}
export default Signup;