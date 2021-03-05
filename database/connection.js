const mongoose = require('mongoose');
const pass = encodeURIComponent(process.env.DBPASS);
const url = `mongodb+srv://kratos:${pass}@cluster0.3vzk0.mongodb.net/vigilant?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams).catch( (err) => {
		console.error(`Error connecting to the database. \n${err}`);
});

mongoose.Promise = global.Promise;

module.exports = mongoose