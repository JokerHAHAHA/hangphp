// ROUTES MAINS
var Main = require('../models/main.js');
module.exports 	= function(app) {
	app.get('/mains', Main.findAll);
	app.post('/mains', Main.create);
}
