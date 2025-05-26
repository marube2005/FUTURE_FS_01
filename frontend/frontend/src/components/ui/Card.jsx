import React from 'react';
import './styles/Card.css';

const Card = ({ 
  children, 
  className = '', 
  elevated = false,
  ...props 
}) => {
  return (
    <div 
      className={`card ${elevated ? 'card-elevated' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
