import React ,{Component} from 'react';
import Video from './Video';
import  './../App.css';
import ChatBody from "./chatBody/ChatBody";

class Chat extends Component{
    render(){
        return(
            <div>
                <Video/>
                <div className="__main">
    
               <ChatBody />
               </div>
            </div>
            
           


        );
    }
}
export default Chat;