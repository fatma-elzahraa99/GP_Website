import React from 'react';
import {Button, Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import MyVerticallyCenteredModal from './Modal';


const Meeting=()=>{
    const [modalShow, setModalShow] = React.useState(false);
    return(
    
        <div>
            <Card>
        <Card.Header className = 'CardHeader'>Welcome fatma!</Card.Header>
        <Card.Body>
            <Container>
               <Row  className="justify-content-md-center">
              
               <a id="content1" class=" btn btn-primary" href="/meeting">Create meeting </a> 
               <div class="divider"/>
               <Button  id="content2"  color="primary">chat bot</Button>
                </Row> 
                <div class="divider"/>    
               <Row  className="justify-content-md-center">
               <Button className="buttoncenter" id="content3" color="primary"  onClick={() => setModalShow(true)}>
                join meeting</Button>
               <Button  id="content2"  variant="danger">Log out</Button>
              </Row>
                                    
                                 

            </Container>
        
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
       
    

        </div> 
        
          );
        
        

   

}
export default Meeting;