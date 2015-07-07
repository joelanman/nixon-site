var express = require('express');
var router = express.Router();

var nixon = require('../lib/nixon');

router.get('/', function(req, res, next) {
	res.render('index', { title: 'Nixon' });
});

router.get('/scripts/example', function(req, res, next) {

	var scriptData = nixon.run('example');
 	res.render('script', { title: 'Example', steps : scriptData.steps});

});

module.exports = router;
