
var express = require('express');
var router = express.Router();
var db = require('../lib/db.js');
var mongoose = require('mongoose');
var bodyParser = require("body-parser")

router.get('/showlist', function(req, res, next) {
//	console.log(req.body);
//	console.log(db);
	db.query(function(db) {
		db.collection("info").find({}).toArray(function(err, docs) {
//			console.log(docs)
			res.json({
				product: docs
			});
		});
	})
});

router.post('/add', function(req, res, next) {
//	console.log(req.body);
//	console.log(db);
	db.query(function(db) {
		db.collection("info").insertMany([req.body], function(err, result) {
//			assert.equal(null, err);
			console.log("Inserted 1 document into the collection");
			res.send('Add success');
		});
	})
});

router.post('/edit', function(req, res, next) {
	console.log(req.body);
	
	console.log(req.body.床位号)
	console.log(db);
	var id = mongoose.Types.ObjectId(req.body.id);
	console.log(id)
	db.query(function(db) {
		db.collection("info").update({
			"_id":id
		},{
			"年级":req.body.年级,
			"学号":req.body.学号,
			"姓名":req.body.姓名,
			"性别":req.body.性别,
			"身份证号":req.body.身份证号,
			"联系电话":req.body.联系电话,
			"宿舍号":req.body.宿舍号,
			"床位号":req.body.床位号,
			"入住时间":req.body.入住时间
		}, function(err, result) {
//			assert.equal(null, err);
//			console.log("Edit 1 document into the collection");
			res.send('Save success');
		});
	})
});

router.post('/remove', function(req, res, next) {
	console.log(req.body);
	console.log(db);
	var id = mongoose.Types.ObjectId(req.body.id);
	db.query(function(db) {
		db.collection("info").remove({"_id":id},function(err, result) {
//			assert.equal(null, err);
			console.log("Remove 1 document into the collection");
			res.send('Successful deletion');
		});
	})
});

router.post('/find', function(req, res, next) {
	db.query(function(db) {
		console.log(req.body);
		var reg = new RegExp(req.body.value);
		var obj = {};
    	obj[req.body.title] = reg;
		db.collection("info").find(obj).toArray(function(err, docs) {
			res.json({
				product: docs
			});
		});
	})
});

router.post('/signIn', function(req, res, next) {
	db.query(function(db) {
		db.collection("admin").find({"用户名":req.body.用户名,"密码":req.body.密码}).toArray(function(err, docs) {
			res.json({
				product: docs
			});
		});
	})
});


module.exports = router;