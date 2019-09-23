// Mail service module
const sendMail = require('../service/mail');

const mailController = (req, res, next) => {

  const data = req.body;

  try {

    sendMail(data);
    res.status(200).send();

  }  catch (e) {

    next(e);

  }

}

module.exports = mailController;