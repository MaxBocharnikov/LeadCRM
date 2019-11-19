const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const {getUserStatuses} = require('../sql/statuses');

router.get('/getUserStatuses', authorize, (req, res, next) => {
    getUserStatuses()
        .then((sources) => res.json(sources))
        .catch(error => next(error));
});

module.exports = router;