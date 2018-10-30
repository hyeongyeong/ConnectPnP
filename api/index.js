const router = require('express').Router();

router.get('/', function(req,res) {
    res.render('main', { 
        data : 'hello'
    });
});

module.exports = router;