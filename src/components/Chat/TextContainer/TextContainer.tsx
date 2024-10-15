import React from 'react';

import onlineIcon from '../../../assets/img/icons/onlineIcon.png';

import './TextContainer.css';

interface User {
  name: string;
}

interface TextContainerProps {
  users: User[];
}

const TextContainer: React.FC<TextContainerProps> = ({ users }) => (
  <div className="textContainer">
    {
      users && users.length > 0 ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name}
                  <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null
    }
  </div>
);

export default TextContainer;
