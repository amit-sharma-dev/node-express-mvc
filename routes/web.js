// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.render('index', {title: "Node MVC Framework"})
});

// Export API routes
module.exports = router;