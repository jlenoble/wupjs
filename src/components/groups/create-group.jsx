import React from 'react';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {startNamingSelection, unfocusCurrentItem} from '../../actions';
import {dispatch} from '../../server/store';

const CreateGroup = () => {
  return (
    <GlyphButtonGroup
      glyphs={['save']}
      onClicks={{
        'save': () => {
          dispatch(unfocusCurrentItem());
          dispatch(startNamingSelection());
        },
      }}
    />
  );
};

export default CreateGroup;
