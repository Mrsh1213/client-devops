import {SET_ONLINE,SET_DRAWER} from '../actions/appAction'
const appReducer = (state = {status:false,openDrawer:true}, action) => {
    switch (action.type) {
        case SET_ONLINE:
            return {status:action.status};
            case SET_DRAWER:
            return {openDrawer:action.open};
        default:
            return state
    }
}

export default appReducer