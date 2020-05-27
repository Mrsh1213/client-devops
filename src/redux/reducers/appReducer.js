import {SET_ONLINE} from '../actions/appAction'
const appReducer = (state = {status:false}, action) => {
    switch (action.type) {
        case SET_ONLINE:
            return {status:action.status};
        default:
            return state
    }
}

export default appReducer