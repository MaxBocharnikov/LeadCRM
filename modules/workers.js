const express = require('express');
const router = express.Router();
const authorize = require('../middlewares/authorize');
const {getWorkerByUserId, getWorkers, getWorkersByDepartment} = require('../sql/workers');
const Roles = require('../constants/roles');


router.get('/getWorkerByUserId', authorize, (req, res, next) => {
    getWorkerByUserId(req.currentUser.id)
        .then((worker) => res.json(worker));
});

router.get('/getWorkers', authorize, (req, res, next) => {
    const currentUser = req.currentUser;
    switch (currentUser.roleID) {
        case Roles.supervisor:
            getWorkers()
                .then((worker) => res.json(worker))
            break;
        case Roles.manager:
            getWorkersByDepartment(currentUser)
                .then((worker) => res.json(worker))
            break;
    }
});

module.exports = router;