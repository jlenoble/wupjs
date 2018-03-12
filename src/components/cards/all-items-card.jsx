import CardFactory from './card-factory';

export default CardFactory({title: true, createItem: true},
  {inlineRight: ['editItem', 'deleteItem']});
