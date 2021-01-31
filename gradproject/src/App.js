import React,{Component} from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Homer from './Components/Homer';
import Signup from './Components/Signup';
import Story from './Components/Story';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/footer';




class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
       
          <Nav/>
          <Route exact path="/" component={Homer}/>
          <Route  path="/signup" component={Signup}/>
          <Route  path="/story" component={Story}/>

        
        </BrowserRouter> 

        <Footer/>
        </div>
    );

  }
  
}

export default App;
