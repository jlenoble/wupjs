import mongoose from './mongoose';

const itemSchema = new mongoose.Schema({
  title: String,
});

export const Item = mongoose.model('Item', itemSchema);
