const express = require('express');
const siteVisits = require("./siteVisits")
const router = express.Router();

router.post('/create-siteViits', siteVisits.createsiteVisits);
router.get('/get-siteVisits', siteVisits.getAllsiteVisits);
router.get('/get-single-siteVisit', siteVisits.getSinglesiteVisits);
router.post('/update-siteVisit', siteVisits.updatesiteVisits);
router.get('/delete-siteVisit', siteVisits.deletesiteVisits);


module.exports = router