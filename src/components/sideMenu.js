import React from "react";
import "./sideMenu.css";
import GridViewIcon from "@mui/icons-material/GridView";
import TaskIcon from "@mui/icons-material/Task";
import DescriptionIcon from "@mui/icons-material/Description";
import EventNoteIcon from "@mui/icons-material/EventNote";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const SideMenu = () => {
  let iconStyle = { color: "white" };
  let belowIconStyle = {color: "red" , width:10 };
  let belowBusinessIconStyle ={color: "yellow" , width:10}
  let belowPersonalIconStyle ={color: "blue" , width:10}
  return (
    <div className="side-menu">
      <div className="top-blank">
        <span className="dot"></span>
        {/* <span><hr className="line"/></span> */}
      </div>
      <div className="main-side-menu">
        <div className="overview">
          <div className="overview-icon">
            <GridViewIcon style={iconStyle} />
          </div>
          <div className="overview-content">Overview</div>
        </div>

        <div className="wrapper">
          <div className="icon">
            <TaskIcon style={iconStyle} />
          </div>
          <div className="content">Tasks</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <DescriptionIcon style={iconStyle} />
          </div>
          <div className="content">Documents</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <EventNoteIcon style={iconStyle} />
          </div>
          <div className="content">Notes</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <AssignmentTurnedInIcon style={iconStyle} />
          </div>
          <div className="content">Output</div>
        </div>
        <div className="wrapper">
          <div className="icon">
            <SupportAgentIcon style={iconStyle} />
          </div>
          <div className="content">Support</div>
        </div>
      </div>
      <div className="below-menu">
        <div className="project">
          <div className="project-icon">
                <FiberManualRecordIcon style={belowIconStyle}/>
          </div>
          <div className="below-content" id="project">Projects</div>
        </div>
        <div className="business">
          <div className="business-icon">
                <FiberManualRecordIcon style={belowBusinessIconStyle}/>
          </div>
          <div className="below-content">Business</div>
        </div>
        <div className="personal">
          <div className="personal-icon">
                <FiberManualRecordIcon style={belowPersonalIconStyle}/>
          </div>
          <div className="below-content">Projects</div>
        </div>
      </div>
      <div className="footer">
          <div className="socialMediaIcon">
                <div className="fb-icon">
                    <FacebookIcon style={iconStyle}/>
                </div>
                <div className="twitter-icon">
                    <TwitterIcon style={iconStyle}/>
                </div>  
                <div className="linkedin-icon">
                    <LinkedInIcon style={iconStyle}/>
                </div>
          </div>
          <div className="copyright">
                <p><span>2021 </span>All rights reserved</p>
          </div>
      </div>
    </div>
  );
};

export default SideMenu;
