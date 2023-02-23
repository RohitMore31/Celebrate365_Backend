const express = require('express');
const router = express.Router();
const db = require("../DB");



router.post("/showbyname",(req,resp)=>{
    // console.log("router is called......inside showbyname");
    const {fname}=req.body;

    const statement = `select * from friend_list where fname='${fname}'`
    // console.log(statement);
    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("error")
    //    console.log(err);
        } else
       resp.send(data);
    })

})
        
module.exports = router;
