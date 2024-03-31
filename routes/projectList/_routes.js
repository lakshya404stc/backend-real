const express = require('express');
const projectList = require("./projectList")
const router = express.Router();

router.post('/create-projectlist', projectList.createProjectList);
router.get('/get-all-projectlist', projectList.getAllProjectList);
router.get('/get-single-projectlist', projectList.getSingleProject);
router.delete('/delete-projectlist', projectList.deleteProjectList);
router.put('/update-projectlist', projectList.updateProjectList);

module.exports = router