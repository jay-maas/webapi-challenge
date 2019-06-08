const express = require('express')

const Projects = require('../../data/helpers/projectModel.js')

const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get()
        res.status(201).json(projects)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error retrieving the projects."
        })
    }
})

router.get('/:id', validateProjectId, async (req, res) => {
    try {
        const project = await Projects.getById(req.project.id)
        res.status(201).json(project)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error retrieving the project."
        })
    }
})

router.get('/:id/actions', validateProjectId, async (req, res) => {
    try {
        const project = await Projects.getById(req.project.id)
        const actions = await Projects.getActionsById(req.project.id)
        const projectWithActions = {
            ...project,
            actions: actions
        }
        res.status(201).json(projectWithActions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error retrieving the project."
        })
    }
})

router.post('/', validateProject, async (req, res) => {
    try {
        const newProject = await Projects.insert(req.projectValid)
        res.status(201).json(newProject)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error creating new project."
        })
    }
})

router.put('/:id', validateProjectId,  validateProject, async (req, res) => {
    try {
        updated = await Projects.update(req.project.id, req.projectValid)
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error updating project"
        })
    }
})

router.delete('/:id', validateProjectId, async (req, res) => {
    try {
        deleted = await Projects.remove(req.project.id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error deleting project"
        })
    }
})

async function validateProjectId(req, res, next) {
    const project = await Projects.getById(req.params.id)
    console.log(project)
    if (project) {
        req.project = project
        next()
    } else {
        res.status(404).json({
            error: "Could not find a project by that ID"
        })
    }
}

function validateProject(req, res, next) {
    if (!isEmpty(req.body)) {
        if (req.body.name && req.body.description) {
            req.projectValid = {
                name: req.body.name,
                description: req.body.description
            }
            next()
        } else {
            res.status(400).json({
                errorMessage: 'Missing required name and/or description. This schema requires both. Please do not submit any other key:values in this post request!'
            })
        }
    
    } else {
        res.status(400).json({
            errorMessage: 'Missing project data.'
        })
    }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key)
        )
            return false
    }
    return true
}

module.exports = router