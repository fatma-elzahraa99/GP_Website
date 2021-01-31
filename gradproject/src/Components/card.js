import React from 'react' ;
import {Card} from 'react-bootstrap';
import Forma from './Form';


const CardComponent = () =>{
    return(
        <Card>
  <Card.Header className = 'CardHeader'>Login</Card.Header>
  <Card.Body>
   <Forma/>
  </Card.Body>
</Card>
    );
}

export default CardComponent ;