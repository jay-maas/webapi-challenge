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

router.post('/', async (req, res) => {
    
})

router.put('/:id', async (req, res) => {
    
})

router.delete('/:id', async (req, res) => {
    
})

async function validateProjectId(req, res, next) {
    const project = await Projects.getById(req.params.id)
    if (project) {
        req.project = project
        next()
    } else {
        res.status(404).json({
            error: "Could not find a project by that ID"
        })
    }
}

module.exports = router