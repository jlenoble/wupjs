import {addAction} from './helpers';

addAction('EDIT_ITEM', ['_id', 'title', 'selectionId']);
addAction('UNFOCUS_CURRENT_ITEM');

addAction('SELECT_ITEM');
addAction('UNSELECT_ITEM');
