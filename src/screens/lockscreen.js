import Profile from "../assets/img/profile.svg"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


  

function Lockscreen(){

    const navigate = useNavigate();
    function handleUnlock() {
        navigate('/homescreen');
         if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        setIsFullScreen(true);
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          setIsFullScreen(false);
        }
      }

      }
      

    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
     
    };
  
    return (
        <div className="lockscreen">
           <div class="user-details">             
              <img src={Profile} />
           </div>
           <div className="user-details">
               <h1>Aman Sharma</h1>
           </div>
           <div className="user-details">
               <button onClick={handleUnlock}>Signin</button>
           </div>
          
        </div>
    )

}

export default Lockscreen;