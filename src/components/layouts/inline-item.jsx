import React from 'react';

export default ({children = []}) => {
  return (
    <div className="vertical-align grow">
      {children[0]}
      <span className="grow">{children[1]}</span>
      {children[2]}
    </div>
  );
};
