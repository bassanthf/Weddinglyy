// const mongoose = require('mongoose');

// const bouquetSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     //required: true
//   },
//   flowers: {
//     type: String,
//     enum: ['Rose', 'Daisy', 'Sunflower', 'Orchid', 'Carnation', 'Begonia', 'Lavender'],

//   },
//   price: {
//     type: Number,

//   },
//   description: {
//     type: String,
//     //required: true
//   },
//   image: {
//     type: String,
//    // required: true
//   },
//   availableQuantity: {
//     type: Number,
//    // required: true
//   },
// });

// const Bouquet = mongoose.model('Bouquet', bouquetSchema);
// module.exports = Bouquet;
const mongoose = require('mongoose');

const bouquetSchema = new mongoose.Schema({
  id: {
    type: String, 
    required: true
  },
  name: {
    type: String,
    required: true
  },
  page: {
    type: String, 
    required: true
  },
  Photo: { 
    type: String, 
    required: true
  },
  Rating: { 
    type: Number, 
    required: true,
    min: 0,
    max: 5
  }
});

// Create and export the Bouquet model
const Bouquet = mongoose.model('Bouquet', bouquetSchema);
module.exports = Bouquet;
