import React ,{Component} from 'react';
import {Button ,  Form } from 'react-bootstrap';




class Forma extends Component{
  constructor(){
    super();
  }
    render(){
        return(
          

<Form>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Keep me logged in " />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
  <Form.Text >
     Not a user ?
    </Form.Text>
    <Button  variant="primary" type="submit">
    Signup
  </Button>

</Form>
                              );
    }
}
export default Forma;
