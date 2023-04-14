
import './assets/css/App.css';
import Header from './screens/common/header';
import Lockscreen from './screens/lockscreen';
import Bing from './screens/bing';
import Homescreen from './screens/homescreen';
import Experience from './screens/experience';
import Resume from './screens/resume';
import Linked from './screens/linkedin';
import Browser from './screens/browser';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {


  const [isFullScreen, setIsFullScreen] = useState(false);

  function handleDoubleClick() {
  if (!document.fullscreenElement) {
    setIsFullScreen(true);
  } 
  else{
    if(document.fullscreenElement){
      setIsFullScreen(false);
    }
   
  }
}

  return (
    <div onTripleClick={handleDoubleClick}>
       <Header />
    <Routes>
    <Route path="/" element={<Lockscreen />} />
    <Route path="/homescreen" element={<Homescreen />} />
    <Route path="/homescreen/experience" element={<Experience />} />
    <Route path="/homescreen/browser" element={<Browser />} />
    <Route path="/homescreen/linkedin" element={<Linked />} />
    <Route path="/homescreen/resume" element={<Resume />} />
    <Route path="/homescreen/edge" element={<Bing />} />
    
   
 </Routes></div>
  );
}

export default App;
