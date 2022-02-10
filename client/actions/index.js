// VARIABLES

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'

// ACTIONS

export function receiveEntries (entries) {
    return {
        type: RECEIVE_ENTRIES,
        entries: entries
    }
}

// THUNK FUNCTIONS

