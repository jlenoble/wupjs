import React from 'react';
import PropTypes from 'prop-types';
import {itemPropType} from '../list/proptypes';
import InlineItem from '../layouts/inline-item';
import LeftInlineCheckboxesGroup from './left-inline-checkboxes-group';
import TitleGroup from './title-group';
import RightInlineButtonsGroup from './right-inline-buttons-group';

const ViewItemGroup = ({item, ui = {}}) => {
  return (
    <InlineItem>
      <LeftInlineCheckboxesGroup item={item} ui={ui.inlineLeft}/>
      <TitleGroup item={item}/>
      <RightInlineButtonsGroup item={item} ui={ui.inlineRight}/>
    </InlineItem>
  );
};

ViewItemGroup.propTypes = {
  item: itemPropType.isRequired,
  ui: PropTypes.object,
};

export default ViewItemGroup;
