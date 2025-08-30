import React from 'react';

const Card = ({
  children,
  className,
  shadow,
}) => (
  <div className={`rounded-lg px-8 py-12 ${shadow && 'shadow-lg'} ${className}`}>
    {children}
  </div>
);

export default Card;
