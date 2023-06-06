import { useState, createContext } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {
    const [english, setEnglish] = useState(false)
    const cambiarLenguaje = () => {
        setEnglish(!english)
        return english
    }

    const urlFrontend = import.meta.env.VITE_URL_FRONTEND
    console.log(urlFrontend)
    return (
        <Context.Provider value={{cambiarLenguaje, english, urlFrontend}}> 
            { children } 
        </Context.Provider>
    )
}

