import { RECEIVE_ENTRIES, SAVE_ENTRY, UPDATE_ENTRY } from '../actions'

function journalPosts (state = [], action) {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            return action.entries

        case SAVE_ENTRY:
            const allIds = state.map(entries => entries.id)
            const maxId = Math.max(...allIds)
            return [...state, { id: maxId + 1, newEntryData: action.entryData}]

        case UPDATE_ENTRY:
            state.forEach(entry => {
                if (entry.id === action.id) {
                  entry = action.newEntryObj
                }
              })
              return [...state]
              
        default:
            return state
    }
}

export default journalPosts