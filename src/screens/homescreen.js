import Finder from "../assets/img/finder.svg";
import Chrome from "../assets/img/chrome.svg";
import Github from "../assets/img/github.svg";
import Launchpad from "../assets/img/lanchpad.png";
import React, { useState, useEffect } from "react";
import { BsFillFolderFill, BsLinkedin } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import Bing from "../assets/img/edge.png";

function Homescreen() {
  const navigate = useNavigate();

  function handleExperience() {
    navigate("/homescreen/experience");
  }
  function handleEducation() {
    navigate("/homescreen/education");
  }
  function handleLinked() {
    navigate("/homescreen/linkedin");
  }
  function handleEdge() {
    navigate("/homescreen/edge");
  }

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnlineStatus() {
      setIsOnline(true);
    }

    function handleOfflineStatus() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOfflineStatus);
    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOfflineStatus);
    };
  });

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
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
    navigator.getBattery().then(function (battery) {
      battery.addEventListener("levelchange", function () {
        setBatteryLevel(battery.level * 100);
      });
    });
  }, []);

  const batteryColor = batteryLevel > 20 ? "white" : "red";
  const batteryIcon =
    batteryLevel > 20 ? (
      <svg width="16" height="16" viewBox="0 0 16 16">
        <rect
          x="1"
          y="3"
          width="12"
          height="8"
          rx="1"
          ry="1"
          fill="#fff"
          stroke="#000"
          strokeWidth="1"
        />
        <rect x="13" y="5" width="2" height="4" rx="1" ry="1" fill="#000" />
        <rect
          x="2"
          y="4"
          width={batteryLevel * 0.1 * 8}
          height="6"
          rx="1"
          ry="1"
          fill={batteryColor}
        />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 16 16">
        <rect
          x="1"
          y="3"
          width="12"
          height="8"
          rx="1"
          ry="1"
          fill="#fff"
          stroke="#000"
          strokeWidth="1"
        />
        <rect x="13" y="5" width="2" height="4" rx="1" ry="1" fill="#000" />
        <path
          d="M2,5 L2,11 L3,12 L14,12 L15,11 L15,5 L2,5 z M3,6 L14,6 L14,10 L3,10 L3,6 z"
          fill={batteryColor}
        />
      </svg>
    );

  const handleOpenWebsite = () => {
    window.open("https://linkedin.com", "_blank");
  };

  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleButtonClick = () => {
    navigate("/homescreen/browser");
  };

  return (
    <div className="homescreen">
      <div className="homescreen-folder">
        <div class="folder-name" onDoubleClick={handleExperience}>
          <BsFillFolderFill id="folder" />
          <p>Folder 1</p>
        </div>

        <div class="folder-name" onDoubleClick={handleExperience}>
          <BsFillFolderFill id="folder" />
          <p>Folder 2</p>
        </div>

        <div class="folder-name" onDoubleClick={handleExperience}>
          <BsFillFolderFill id="folder" />
          <p>Folder 3</p>
        </div>
      </div>

      <div className="bg-text">
        <div class="folder-name doc">
          <img src={Finder} id="doc" onClick={handleExperience} />
          <img src={Launchpad} id="launchpad" onClick={handleExperience} />
          <div class="line"></div>
          <img src={Chrome} onClick={handleButtonClick} id="doc" />
          <Link to="https://github.com/Aman-Sharmaa/" target="_ blank">
            {" "}
            <img src={Github} id="docc" />
          </Link>
          <BsLinkedin onClick={handleLinked} id="doc" />
          <img src={Bing} onClick={handleEdge} id="doc" />
        </div>
      </div>
    </div>
  );
}

export default Homescreen;
