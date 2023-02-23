const express = require("express");
const router = express.Router();
const db = require("../DB");

router.get("/", (req, resp) => {
  resp.send("hellow from server");
});

router.post("/addnew", (req, resp) => {
  // console.log("router is called......inside addnew");
  const { fname, lname, date, email, uid } = req.body;
  const statement = `insert into friend_list(fname,lname,dob,femail,uid) values('${fname}','${lname}','${date}','${email}',${uid})`;
  // console.log(statement);
  db.execute(statement, (err, data) => {
    const result = {
      Status: "",
    };
    if (err) {
      result["Status"] = "error";
      result["error"] = error;
    } else {
      result["Status"] = "sucess";
      result["data"] = data;
    }
    resp.send(result);
  });
});

module.exports = router;
