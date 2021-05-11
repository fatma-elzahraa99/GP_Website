import React ,{Component} from 'react';
import {Button ,  Form } from 'react-bootstrap';




class FormSignup extends Component{
  constructor(){
    super();
    let action = "";
  }
    render(){
        return(
            <Form  action={this.props.action} >
     <Form.Group controlId="formBasicFName">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
   
  </Form.Group>

  <Form.Group controlId="formBasicLName">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" />
   
  </Form.Group>
     


    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group controlId="formBasicRepeatPassword">
    <Form.Label>Retype Password</Form.Label>
    <Form.Control type="password" placeholder=" Retype Password" />
  </Form.Group>

  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="remember me " />
  </Form.Group>
  <Button variant="primary" type="submit">
    SignUp
  </Button>
  
</Form>
                              );
    }
}
          

            
export default FormSignup;
