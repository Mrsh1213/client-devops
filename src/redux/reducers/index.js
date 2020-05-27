import { combineReducers } from 'redux'
import jiraReducer from './jiraReducer.js'
import appReducer from './appReducer.js'
// import gitlabReducer from './gitlabReducer.js'

export default combineReducers({
    jiraReducer,
    appReducer
    // gitlabReducer
})