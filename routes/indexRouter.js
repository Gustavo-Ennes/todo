const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', async(req,res) => {
	try{
		res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
	}catch(err){
		res.status(400).send({error: err} );
	};
});

module.exports = router;
