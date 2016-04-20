// MODEL MAIN
var mongoose = require('mongoose');
var mainSchema = new mongoose.Schema({
  word: []
});
var Main = {
    
    model: mongoose.model('Main', mainSchema),
    
    create: function(req, res) {
		Main.model.create({
			word: req.body.word
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Main.model.find(function (err, data) {
			res.send(data);
		});
	}, 
}
module.exports = Main;
