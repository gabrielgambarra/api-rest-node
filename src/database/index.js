const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/noderest', { useNewUrlParser: true });
//connect //createConnection
mongoose.Promise = global.Promise;

module.exports = mongoose;