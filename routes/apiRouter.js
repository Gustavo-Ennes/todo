const { query } = require('express');
const express = require('express');
const Todo = require("../models/Todo");
const router = express.Router();

router.post('/todos/', async(req,res) => {
	try{
		console.log("This is the req.body::\n" + JSON.stringify(req.body));
		const todo = await Todo.create(req.body);
		console.log('to-do created: ');
		console.log(todo);
		res.send({todo});
	}catch{
		res.status(400).send({error: "Impossible to create a todo."});
	};
});

router.get('/todos/', async(req, res) => {
	try{
		const todos = await Todo.find();
		res.send({todos});
	}catch{
		res.status(400).send({error: "Impossible to find all todo's."});
	};
});

router.get('/todos/finished/', async(req, res) => {
	try{
		const todos = await Todo.find({status: 'done'});
		res.send({todos})
	}catch(err){
		res.status(400).send({error: "Impossible to find finished todo's."});
	}
});

router.get('/todos/unfinished/', async(req, res) => {
	try{
		const todos = await Todo.find({status: 'todo'});
		res.send({todos})
	}catch(err){
		res.status(400).send({error: "Impossible to find unfinixhed todo's."});		
	}
});

router.delete('/todos/', async(req, res) => {
	try{
		res.send("Deleting todo id " + req.query._id);
		await Todo.deleteOne({_id: req.query._id});
	}catch(err){
		console.log(`error: Impossible to delete todo:${err}`)
	}
});

router.put('/todos/', async(req,res) => {
	try{
		let body = req.body;
		res.send("Updating todo id " + req.query._id);
		await Todo.updateOne({_id: req.query._id}, body);
		res.send(Todo.find())
	}catch(err){
		console.log(`Error: Impossible to update a todo: ${err}`)
	}
});

module.exports = router;