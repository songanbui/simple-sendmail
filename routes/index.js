var express = require('express');
var router = express.Router();
var mailer = require("nodemailer");
var mailerSmtpPool = require("nodemailer-smtp-pool");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/sendmail', function(req, res, next) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.type('application/json');
  res.statusCode = 200;
  var mailOptions = {
    from: global.configuration.mailConfig.from,
    to: global.configuration.mailConfig.to,
    subject: global.configuration.mailConfig.subject,
    html: JSON.stringify(req.body)
  };

  var transport = mailer.createTransport(mailerSmtpPool({
    host: global.configuration.mailConfig.smtpServer,
    debug: true
  }));

  transport.sendMail(mailOptions, function (error, response) {
    transport.close();
    if (error) {
      res.statusCode = 400;
      res.send(error);
    }
    else {
      res.send(response);
    }
  });
});

module.exports = router;
