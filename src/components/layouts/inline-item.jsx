import React from 'react';

export default ({children}) => {
  const [leftContent, middleContent, rightContent] = children;

  return (
    <div className="vertical-align grow">
      {leftContent}
      <span className="grow">{middleContent}</span>
      {rightContent}
    </div>
  );
};
