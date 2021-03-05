const mongoose = require('../database/connection');

const TodoSchema = new mongoose.Schema({
	title:{
		type: String,
		require: true,
	},
	description:{
		type: String,
	},
	status:{
		type: String,
		default:"todo"
	},
	createdAt:{
		type: Date,
		default:Date.now,
	},
	order:{
		type:Number,
	}
});

module.exports = mongoose.model("Todo", TodoSchema);;