const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const {getWorkerByUserId} = require('../sql/workers');

router.get('/getWorkerByUserId', authorize, (req, res, next) => {
    console.log(req.currentUser.id);
    getWorkerByUserId(req.currentUser.id)
        .then((worker) => res.json(worker));
});

module.exports = router;