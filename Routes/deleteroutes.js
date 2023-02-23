const express = require('express');
const router = express.Router();
const db = require("../DB");


router.post("/deletemember",(req,resp)=>{
    const {id}=req.body;
    const statement = `delete from bbday where id=${id}`

    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("Error")
        } else
       resp.send("Added Sucessfully");
    })

})
        
module.exports = router;
