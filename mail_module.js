var nodemailer = require("nodemailer");


var transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"mail",
        pass:"pass"
    }
});


var mailOptions = {
    from : "mail",
    to :"mailto",
    subject:" A message from ndoe.js",
    text:"heeeellllooo this message has been sent by node.js script"
};


transporter.sendMail(mailOptions,function(err,info){
    if (err){
        console.log(err);

    }

    else{
        console.log("email sent : "+info.response);
    }
});