import React from "react";
import "./style.css";
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import { socialprofils } from "../../content_option";

export default function Socialicons(params) {
  return (
    <div className="stick_follow_icon">
      <ul>
        
        <li>
          <a target= "_black" href={socialprofils.github}>
            <FaGithub />
          </a>
        </li>
        
        <li>
          <a target= "_black" href={socialprofils.linkedin}>
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}
