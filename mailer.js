const nodemailer = require("nodemailer");
const fs = require('fs');
const ejs = require('ejs');



async function sendmail(to_mail,msg,fname,lname,ffrom) {
  let contents = null;
    console.log("faname =",fname);
    console.log("ffrom = ",ffrom);
    contents = await ejs.renderFile("./views/bdaywish.ejs",{name:fname,wishfrom:ffrom,message:msg});
    
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rsmore2232@gmail.com",
      pass: "olmbarvdtvlioyci",
    },
  });
 
  // means send mail for bday wish
  let mailOptions =null;
  if(fname!=null){

    mailOptions = {
      from: "rsmore2232@gmail.com", // sender address
      to: to_mail, // list of receivers
      subject: msg, // Subject line
      html: contents, // plain text body
    };

  }else{
    console.log("inside link resetmail mail...");
      mailOptions = {
      from: "rsmore2232@gmail.com", // sender address
      to: to_mail, // list of receivers
      subject: "resetPassword", // Subject line
      text:msg , // plain text body
    };
  }

  // transporter.sendMail(mailOptions, function (err, info) {
  //     callback(err, info);

  const result = {
    Status: "",
  };
 
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // result["Status"] = "error";
      // result["error"] = error;
      // console.log(result);
    } else {
      // result["Status"] = "sucess";
      // result["data"] = data;
      // console.log(info);
    }
    result [Status]="sucess";
    return result;
  });
  // let results={Status: "sucess"};
}

module.exports = sendmail;
