
import { combineReducers } from 'redux'

const debug = (state = false, { payload, type }) => {
    return type === 'DEBUG' ? payload : state
}

export default combineReducers({
    debug,
})
