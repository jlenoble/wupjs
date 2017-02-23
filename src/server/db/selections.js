import mongoose from './mongoose';

const selectionSchema = new mongoose.Schema({
  itemId: String,
  items: Array,
});

export const Selection = mongoose.model('Selection', selectionSchema);
