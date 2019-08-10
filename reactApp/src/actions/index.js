import axios from 'axios'

export const SERVER_CHECK_START = 'SERVER_CHECK_START'
export const SERVER_CHECK_SUCCESS = 'SERVER_CHECK_SUCCESS'
export const SERVER_CHECK_ERROR = 'SERVER_CHECK_ERROR'

export const checkServer = () => dispatch => {
    dispatch({ type: SERVER_CHECK_START })

    axios
        .get('http://localhost:4000/')
        .then(res => {
            console.log(res)
            dispatch({
                type: SERVER_CHECK_SUCCESS,
                payload: "Server is on and ready for requests..."
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: SERVER_CHECK_ERROR,
                payload: "The server is not awake/functioning."
            })
        })
}

export const GET_PROJECTS_START = 'GET_PROJECTS_START'
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS'
export const GET_PROJECTS_ERROR = 'GET_PROJECTS_ERROR'

export const getProjects = () => dispatch => {
    dispatch({ type: GET_PROJECTS_START })

    axios
        .get('http://localhost:4000/api/projects')
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_PROJECTS_SUCCESS,
                payload: {
                    message: "Projects where succesfully retrieved",
                    projects: res.data
                }
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_PROJECTS_ERROR,
                payload: "Error retrieving the projects from the server."
            })
        })
}

export const GET_PROJECT_START = 'GET_PROJECT_START'
export const GET_PROJECT_SUCCESS = 'GET_PROJECT_SUCCESS'
export const GET_PROJECT_ERROR = 'GET_PROJECT_ERROR'

export const getProject = (projectId) => dispatch => {
    dispatch({ type: GET_PROJECT_START })

    axios
        .get(`http://localhost:4000/api/projects/${projectId}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_PROJECT_SUCCESS,
                payload: {
                    message: "Project data succesfully retrieved",
                    project: res.data
                }
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_PROJECT_ERROR,
                payload: "Error retrieving the data from the server."
            })
        })
}