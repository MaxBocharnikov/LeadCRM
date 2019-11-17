const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const {getUserSources} = require('../sql/sources');

router.get('/getUserSources', authorize, (req, res, next) => {
    getUserSources()
        .then((sources) => res.json(sources))
        .catch(error => next(error));
});

module.exports = router;