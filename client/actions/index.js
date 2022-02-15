// VARIABLES

import { fetchAllJournalPosts, saveJournalEntryAPI } from "../api"

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const SAVE_ENTRY = 'SAVE_ENTRY'
export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

// ACTIONS

export function receiveEntries (entriesArr) {
    return {
        type: RECEIVE_ENTRIES,
        entries: entriesArr
    }
}

export function saveEntry(newEntryObj) {
    return {
        type: SAVE_ENTRY,
        entryData: newEntryObj
    }
}

export function setUser (user) {
  return {
    type: SET_USER,
    user
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}

// THUNK FUNCTIONS

export function getAllEntries() {
    return (dispatch) => {
        fetchAllJournalPosts()
        .then(entriesArr => {
            dispatch(receiveEntries(entriesArr))
        })
    }
}

export function addNewEntry(newEntryObj, token) {
    return (dispatch) => {
        saveJournalEntryAPI(newEntryObj, token)
        .then((entryFromDb) => {
            dispatch(saveEntry(entryFromDb))
        })
    }
}