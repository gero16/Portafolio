import { useState, createContext } from "react"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import javascript from "../assets/javascript.png"
import git from "../assets/git.svg"
import github from "../assets/github.png"
import react from "../assets/react.png"
import node from "../assets/node.png"
import mongo from "../assets/mongo.svg"
import postgre from "../assets/postgre.svg"
import pug from "../assets/pug.png"
import vite from "../assets/vite.png"
import bootstrap from "../assets/bootstrap.svg"

export const Context = createContext()

export const CustomProvider = ({ children }) => {
    const [english, setEnglish] = useState(false)
    const [mensaje, setMensaje] = useState("")

    const cambiarLenguaje = () => {
        setEnglish(!english)
        return english
    }

    const urlBackend = import.meta.env.VITE_URL_BACKEND

    const message = (msj) => {
        setMensaje(msj)
        setTimeout(() => {
            setMensaje("")
            }, 6000)
        return mensaje
    }

    const objetosImages = {
        "html": html,
        "css": css,
        "javascript": javascript,
        "vite": vite,
        "github": github,
        "pug" : pug,
        "git" : git,
        "node": node,
        "bootstrap": bootstrap,
        "postgre": postgre,
        "node": node,
        "react": react,
        "mongo": mongo
    }
    
    return (
        <Context.Provider 
            value={{cambiarLenguaje, english, urlBackend, message, mensaje, objetosImages}}> 
            { children } 
        </Context.Provider>
    )
}

