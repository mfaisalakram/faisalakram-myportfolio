import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>faisalakram1133@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/faisalakram1133/" target={'_blank'}><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/shery.badista.3/" target={'_blank'}><Facebook color="white" size={"3rem"} /></a>
          <a href="https://github.com/mfaisalakram" target={'_blank'}><Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/faisal-akram-a55245199/" target={'_blank'}><LinkedIn color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
