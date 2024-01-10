import React, { createContext, useContext, useReducer } from "react";
// prepares the dataLayer
export const StateContex = createContext();

// Wrap our app and provide the Data layer\
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContex.Provider value = { useReducer(reducer, initialState) } > { children }
    </StateContex.Provider>
);
// pull and push information from the Data layer
export const useStateValue = () => useContext(StateContex);