import React from 'react';
import {GlyphButtonGroup} from 'wupjs-glyph-button';
import {uiActions} from '../../actions';
import {dispatch} from '../../server/store';

const {startNamingSelection, unfocusCurrentItem} = uiActions;

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
