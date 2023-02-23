const express = require("express");
const db = require("../DB");
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');
const send_the_email = require('../mailer');


const signature = "@svt#4mx&5ccd81961#chu";

router.post("/forgotpassword", (req, resp) => {
    const {email} = req.body;
    // console.log(req);
    const statement = `select * from user where email='${email}'`
    // console.log(statement);
    db.execute(statement,(err,data)=>{
        const result = {
            Status:''
        }
        // console.log(data);
        if(err || data.length==0){
            result['Status']="error"
            result['error']=err;
            resp.send(result);
            console.log("inside error");
        }else{
            // console.log("inside sucess");
            result['Status']="sucess"
            // result['data']=data;

            // providing link to mail which will be containt only 10 min
            // const token = jwt.sign(email,signature,{expiresIn:"10m"});
            const token = jwt.sign(email,signature);
            const link =`http://13.235.49.69:4000/viewnewpasspage/${token}`
            const rt = send_the_email(email,link,fname=null,lname=null,from=null);
            resp.send(result);
        }
    })
});

router.get("/viewnewpasspage/:token",(req,resp)=>{
    const token = req.params;
    console.log(token);
    try {
        const data = jwt.verify(token.token,signature);
        console.log(data);
        resp.render('index',{email:data});
    } catch (error) {
       resp.send(error); 
    }

})

router.post("/resetpassword",(req,resp)=>{
    const {email,password}=req.body;
    // encript password  
    const encrptPassword = ''+ crypto.SHA256(`${password}`)
    const statement = `update user set password='${encrptPassword}' where email='${email}'`
    // console.log("Encrypted pass = ",encrptPassword);
    db.execute(statement,(error,data)=>{
        const result = {
            Status:''
        }
        if(error){
            console.log(error);
            result['Status']="error not updated try later"
            result['error']=error;
        }else{
            result['Status']="Password has been sucess fully updated"
            result['data']=data;
        }
        resp.send(result.Status);
    })

})
        
module.exports = router;
