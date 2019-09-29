const express = require('express')
const router = express.Router()
const {getLeadList} = require('../sql/leads');

router.get('/getLeadList', authorize, function (req, res, next) {
    getLeadList()
        .then(leads => res.json(leads))
        .catch(error => next(error));
});


module.exports = router;