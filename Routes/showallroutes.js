const express = require('express');
const router = express.Router();
const db = require("../DB");


router.post("/showall",(req,resp)=>{

    const {uid}=req.body;
    // console.log("router is called......");
    const statement = `select * from friend_list where uid=${uid}`
    db.execute(statement,(err,data)=>{
        resp.send(data)
        // console.log(err);
    })
})
        
module.exports = router;
