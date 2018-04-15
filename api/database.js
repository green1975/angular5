var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/database', {promiseLibrary: require('bluebird')})
.then(() => console.log('connection successfull'))
.catch((err) => console.error(err));
