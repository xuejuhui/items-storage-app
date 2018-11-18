const express = require('express');
const bodyParser =  require('body-parser');
const items = require('./routes/api/items');
const cors = require('cors');



const app = express();

app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json())
app.use(cors())

app.use('/api/items', items);


const port = process.env.API_PORT || 3001;
app.listen(port, function(){
  console.log(`api running on ${port}`);
});