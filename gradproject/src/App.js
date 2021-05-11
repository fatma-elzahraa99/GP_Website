import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Signup from './Components/Signup';
import Story from './Components/Story';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Footer from './Components/footer';*/
import Homer from './Components/Homer';
import Homelogged from './Components/Homelogged';
import Chatsystem from'./Components/Chatsystem';

class App extends Component{
  render(){
    return (
      <div className="App" >

        <BrowserRouter>
       
          <Nav/>
          <Route exact path="/" component={Homer}/>
          <Route  path="/signup" component={Signup}/>
          <Route  path="/story" component={Story}/>
        </BrowserRouter>

        <BrowserRouter>
        <Route path="/meeting" component={Chatsystem}/>
        </BrowserRouter>


        <BrowserRouter>
        <Route  path="/homelogged" component={Homelogged}/>
        </BrowserRouter>

        {/* <BrowserRouter>
        <Route  path="/homelogged" component={signedup}/>
        </BrowserRouter> */}
        
        
    
       
         

        

        </div>
    );

  }
  
}

export default App;
