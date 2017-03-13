import React from 'react';

export default ({children}) => {
  const [leftContent, middleContent, rightContent] = children;

  return (
    <div className="vertical-align grow">
      <span>{leftContent}</span>
      <span className="grow">{middleContent}</span>
      <span>{rightContent}</span>
    </div>
  );
};
