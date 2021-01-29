import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Homer from './Components/Homer';
import Signup from './Components/Signup';
import Story from './Components/Story';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component{
  render(){
    return (
        <BrowserRouter>
        <div className="App">
          <Nav/>
          <Route exact path="/" component={Homer}/>
          <Route  path="/signup" component={Signup}/>
          <Route  path="/story" component={Story}/>

        </div>
        </BrowserRouter> 
    );

  }
  
}

export default App;
