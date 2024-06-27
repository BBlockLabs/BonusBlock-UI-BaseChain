import React, { useState } from 'react';
import './RainbowButton.css';
import RainbowButtonBg from '../../assets/svg/rainbowbuttonBackground.svg';

interface RainbowButtonProps {
  text: string;
  onClick: () => void;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <div className={`rainbow-button-wrapper ${isClicked ? 'clicked' : ''}`}>
      <div
        className='rainbow-background'
        style={{ backgroundImage: `url(${RainbowButtonBg})` }}
      ></div>
      <button
        onClick={handleClick}
        className='rainbow-button'
      >
        {text}
      </button>
    </div>
  );
};

export default RainbowButton;
