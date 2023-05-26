import { useState, createContext } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {

    return (
        <Context.Provider > 
            { children } 
        </Context.Provider>
    )
}

