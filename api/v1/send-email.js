const express = require("express");
const bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(bodyParser.json())
app.post("/", (req, res) => {


    let msg = {
        to: process.env.EMAIL_TO, // Change to your recipient
        from: process.env.EMAIL_FROM, // Change to your verified sender
        subject: 'Message from ' + req.body.contact.name,
        html: `<div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.5;">
        <p style="font-weight: bold;">Email:</p>
        <p>${req.body.contact.email}</p>
        <p style="font-weight: bold;">Telephone:</p>
          <p>${req.body.contact.phone}</p>
          <p style="font-weight: bold; ">Message:</p>
          <p>${req.body.contact.message}</p>
        </div>`
      };
      

    sgMail
        .send(msg)
        .then(() => {
            return res.status(200).json({ 'message': 'Email sent!' })
        })
        .catch((error) => {
            return res.status(400).json({ 'error': 'Opsss... Something went wrong ' + error })
        })

});

module.exports = {
    path: "/api/v1/send-email",
    handler: app
};