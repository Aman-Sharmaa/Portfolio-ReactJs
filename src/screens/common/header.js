import { BiWifiOff, BiWifi2 } from 'react-icons/bi';
import { BsFillFolderFill } from 'react-icons/bs';
import { SiSublimetext } from 'react-icons/si';
import { AiFillApple } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';


import React, { useState,useEffect } from 'react';
function Header() {



  const navigate = useNavigate();

  function handleExperience() {
      navigate('/homescreen/experience');
  }

  function handleBack() {
    navigate('/');
}
  
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnlineStatus() {
      setIsOnline(true);
    }

    function handleOfflineStatus() {
      setIsOnline(false);
    }

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);
    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  });
   
  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
const formattedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
const [batteryLevel, setBatteryLevel] = useState(null);
useEffect(() => {
  const getBatteryLevel = async () => {
    try {
      const battery = await navigator.getBattery();
      setBatteryLevel(battery.level * 100);
    } catch (err) {
      console.error(err);
    }
  };
  getBatteryLevel();
  navigator.getBattery().then(function(battery) {
    battery.addEventListener('levelchange', function() {
      setBatteryLevel(battery.level * 100);
    });
  });
}, []);


const batteryColor = batteryLevel > 20 ? 'white' : 'grey';
const batteryIcon = batteryLevel > 20 ?
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="1" y="3" width="12" height="8" rx="1" ry="1" fill="#fff" stroke="#000" strokeWidth="1" />
    <rect x="13" y="5" width="2" height="4" rx="1" ry="1" fill="#000" />
    <rect x="2" y="4" width={batteryLevel * 0.1 * 8} height="6" rx="1" ry="1" fill={batteryColor} />
  </svg>
:
  <svg width="16" height="16" viewBox="0 0 16 16">
    <rect x="1" y="3" width="12" height="8" rx="1" ry="1" fill="#fff" stroke="#000" strokeWidth="1" />
    <rect x="13" y="5" width="2" height="4" rx="1" ry="1" fill="#000" />
    <path d="M2,5 L2,11 L3,12 L14,12 L15,11 L15,5 L2,5 z M3,6 L14,6 L14,10 L3,10 L3,6 z" fill={batteryColor} />
  </svg>;




const [selectedOption, setSelectedOption] = useState("");

  function handleSelect(event) {
    setSelectedOption(event.target.value);
  }





  return (
    <div className="header">
      
    <p id="logo">
     < AiFillApple />
      Apple
    </p>
        
        <p id="time">{formattedDate} {formattedTime}</p>
        <p id="battery">{batteryIcon}{batteryLevel}%</p>
        <p id="wifi"> {isOnline ? <BiWifi2 /> : <BiWifiOff />}</p>
        <p id="name"></p>
      
    </div>
  );
}

export default Header;
