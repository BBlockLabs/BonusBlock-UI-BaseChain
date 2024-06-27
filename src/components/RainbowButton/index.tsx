import React from 'react';
import './RainbowButton.css';

interface RainbowButtonProps {
  text: string;
  onClick: () => void;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='rainbow-button'
      >
      {text}
    </button>
  );
};

export default RainbowButton;
