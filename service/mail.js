// Npm modules
const nodemailer = require('nodemailer');
const config = require('config');

// Sender mail credentials
const email = config.get("sender.credentials.mail");
const password = config.get("sender.credentials.password");
const receiverList = config.get("receivers").join(',');

const sendMail = data => {

  // You can play with data property here, It's an containing everything you need for email
  let dataString = '';

  for (let key of Object.keys(data)) 
    dataString += `${key}: ${data[key]} \n`

  try {

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: email,
             pass: password
         }
     });
  
     const mailOptions = {
      from: email,
      to: receiverList,
      subject: 'New Customer',
      text: dataString,
      // attachments: [
      //   {
      //     filename: inputFilename,
      //     content: fs.createReadStream(fullPath)
      //   }
      // ]
    };
  
    transporter.sendMail(mailOptions, (err, info) => {
      if(err)
        return reject(err);
      else
        return resolve(info);
   });

  } catch (e) {
    console.log(e);
    throw e;
  }

};

module.exports = sendMail;