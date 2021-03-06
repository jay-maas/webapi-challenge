import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
    ))

ReactDOM.render(

    <Router>

        <Provider store={store}>
    
            <App />
    
        </Provider>

    </Router>,

    document.getElementById('root')
    
)