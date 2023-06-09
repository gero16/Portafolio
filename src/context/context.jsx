import { useState, createContext } from "react"

export const Context = createContext()

export const CustomProvider = ({ children }) => {
    const [english, setEnglish] = useState(false)
    const [mensaje, setMensaje] = useState("")

    const cambiarLenguaje = () => {
        setEnglish(!english)
        return english
    }

    const urlBackend = import.meta.env.VITE_URL_BACKEND
    console.log(urlBackend)

    const message = (msj) => {
        setMensaje(msj)
        setTimeout(() => {
            setMensaje("")
            }, 6000)
        return mensaje
    }
    
    return (
        <Context.Provider value={{cambiarLenguaje, english, urlBackend, message, mensaje}}> 
            { children } 
        </Context.Provider>
    )
}

