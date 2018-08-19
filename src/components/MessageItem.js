import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import DefaultProfileImage from "../images/default-profile-image.jpg";

const MessageItem = ({date, username, text, profileImageUrl}) => (
  <div>
    <img
      src={profileImageUrl || DefaultProfileImage}
      alt={username}
      height="100"
      width="100"
      className="timeline-image"
    />
    <div className="message-area">
      <Link to="/">@{username} &nbsp;</Link>
      <span>
        <Moment fromat="DD MM YYYY">
          {date}
        </Moment>
      </span>
      <p>{text}</p>
    </div>
  </div>
)

export default MessageItem;
