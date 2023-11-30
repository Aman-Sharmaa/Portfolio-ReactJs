import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiFillPhone } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";
import BTP  from "../../assets/img/btp.png";
import FH  from "../../assets/img/firsthive.png";
import { useNavigate, Link } from "react-router-dom";
import Aman from "../../assets/img/aman.svg";
import BL from "../../assets/img/bl.svg";
import EASY from "../../assets/img/easyexport.svg";
import Esy from "../../assets/img/easy.png";
import Ped from "../../assets/img/ped.png";
import Floro from "../../assets/img/florosense.svg";
import Aikyaa from "../../assets/img/aikya.svg";
import Indie from "../../assets/img/indiecherry.svg";
import DR from "../../assets/img/dr.png";
import MG from "../../assets/img/mg.png";
import { MdOnlinePrediction } from "react-icons/md";

function NewTemplate() {
  const [activity, setActivity] = useState('');
  useEffect(() => {
    const getCurrentTime = () => {
      const currentTime = new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      });
      return currentTime;
    };

    const updateActivity = () => {
      const currentTime = getCurrentTime();
      const timeRanges = [
        { start: '08:00', end: '08:30', activity: 'Trying to Wake Up 🛀🏻' },
        { start: '08:30', end: '09:00', activity: 'Bathing 🛀🏻' },
        { start: '09:00', end: '10:00', activity: 'Travelling' },
        { start: '10:00', end: '10:20', activity: 'Tea Time ☕' },
        { start: '10:20', end: '13:00', activity: 'Working ⌨️' },
        { start: '13:00', end: '14:00', activity: 'Lunch Time' },
        { start: '14:00', end: '16:00', activity: 'Working ⌨️' },
        { start: '16:00', end: '16:20', activity: 'Tea Time ☕' },
        { start: '16:20', end: '18:00', activity: 'Working ⌨️' },
        { start: '18:00', end: '18:40', activity: 'Travelling' },
        { start: '18:40', end: '19:00', activity: 'Resting' },
        { start: '19:00', end: '20:00', activity: 'Free Time 🆓' },
        { start: '20:00', end: '21:00', activity: 'Dinner Time 🍽️' },
        { start: '21:00', end: '00:00', activity: 'On call! 🛌' },
        { start: '00:00', end: '08:00', activity: 'Sleeping 🛌' },
      ];

   
      for (const range of timeRanges) {
        const startTime = new Date(`01/01/2000 ${range.start}`);
        const endTime = new Date(`01/01/2000 ${range.end}`);
        const currentTime = new Date(`01/01/2000 ${getCurrentTime()}`);

        if (currentTime >= startTime && currentTime < endTime) {
          setActivity(range.activity);
          break;
        }
      }
    };

    updateActivity();
    const interval = setInterval(updateActivity, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-container">
      <div className="home-div">
        <div className="userName-active">
          <h1>
            <span id="active" />
            Full-Stack Developer
          </h1>
          <p>{activity}</p>
        </div>
        <div className="name-profile">
          <div className="name-profile-left">
            <h2>I'm Aman Sharma</h2>
            <p>
              Transforming ideas into reality!
              <br />
              Currently working at
              <a
                href="https://www.linkedin.com/company/firsthivecdp/"
                target="_blank"
              >
                FirstHive (CDP)
              </a>
              <p>
                Drop inquiry on
                <a href="mailto:amansharma57269@gmail.com">Mail</a>
              </p>
              <div className="btn">
                <a href="tel:+91 9506521413">
                  <button id="darkBtn">
                    <BsPhoneVibrate id="darkIcon" />
                    Call
                  </button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1X4SqpfKcD0z8ShvYMsf1LwL6LK2QwhL3/view"
                  target="_blank"
                >
                  <button id="lightBtn">
                    <FaGoogleDrive id="darkIcon" />
                    Resume
                  </button>
                </a>
                <a
                  href="https://calendly.com/amnshrma/30min"
                  target="_blank"
                >
                  <button id="lightBtn">
                  <MdOnlinePrediction id="darkIcon" />
                    1:1 Connect
                  </button>
                </a>
              </div>
            </p>
          </div>
          <div className="name-profile-right">
            <img src={Aman} />
          </div>
        </div>

        <div className="projects">
          <div className="userName-active">
            <h1>
              <span id="active" />
              Skills
            </h1>
          </div>
          <div className="skills">
            <p id="type">Backend Technology</p>
            <p>ExpressJs, NodeJs, PHP</p>
            <p id="type">FrontEnd Technology</p>
            <p>
              ReactJs, HTML5, CSS3, BootStrap, JS, Wordpress(Custom
              Developement), ElectronJs
            </p>
            <p id="type">Tools & Technology</p>
            <p>Figma,<a href="https://github.com/Aman-Sharmaa" target="_blank"> Github</a>, Linux</p>
            <p id="type">App Developement</p>
            <p>React Native</p>
            <p>
              <a href="https://bit.ly/amnshrma" target="_blank">
                Download Resume
              </a>
            </p>
          </div>
        </div>
        <div className="projects">
          <div className="userName-active">
            <h1>
              <span id="active" />
              Work Experience 
            </h1>
          </div>
        
        
        
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={FH} />
              </div>
              <div className="projectName">
                <p id="name">FirstHive</p>
                <p id="overview">Customer Data Platform</p>
              </div>
              <div className="projectView">
                <p>Nov 2023 - Present</p>
              </div>
              <div className="readmore">
              <a href="https://www.linkedin.com/company/firsthivecdp/mycompany/" target="_blank">
                <p>Read more</p>
              </a>
              </div>
            
            </div>
       
   
        

       
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={BTP} />
              </div>
              <div className="projectName">
                <p id="name">Being The Parent</p>
                <p id="overview">Pregnancy & Parenting Solutions</p>
              </div>
              <div className="projectView">
                <p>Aug 2021 - Oct 2023 · 2 yrs 3 mos</p>
              </div>
              <div className="readmore">
              <a href="https://www.linkedin.com/company/mykids-ventures-private-limited/" target="_blank">
              <p>Read more</p>
              </a>
              </div>
            </div>
      
   
        
       
        </div>
        <div className="projects">
          <div className="userName-active">
            <h1>
              <span id="active" />
              Projects (R&D)
            </h1>
          </div>
          
          <a href="https://btpbrandlabs.com/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={BL} />
              </div>
              <div className="projectName">
                <p id="name">BTP BrandLabs</p>
                <p id="overview">Business Model, MERN Stack</p>
              </div>
              <div className="projectView">

              </div>
            </div>
          </a>

          <a href="https://easyexport.in" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={EASY} />
              </div>
              <div className="projectName">
                <p id="name">EasyExport</p>
                <p id="overview">India-Bhutan Import Export Billing System </p>
              </div>
              <div className="projectView">{/*  */}</div>
            </div>
          </a>
          <a href="https://florosense.com" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Floro} />
              </div>
              <div className="projectName">
                <p id="name">Florosense</p>
                <p id="overview">Energy & Environment Solutions</p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
          <a href="https://aikyaa.in" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Aikyaa} />
              </div>
              <div className="projectName">
                <p id="name">Aikyaa</p>
                <p id="overview">CA Consultation</p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
          <a href="https://indiecherry.com/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Indie} />
              </div>
              <div className="projectName">
                <p id="name">IndieCherry</p>
                <p id="overview">Marketplace, WooCommerce</p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
          <a href="https://bill.easyexport.in" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Esy} />
              </div>
              <div className="projectName">
                <p id="name">Easy Bill</p>
                <p id="overview">Billing System</p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
          <a href="https://www.pediatricimmunologist.in/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Ped} />
              </div>
              <div className="projectName">
                <p id="name">Pediatric Immunologist</p>
                <p id="overview">Doctor Consultation, PHP </p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
          <a href="http://www.drstalin.in/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={DR} />
              </div>
              <div className="projectName">
                <p id="name">Dr Stalin</p>
                <p id="overview">Doctor Consultation, PHP </p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
          <a href="https://multigrad.in" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={MG} />
              </div>
              <div className="projectName">
                <p id="name">Multigrad</p>
                <p id="overview">Edtech, React Native, MERN </p>
              </div>
              <div className="projectView"></div>
            </div>
          </a>
        </div>
        
        <div className="connect">
          <h3>Let's work together</h3>
          <p>Transforming ideas into reality!</p>
          <div className="btnCnt"></div>
        </div>
       
      </div>
     
    </div>
  );
}

export default NewTemplate;
