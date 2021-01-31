import React ,{Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import theimage from '../image_2.jpg';

class Jump extends Component{
    render(){
        return(
            <Jumbotron className="jumpo">
                <div className="container ">
                    <div className="row row-header ">
                      <div class='col-12 col-sm-7' > 
                      <h1 className="para">Wired Meetings</h1>
                      <p className="para">We believe that communication should make no diffrentiation , all people should have the same oppurtunity in communicating and having smooth interviews experience , disablities should never be obstacles !</p>
                     </div>
                    <div class='col-12 col-sm-5'>
                    <img src={theimage} className="img-fluid"/>
                    </div>
                    </div>

                </div>
            
                
           </Jumbotron> 

        );
    }
}
export default Jump;
