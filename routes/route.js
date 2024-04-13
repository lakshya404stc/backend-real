const express = require('express');
const router = express.Router();

const userRoute = require('./user/_routes');
const attandanceRoute = require('./attendance/_routes');
const masterRoute = require('./general-masters/_routes');
const customerRoute = require("./customers/_routes")
const projectListRoute = require("./projectList/_routes")
const leadRoutes = require("./leads/_routes")
const siteViistsRoutes = require("./siteVisits/_routes");

//Api`s
router.use('/user', userRoute);
router.use('/attendance', attandanceRoute);
router.use('/masters', masterRoute);
router.use('/customers', customerRoute);
router.use('/projectList', projectListRoute);
router.use("/leads",leadRoutes)
router.use("/site-visits",siteViistsRoutes)


module.exports = router;