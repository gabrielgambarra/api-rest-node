const path = require('path');
const nodemailer = require('nodemailer');
const handleBars = require('nodemailer-express-handlebars');
const exphbs = require('express-handlebars');

const viewPath = path.resolve('./src/resources/mail/');


const { host, port, user, pass } = require('../config/mail.json');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass },
});

transport.use('compile', handleBars({
    viewEngine: exphbs.create({ partialsDir: path.resolve('./src/resources/mail/partials') }),
    viewPath,
    extName: '.html',
}));

module.exports = transport;