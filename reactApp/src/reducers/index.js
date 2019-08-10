import { 
    SERVER_CHECK_START, SERVER_CHECK_SUCCESS, SERVER_CHECK_ERROR,
    GET_PROJECTS_START, GET_PROJECTS_SUCCESS, GET_PROJECTS_ERROR,
    GET_PROJECT_START, GET_PROJECT_SUCCESS, GET_PROJECT_ERROR
} from '../actions/'

const initialState = {
    checkingServer: false,
    gettingProjects: false,
    gettingProject: false,
    projects: [],
    project: [],
    error: '',
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
       case SERVER_CHECK_START:
           return {
               ...state,
               checkingServer: true,
               message: action.payload,
               error: '',
           }
        case SERVER_CHECK_SUCCESS:
            return {
                ...state,
                checkingServer: false,
                message: action.payload,
                error: ''
            }
        case SERVER_CHECK_ERROR:
            return {
                ...state,
                checkingServer: false,
                message: '',
                error: action.payload
            }
        case GET_PROJECTS_START:
            return {
                ...state,
                gettingProjects: true,
                message: '',
                error: ''
            }
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                gettingProjects: false,
                projects: action.payload.projects,
                message: action.payload.message,
                error: ''
            }
        case GET_PROJECTS_ERROR:
            return {
                ...state,
                gettingProjects: false,
                message: '',
                error: action.payload
            }
        case GET_PROJECT_START:
            return {
                ...state,
                gettingProject: true,
                message: '',
                error: ''
            }
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                gettingProject: false,
                project: action.payload.project,
                message: action.payload.message,
                error: ''
            }
        case GET_PROJECT_ERROR:
            return {
                ...state,
                gettingProject: false,
                message: '',
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer