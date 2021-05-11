import React,{Component} from'react';
import { Row} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Video extends Component {
    render() {
      return (
        <div className="vid1">
        
        <Row  >
        <video className="vivo" width="300" height="300" controls >
        </video>
        <video  className="vivo"width="300" height="300" controls >
       </video>
        </Row>
        
        <Button  id="content1"  color="primary"> Camera</Button>
        <Button  id="content1"  color="primary"> Mic</Button>
        <Button  id="content1" variant="danger">End Call</Button>
        
        </div>
      );
    }   
  }
  export default Video;