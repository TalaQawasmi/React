import './App.css';
import React, { useState } from 'react';
import MessageForm from './Components/MessageForm';
import MessageDisplay from './Components/MessageDisplay';

function App() {
  const [currentMsg, setCurrentMsg] = useState([]);
  
  const youveGotMail = ( newMessage ) => {
      setCurrentMsg( currentMsg.concat(newMessage) );
  }
  
  return (
      <>
          <MessageForm youveGotMail={ youveGotMail } />
          <MessageDisplay message={ currentMsg } />
      </>
  );
}

export default App;
