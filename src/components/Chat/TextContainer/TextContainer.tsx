import React from 'react';

import onlineIcon from '../../../assets/img/icons/onlineIcon.png';


interface User {
  name: string;
}

interface TextContainerProps {
  users: User[];
}

const TextContainer: React.FC<TextContainerProps> = ({ users }) => (
  <div className="hidden md:flex flex-col ml-[100px] text-white h-[60%] justify-between">
  {users && users.length > 0 ? (
    <div>
      <h1 className="mb-0">People currently chatting:</h1>
      <div className="flex items-center mb-[50%]">
        <h2>
          {users.map(({ name }) => (
            <div key={name} className="flex items-center">
              {name}
              <img className="pl-2" alt="Online Icon" src={onlineIcon} />
            </div>
          ))}
        </h2>
      </div>
    </div>
  ) : null}
</div>

);

export default TextContainer;
