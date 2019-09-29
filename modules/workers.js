const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const {getWorkerByUserId} = require('../sql/workers');

router.get('/getWorkerByUserId', authorize, (req, res, next) => {
    getWorkerByUserId(req.currentUser.id)
        .then(() => res.json());
});

module.exports = router;