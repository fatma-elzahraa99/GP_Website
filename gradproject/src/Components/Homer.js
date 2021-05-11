import React , {Component} from 'react';
import Jump from './Jumbtron';
import {Container , Row , Col } from 'react-bootstrap';
import CardComponent from './card'

class Home extends Component{
  
  render(){
    return(
      <div>
        <Jump/>
        <Container>
  <Row  className="justify-content-md-center">
    <Col> <CardComponent /></Col>
  </Row>
</Container>
      
      </div>

  );

  }
   
}
export default Home;