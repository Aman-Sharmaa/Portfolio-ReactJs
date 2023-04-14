import { useNavigate,useLocation,Link } from 'react-router-dom';
import { BsWindowDesktop } from 'react-icons/bs';
import React, { useState,useEffect } from 'react';
import { AiOutlineFile } from 'react-icons/ai';
import {GoPrimitiveDot } from 'react-icons/go';
import {MdOutlineDownloadForOffline } from 'react-icons/md';
import Finder from "../assets/img/re.svg"
import {GrAppleAppStore } from 'react-icons/gr';

function Experience(){

    const navigate = useNavigate();

    function handleHome() {
        navigate('/homescreen');
    }

    function handleResume() {
      navigate('/homescreen/resume/');
  }




    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      function handleResize() {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const style = {
      height: `${height}px`,
      width: `${width}px`,
      border: '1px solid black',
    };
  
  

    
 
      
        useEffect(() => {
          function handleWheel(event) {
            if (event.deltaY < 0 || event.deltaY > 0) {
                navigate('/homescreen');
            }
          }
      
          window.addEventListener('wheel', handleWheel);
      
          return () => {
            window.removeEventListener('wheel', handleWheel);
          };
        });
      
        const location = useLocation();
        const currentPageName = location.pathname.split("/").pop();

        if(currentPageName=="experience"){
               var x = "active";
        }
        else    if(currentPageName=="education"){
               var y = "active";
        }

        else    if(currentPageName=="achievements"){
            var z = "active";
     }
     else    if(currentPageName=="hobbies"){
        var a = "active";
 }


    return(
        
        <div >
        <div className='close'>
            <div className="icon" onClick={handleHome}></div>
            <div className="icon white"></div>
            <div className="icon icon-left"></div>
        </div>
        <div className="left">
      
        <div className={`left-names ${z}`} id="top">
                <GrAppleAppStore />
                <p>Applications</p>
            </div>

            <div className={`left-names ${x}`}>
              
                <AiOutlineFile />
                <p>Documents</p>
            </div>

            <div className={`left-names ${y}`}>
                <MdOutlineDownloadForOffline />
                <p>Downloads</p>
            </div>


            

            <div className={`left-names ${a}`}>
                <BsWindowDesktop  />
                <p>Desktop</p>
            </div>

            <div className="left-names" id="topt">
                <p id="prt">Tags</p>
                <GoPrimitiveDot id="red"  />
                <p>Red</p>
            </div>

            <div className="left-names">
                <GoPrimitiveDot id="green" />
                <p>Green</p>
            </div>


            <div className="left-names">
                <GoPrimitiveDot id="yellow" />
                <p>Yellow</p>
            </div>


            <div className="left-names">
                <GoPrimitiveDot id="blue" />
                <p>Blue</p>
            </div>
        </div>

         <div className="right" >

       <div >
       <Link to="/homescreen/resume">  <img src={Finder} id="resume" /><p id="namee">Aman-Sharma.pdf</p></Link></div>
     </div></div>
    )
}


export default Experience;