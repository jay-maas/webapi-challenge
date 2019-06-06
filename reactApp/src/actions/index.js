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
                    message: "Server is on and ready for requests...",
                    projects: res.data
                }
            })
        })
        .catch(err => {
            console.log(err)
            dispatch({
                type: GET_PROJECTS_ERROR,
                payload: "The server is not awake/functioning."
            })
        })
}