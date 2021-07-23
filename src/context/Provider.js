import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import auth from './reducers/auth'
import contacts from './reducers/contacts'

export const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const [contactsState, contacstDispatch] = useReducer(contacts, contactsInitialState)

    return <GlobalContext.Provider value={{ authState, contactsState, authDispatch, contacstDispatch }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider
