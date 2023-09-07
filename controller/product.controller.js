const path = require('path');

const nodemailer=require('nodemailer')
 

class ProductController {
    
     
     
  getProduct(req, res) {
    
    res.render("portfolio")
    
  }

  contact(req,res){
    const formData = req.body;
    console.log(formData);
   
async function sentmailclient(){
    /** create a mail transporter
     * using SMTP
     * 
     */

    const transporter =nodemailer.createTransport(
        {
            service : 'gmail',
               auth  : {
                user:'priyanshjain1610@gmail.com',
                pass:'yycipwllcjfvofsl'   // ohbsgprfnfjotodu for 
            }  })

    //configure mmail
    const mailoption ={
        from:'priyanshjain1610@gmail.com',
        to :"mrpriyanshjain@gmail.com",
        subject: ` Hurray! Priyansh Message your mail `,
        text : `Hey Priyansh your message Given blow
                ${formData.name}
                ${formData.email}
                ${formData.message}
                `
        
    }
     // sent email
     

     try{
        const sent =await transporter.sendMail(mailoption)
        console.log("email sent sucessfully to onwer",)
     }
     catch(err)
     {

        console.log("email not be sent due to this error "+ err);
     }
}
sentmailclient();// yha call karya hau function ko
async function sentmail(){
    /** create a mail transporter
     * using SMTP
     * 
     */

    const transporter =nodemailer.createTransport(
        {
            service : 'gmail',
                auth  : {
                user:'priyanshjain1610@gmail.com',
                pass:'yycipwllcjfvofsl'   // ohbsgprfnfjotodu for 
            }  })

    //configure mmail
    const mailoption ={
        from:'priyanshjain1610@gmail.com',
        to :formData.email,
        subject: `Your Message to Priyansh jain Has Been Sent!`,
        text : `Dear ${formData.name},
        
      I wanted to express my gratitude for visiting my profile and taking the time to send me a message. Your words mean a lot to me.
        Rest assured, your message has been successfully delivered to my official email address, and I'm excited to read what you have to say. I make it a point to personally respond to all messages, and I'll do my best to get back to you within 24 hour.
        Once again, thank you for reaching out, and I look forward to our future conversations.
        
        Thank you !`
        
    }
     // sent email

     try{
        const sent =await transporter.sendMail(mailoption)
        console.log("email sent sucessfully",);
     }
     catch(err)
     {

        console.log("email not be sent due to this error "+ err);
     }
}
sentmail();// dusre mail ko call kya



    
res.render("message", { message: "Message sent  check confirmation mail  - 5sec Redirect page", redirectTo: "/"});
// uske baad yai call hoga
// ha
  }
}

module.exports = ProductController;