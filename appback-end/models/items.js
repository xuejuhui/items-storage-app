var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemsSchema = new Schema({
	title :String,
	description: String
})

var Items = mongoose.model('Items', ItemsSchema);
module.exports = Items;