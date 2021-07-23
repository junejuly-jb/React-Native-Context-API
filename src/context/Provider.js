import React, { createContext, useReducer } from 'react';

const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer
}