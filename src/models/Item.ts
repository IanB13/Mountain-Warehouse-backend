import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "item name is required"]
  },
  imageURL: {
    type: String,
    unique: true,
    required: [true, "an imageURL is required"]
  },
  itemURL: {
    type: String,
    unique: true,
    required: [true, "an itemURL  is required"]
  },
  tags: [String]
});

const Item = mongoose.model('Items', itemSchema );

export default Item;