import classnames from 'classnames';
import React, {PropTypes} from 'react';

const ButtonGroup = ({children, addClass}) => (
  <div className={classnames('btn-group', addClass)} role="group">
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: React.PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  ]).isRequired,
  addClass: PropTypes.string,
};

export default ButtonGroup;
