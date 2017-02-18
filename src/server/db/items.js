import mongoose from './mongoose';

const itemSchema = new mongoose.Schema({
  title: String,
});

export default mongoose.model('Item', itemSchema);
