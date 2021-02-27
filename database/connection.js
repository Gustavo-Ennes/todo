const mongoose = require('mongoose');

const server = 'localhost';
const db = 'kratodo';

mongoose.connect(`mongodb://${server}/${db}`,
	{
		useNewUrlParser:true,
		useUnifiedTopology: true,
	}
);
mongoose.Promise = global.Promise;

module.exports = mongoose;

