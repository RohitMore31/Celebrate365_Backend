const express = require('express');
const router = express.Router();
const db = require("../DB");

// router.get("/",(req,resp)=>{
//     resp.send("test for server");
// })

router.post("/deletebyid",(req,resp)=>{
    // console.log("router is called......inside deletebyid");
    // Getting id grom body and resp friend will be deleted
    const {id}=req.body;
    const statement = `delete from friend_list where id=${id}`
    db.execute(statement,(err,data)=>{
       if(err){
       resp.send("Error")
        } else
       resp.send("deleted sucessfully");
    })

})
        
module.exports = router;
