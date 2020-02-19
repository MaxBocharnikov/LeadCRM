
const express = require('express')
const router = express.Router()
const {getLeadList, getOwnLeadsList, addLead, getLeadById, editLead} = require('../sql/leads');
const authorize = require('../middlewares/authorize');
const Roles = require('../constants/roles');
const {filterLeads, formatPhoneUtil} = require('../utils/leads');

router.post('/getLeadList', authorize, function (req, res, next) {
    const currentUser = req.currentUser;
    const filter = {
        ...req.body,
        phone: formatPhoneUtil(req.body.phone)
    };
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

router.get('/getLeadById/:id', authorize, function (req, res, next) {
    const id = req.params.id;
    getLeadById(id)
        .then(lead =>  {
            return res.json(lead)
        })
        .catch(error => next(error));
});

router.post('/addLeads', authorize, function (req, res, next) {
   const data = req.body;
    addLead(data)
        .then(() =>  {
            return res.json();
        })
        .catch(error => next(error));
});

router.post('/addLead', authorize, function (req, res, next) {
    const lead = {
        ...req.body,
        phone: formatPhoneUtil(req.body.phone)
    };
    addLead(lead)
        .then(lead =>  {
            return res.json(lead.id)
        })
        .catch(error => next(error));
});

router.put('/editLead/:id', authorize, function (req, res, next) {
    const id = req.params.id;
    const lead = {
        ...req.body,
        phone: formatPhoneUtil(req.body.phone)
    };
    editLead(id,lead)
        .then(lead =>  {
            return res.json(lead)
        })
        .catch(error => next(error));
});

module.exports = router;