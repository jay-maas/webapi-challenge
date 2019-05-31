const express = require('express')

const Actions = require('../../data/helpers/actionModel.js')

const router = express.Router()

router.use(express.json())

router.get('/', validateProjectId, async (req, res) => {
    try {
        const actions = await Actions.get(req.project.id)
        res.status(201).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error retrieving the actions."
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