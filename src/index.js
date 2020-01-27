
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-dom'

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
            <App />
        </Provider>
    ),
    document.getElementById('react-root'),
)
