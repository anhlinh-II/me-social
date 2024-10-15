import React from 'react';

import onlineIcon from '../../../assets/img/icons/onlineIcon.png';

import './InfoBar.css';
import { IoClose } from 'react-icons/io5';

interface InfoBarProps {
  chatName: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ chatName }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{chatName}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><IoClose size={30} /></a>
    </div>
  </div>
);

export default InfoBar;
