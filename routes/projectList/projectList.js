const projectListModel = require("../../models/projectList")
const fs = require("fs")

const projectList = {
    createProjectList: async (req, res) => {
        try {
            const projectList = req.body;
            const newProject = new projectListModel(projectList);
    
            const savedProject = await newProject.save();
            res.status(201).json({ message: 'Project created successfully', project: savedProject });
        } catch (error) {
            res.status(500).json({ error: 'Failed to create project', details: error.message });
        }
    },
    getAllProjectList: async (req, res) => {
        try {
            const projects = await projectListModel.find();
            if (!projects || projects.length === 0) {
                return res.status(404).json({ message: 'No projects found' });
            }
            res.status(200).json({ projects });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch projects', details: error.message });
        }
    },
    getSingleProject: async (req, res) => {
        try {
            const projectListId = req.query.projectListId;
    
            if (!projectListId) {
                return res.status(400).json({ error: 'Missing projectListId parameter in query' });
            }
    
            const project = await projectListModel.findOne({ _id: projectListId });
    
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
    
            res.status(200).json({ project });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch project', details: error.message });
        }
    },
    deleteProjectList: async (req, res) => {
        try {
            const projectListId = req.query.projectListId;
    
            if (!projectListId) {
                return res.status(400).json({ error: 'Missing projectListId parameter in query' });
            }
    
            const deletedProject = await projectListModel.findByIdAndDelete(projectListId);
    
            if (!deletedProject) {
                return res.status(404).json({ message: 'Project not found' });
            }
    
            res.status(200).json({ message: 'Project deleted successfully', deletedProject });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete project', details: error.message });
        }
    },
    updateProjectList: (req, res) => {
        const projectId = req.query.id;
        const updatedProject = req.body;
    
        projectListModel.findByIdAndUpdate(projectId, updatedProject, { new: true }, (err, updatedProject) => {
            if (err) {
                console.error("Error updating project:", err);
                return res.status(500).json({ error: "Error updating project" });
            }
            res.status(200).json({ message: "Project updated successfully", project: updatedProject });
        });
    },
}


module.exports = projectList