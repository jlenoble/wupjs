import React from 'react';
import {itemPropType} from '../list/proptypes';
import {GlyphCheckboxGroup} from 'wupjs-glyph-checkbox';
import {getGlyphs, onChecks, onUnchecks, checked} from './helpers';

const LeftInlineCheckboxesGroup = ({item, ui}) => {
  const glyphs = getGlyphs(ui);

  return (
    <GlyphCheckboxGroup
      glyphs={glyphs}
      onChecks={onChecks(item, ui, glyphs)}
      onUnchecks={onUnchecks(item, ui, glyphs)}
      checked={checked(item, ui, glyphs)}
    />
  );
};

LeftInlineCheckboxesGroup.propTypes = {
  item: itemPropType.isRequired,
};

export default LeftInlineCheckboxesGroup;
