const express = require('express')
const router = express.Router()
const {getLeadList, getOwnLeadsList} = require('../sql/leads');
const authorize = require('../middlewares/authorize');
const Roles = require('../constants/roles');
const {filterLeads} = require('../utils/leads');

router.post('/getLeadList', authorize, function (req, res, next) {
    const currentUser = req.currentUser;
    const filter = req.body.filter;
    switch (currentUser.roleID) {
        case Roles.supervisor:
            getLeadList()
                .then(leads =>  {
                    const filteredLeads = filterLeads(leads, filter);
                    return res.json(filteredLeads)
                })
                .catch(error => next(error));
            break;

        case Roles.manager:
            getOwnLeadsList(currentUser)
                .then(leads => {
                    const filteredLeads = filterLeads(leads, filter);
                    res.json(filteredLeads)
                })
                .catch(error => next(error));
            break;
    }

});


module.exports = router;