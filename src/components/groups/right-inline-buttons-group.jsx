import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {getGlyphs, onClicks} from './helpers';

const RightInlineButtonsGroup = ({item, ui}) => {
  const glyphs = getGlyphs(ui);

  return (
    <GlyphButtonGroup
      glyphs={glyphs}
      onClicks={onClicks(item, ui, glyphs)}
    />
  );
};

RightInlineButtonsGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default RightInlineButtonsGroup;
