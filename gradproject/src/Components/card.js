import React from 'react' ;
import {Card} from 'react-bootstrap';
import Forma from './Form';


const CardComponent = (props) =>{
    return(
        <Card>
  <Card.Header className = 'CardHeader'>Login</Card.Header>
  <Card.Body>
   <Forma action="/homelogged"/>
  </Card.Body>
</Card>
    );
}

export default CardComponent ;