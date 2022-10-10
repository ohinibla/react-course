import React from "react";

import avatar from "../images/avatar.jpg";
import email_icon from "../images/mail-icon.svg";
import linkedin_icon from "../images/linkedin-icon.svg";

export default function Info() {
  return (
    <div className="container container--info">
      <img src={avatar} />
      <h2 id="title">Nika Adibi</h2>
      <h3 id="job-title">Actress</h3>
      <h4 id="job-email">nika.adibi@imdb.com</h4>
      <div className="btn-group">
        <button>
          <img src={email_icon} alt="" />
          Email
        </button>
        <button>
          <img src={linkedin_icon} alt="" />
          LinkedIn
        </button>
      </div>
    </div>
  );
}
