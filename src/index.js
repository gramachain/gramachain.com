
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

// Middleware
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// App
import App from './App'
import reducers from './core/Reducers'

// Store
const store = createStore(
    reducers,
    applyMiddleware(createLogger(), thunk),
)

// Render
render(
    (
        <Provider store={ store }>
            <Router>
                <App />
            </Router>
        </Provider>
    ),
    document.getElementById('react-root'),
)
