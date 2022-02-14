import { RECEIVE_ENTRIES, SAVE_ENTRY } from '../actions'

function journalPosts (state = [], action) {
    switch (action.type) {
        case RECEIVE_ENTRIES:
            return action.entries

        case SAVE_ENTRY:
            const allIds = state.map(entries => entries.id)
            const maxId = Match.max(...allIds)
            return [...state, { id: maxId + 1, newEntryData: action.entryData}]
        default:
            return state
    }
}

export default journalPosts