import React from 'react';

export default ({children}) => (
  <div className="row">
    {children.map((child, i) => (
      <div
        className="col"
        key={'wup-' + i}
      >
        {child}
      </div>
    ))}
  </div>
);
