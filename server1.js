
const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}))

//Cors 
app.use(cors())
// app.use(cors())clapp.use(cors())

//Body Parser
app.use(bodyParser.json());

//Importing Routes
const showallroutes = require('./Routes/showallroutes');
const addnewroutes = require('./Routes/addnewroutes');
const deleteroutes = require('./Routes/deleteroutes');
const showbyname = require('./Routes/showbyname');
const deletebyid = require('./Routes/deletebyid');
const updatem = require('./Routes/updatem');
const userroutes = require('./Routes/user_routes');
const wishroutes = require('./Routes/wish_routes');
const fargotpass = require("./Routes/forgotpass");

// Configuring Routes
app.use(updatem);
app.use(deletebyid);
app.use(showbyname);
app.use(deleteroutes);
app.use(addnewroutes);
app.use(showallroutes);
app.use(userroutes);
app.use(wishroutes);
app.use(fargotpass);

// listening on port 4000
app.listen(4000, '0.0.0.0',()=>{
    console.log('server started on port 4000 successfully');

})