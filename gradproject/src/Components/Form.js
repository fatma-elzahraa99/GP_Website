import React ,{Component} from 'react';
import {Button ,  Form } from 'react-bootstrap';




class Forma extends Component{
  constructor(){
    super();
    let action = "";
  }
    render(){
        return(
          

<Form  action={this.props.action} >

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
    <a class="btn btn-primary" href="/signup"> Signup</a>
    
 

</Form>
                              );
    }
}
export default Forma;
