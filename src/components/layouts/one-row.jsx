import React from 'react';

export default ({children}) => {
  const makeComponent = (child, i) => (
    <div
      className="col"
      key={'wup-' + i}
    >
      {child}
    </div>
  );

  return (
    <div className="row">
      {Array.isArray(children) ? children.map(makeComponent) :
        makeComponent(children, 0)}
    </div>
  );
};
