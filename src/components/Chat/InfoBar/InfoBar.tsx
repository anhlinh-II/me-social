import React from 'react';

import onlineIcon from '../../../assets/img/icons/onlineIcon.png';

import './InfoBar.css';

interface InfoBarProps {
  chatName: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ chatName }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online icon" />
      <h3>{chatName}</h3>
    </div>
  </div>
);

export default InfoBar;
