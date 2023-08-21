import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineCopy } from "react-icons/ai";
import { GrFormNext } from "react-icons/gr";
import { FaHandPaper } from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";
import Aman from "../../assets/img/aman.svg";
import BL from "../../assets/img/bl.svg";
import EASY from "../../assets/img/easyexport.svg";
import Esy from "../../assets/img/easybil.svg";
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
              Just Doing what I Like, <br />
              Working at{" "}
              <a
                href="https://www.linkedin.com/company/mykids-ventures-private-limited/"
                target="_blank"
              >
                BeingTheParent
              </a>
              <div className="btn">
                <a href="mailto:amansharma57269@gmail.com">
                  <button id="darkBtn">
                    <AiOutlinePlusCircle id="darkIcon" />
                    Hire Me
                  </button>
                </a>

                <a
                  href="https://calendly.com/amnshrma/30min?back=1&month=2023-08"
                  target="_blank"
                >
                  <button id="lightBtn">
                    <FaHandPaper id="darkIcon" />
                    Connect
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
              Projects
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
                <GrFormNext id="next" />
              </div>
            </div>
          </a>

          <a href="https://easyexport.in/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={EASY} />
              </div>
              <div className="projectName">
                <p id="name">EasyExport</p>
                <p id="overview">Import Export Billing Automation, MERN</p>
              </div>
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
            </div>
          </a>

          <a href="https://www.florosense.com/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Floro} />
              </div>
              <div className="projectName">
                <p id="name">Florosense</p>
                <p id="overview">Products Showcase, Wordpress</p>
              </div>
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
            </div>
          </a>

          <a href="https://aikyaa.in/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Aikyaa} />
              </div>
              <div className="projectName">
                <p id="name">Aikyaa</p>
                <p id="overview">CA Website, Wordpress</p>
              </div>
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
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
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
            </div>
          </a>

          <a href="https://bill.easyexport.in" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={Esy} />
              </div>
              <div className="projectName">
                <p id="name">Easy Bill</p>
                <p id="overview">Marketplace, WooCommerce</p>
              </div>
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
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
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
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
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
            </div>
          </a>

          <a href="http://www.multigrad.in/" target="_blank">
            <div className="ListOfProjects">
              <div className="projectImg">
                <img src={MG} />
              </div>
              <div className="projectName">
                <p id="name">Multigrad</p>
                <p id="overview">Edtech, React Native, MERN </p>
              </div>
              <div className="projectView">
                <GrFormNext id="next" />
              </div>
            </div>
          </a>
        </div>
        <div className="connect">
          <h3>Let's work together</h3>
          <p>Creating user experience and visual appealing design</p>
          <div className="btnCnt">
            <a href="mailto:amansharma57269@gmail.com">
              <button id="darkBtn">
                <AiOutlinePlusCircle id="darkIcon" />
                Hire Me
              </button>
            </a>

            <a
              href="https://calendly.com/amnshrma/30min?back=1&month=2023-08"
              target="_blank"
            >
              <button id="lightBtn">
                <FaHandPaper id="darkIcon" />
                Connect
              </button>
            </a>
          </div>
        </div>

        {/* <div className="social">
          <div className="userName-active">
            <h1>
              <span id="active" />
              Follow Me
            </h1>
          </div>
          <div className="socialRight"></div>
        </div> */}
      </div>
    </div>
  );
}

export default NewTemplate;
