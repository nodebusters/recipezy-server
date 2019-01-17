const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  id: Number,
  name: String
});

// module.exports is a JavaScript function, exports a Mongoose object
module.exports = mongoose.model('Ingredient', ingredientSchema)