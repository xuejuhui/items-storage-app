var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/item-storage',  { useNewUrlParser: true },()=>{
    console.log('mongodb connected')
});
module.exports.Items = require("./items.js");