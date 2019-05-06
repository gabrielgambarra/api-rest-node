const path = require('path');
const nodemailer = require('nodemailer');
const handleBars = require('nodemailer-express-handlebars');

const { host, port, user, pass }= require('../config/mail');

const transport = nodemailer.createTransport({
    host,
    port,
    auth: { user, pass }
});

transport.use('compile', handleBars({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
}));

module.exports = transport;