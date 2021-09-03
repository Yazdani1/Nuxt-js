const express = require('express');
const app = express();
const bodyparse = require('body-parser');
const port = 8080;


app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));

//database


require('./model/db');




//connect router

app.use(require('./router/index'));



app.listen(port,(req,res)=>{
    console.log("Server Connected")
});



