import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiFillPhone } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { FaGoogleDrive } from "react-icons/fa";

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
function NewTemplate() {
  return (
    <div className="main-container">
      <div className="home-div">
        <div className="userName-active">
          <h1>
            <span id="active" />
            Full-Stack Developer
          </h1>
          <p>Available for work</p>
        </div>
        <div className="name-profile">
          <div className="name-profile-left">
            <h2>I'm Aman Sharma</h2>
            <p>
              Transforming ideas into reality!
              <br />
              Currently Working at
              <a
                href="https://www.linkedin.com/company/mykids-ventures-private-limited/"
                target="_blank"
              >
                BeingTheParent
              </a>
              <p>
                Drop a ❤️ on
                <a href="mailto:amansharma57269@gmail.com">Mail</a>
              </p>
              <div className="btn">
                <a href="tel:+91 9506521413">
                  <button id="darkBtn">
                    <BsPhoneVibrate id="darkIcon" />
                    Call Me
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
              Projects (R&D)
            </h1>
          </div>
          {/*
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
          </a> */}

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
          {/* <a href="https://indiecherry.com/" target="_blank">
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
          </a> */}
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
          {/* <a href="https://www.pediatricimmunologist.in/" target="_blank">
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
          </a> */}
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
            <p>Figma, Github, Linux</p>
            <p id="type">App Developement</p>
            <p>React Native</p>
            <p>
              <a href="https://bit.ly/amnshrma" target="_blank">
                Download Resume
              </a>
            </p>
          </div>
        </div>
        <div className="connect">
          <h3>Let's work together</h3>
          <p>Transforming ideas into reality!</p>
          <div className="btnCnt"></div>
        </div>

        {/* <div className="social">
          <div className="userName-active">
            <h1>
              <span id="active" />
              Resume
            </h1>
          </div>
          <div className="socialRight"></div>
        </div> */}
      </div>
    </div>
  );
}

export default NewTemplate;
