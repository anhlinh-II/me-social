import React from 'react';

import onlineIcon from '../../../assets/img/icons/onlineIcon.png';


interface InfoBarProps {
  chatName: string;
}

const InfoBar: React.FC<InfoBarProps> = ({ chatName }) => (
  <div className="flex items-center justify-between bg-[#2979FF] rounded-t-[4px] h-[50px] w-full">
  <div className="flex-1 flex items-center ml-[5%] text-white">
    <img className="mr-[5%] w-[20px] h-[20px]" src={onlineIcon} alt="online icon" />
    <h3>{chatName}</h3>
  </div>
</div>

);

export default InfoBar;
