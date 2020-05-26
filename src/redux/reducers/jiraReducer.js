const Jira = (state = {}, action) => {
    switch (action.type) {
        case 'SET_REQ_JIRA':
            console.log(action.data);
            return action.data;
        default:
            return state
    }
}

export default Jira