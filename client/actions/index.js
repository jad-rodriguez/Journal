// VARIABLES

import { fetchAllJournalPosts, patchJournalEntry, saveJournalEntryAPI } from "../api"

export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'
export const SAVE_ENTRY = 'SAVE_ENTRY'
export const UPDATE_ENTRY = 'UPDATE_ENTRY'
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

export function updateEntry(id, newEntryObj) {
    return {
        type: UPDATE_ENTRY,
        id,
        newEntryObj
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

export function patchEntry(entry, token) {
    return (dispatch) => {
        patchJournalEntry(entry, token)
        .then((newEntryObj) => {
            dispatch(updateEntry(id, newEntryObj))
        })
    }
}