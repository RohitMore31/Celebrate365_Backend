const express = require('express')
const send_the_email = require('../mailer');

const router = express.Router();


// FOR send Mail
router.post('/user/bdaywish',(req,resp)=>{
    // console.log(`req received = ${req.url}`);
    let result = { Status: ""};
    const {fname,lname,email,message,from}=req.body;
    result = send_the_email(email,message,fname,lname,from);
    result ["Status"]="sucess";
    // console.log("inside wish_route",result);
    resp.send(result);
})


module.exports= router;