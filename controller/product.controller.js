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
        text: `Hey Priyansh your message Given blow
               Name: ${formData.name}
               Email : ${formData.email}
               Message : ${formData.message}
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
        to:formData.email,
        subject: `Your Message to Priyansh Jain Has Been Sent!`,
        text : `Dear ${formData.name},
        
        I wanted to express my gratitude for visiting my profile and taking the time to send me a message. Your words mean a lot to me.
        
        Rest assured, your message has been successfully delivered to my official email address, and I'm excited to read what you have to say. I make it a point to personally respond to all messages, and I'll do my best to get back to you within 24 hours.
 
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
sentmail();// 

   const accountSid = 'AC5b1c96b1fc87a9959c27075d9986c380';
const authToken = 'b8a8222ba674cd00e83476b77cc78c38';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body:  `Hey Priyansh Message come your Portfolio!
               Name: ${formData.name}
               Email: ${formData.email}
               Message : ${formData.message}
                `,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+917534948255'
    })
    
    



    
res.render("message", { message: "Message sent  check confirmation mail  - 5sec Redirect page", redirectTo: "/"});
// uske baad yai call hoga
// ha
  }
}

module.exports = ProductController;
