const express = require('express')

const Actions = require('../../data/helpers/actionModel.js')
const Projects = require('../../data/helpers/projectModel.js')

const router = express.Router()

router.use(express.json())

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get()
        res.status(201).json(actions)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error retrieving the actions."
        })
    }
})

router.get('/:id/:action_id', validateProjectId, validateActionId, async (req, res) => {
    try {
        const action = await Actions.getById(req.action.id)
        res.status(201).json(action)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error retrieving the action."
        })
    }
})

router.post('/:id', validateProjectId, validateAction, async (req, res) => {
    try {
        action = {
            ...req.actionValid,
            project_id: req.project.id
        }
        const newAction = await Actions.insert(action)
        res.status(201).json(newAction)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error creating new action."
        })
    }
})

router.put('/:id/:action_id', validateProjectId, validateActionId,  validateAction, async (req, res) => {
    try {
        action = {
            ...req.actionValid,
            project_id: req.project.id
        }
        updated = await Actions.update(req.action.id, action)
        res.status(200).json(updated)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error updating action"
        })
    }
})

router.delete('/:action_id', validateActionId, async (req, res) => {
    try {
        deleted = await Actions.remove(req.action.id)
        res.status(200).json(deleted)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Error deleting action"
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

async function validateActionId(req, res, next) {
    try {
        const action = await Actions.getById(req.params.action_id)
        console.log(action)
        if (action) {
            req.action = action
            next()
        } 
    } catch (error) {
        console.log(error) 
        res.status(404).json({
            error: "Could not find an action by that ID"
        })
    }
}

function validateAction(req, res, next) {
    if (!isEmpty(req.body)) {
        if (req.body.notes && req.body.description) {
            req.actionValid = {
                notes: req.body.notes,
                description: req.body.description
            }
            next()
        } else {
            res.status(400).json({
                errorMessage: 'Missing required notes and/or description. This schema requires both. Please do not submit any other key:values in this post request!'
            })
        }
    } else {
        res.status(400).json({
            errorMessage: 'Missing action data.'
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