
function journalPosts (state = [], action) {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            return action.entries
        default:
            return state
    }
}

export default journalPosts