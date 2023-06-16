import { useContext, useState } from "react"
import { Context } from "../../context/context"
import { message } from "../../helpers/funciones"
import "./Contact.css"

const Contact = () => {
    const [state, setState] = useState({nombre: "", correo: "", mensaje: ""})
    const [enviado, setEnviado] = useState(false)
    
    const {urlBackend, message, mensaje} = useContext(Context)

    const sendMensaje = async () => {
        const settings = { 
            method: 'POST', 
            headers: { "Content-Type": "application/json" }, 
            body :  JSON.stringify(state)
        };
        try {
            if(state.correo == "") {
                message("Su correo no puede quedar vacio!")
            }
            if(state.mensaje == "") {
                message("Su mensaje no puede quedar vacio!")
            }
            if(state.mensaje !== "" && state.correo !== "") {
                const fetchResponse = await fetch(urlBackend, settings);
                if(fetchResponse.status === 200) {
                    setEnviado(true)
                    message("Mensaje enviado correctamente!")
                }
            }
        } catch (e) {
            return e;
        }
        return
    }

    return (
        <main className="container">
            <div className="contacto flex-column" >
                <h2> Contacto </h2>
                {
                    enviado === true && mensaje === "Mensaje enviado correctamente!"
                        ? <>
                            <h3 className="mensaje-enviado"> { mensaje } </h3>
                        </>
                        : 
                        <> <form action={urlBackend} method="POST" className="formulario-contacto">
                            <ul className="lista-contacto">
                                <li>
                                    <label htmlFor="nombre">Nombre </label>
                                    <input 
                                        type="text" 
                                        name="nombre" 
                                        id="nombre"
                                        onChange={(e) => setState({...state, nombre:e.target.value})}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="correo"> Correo </label>
                                    <input 
                                        type="text" 
                                        name="correo" 
                                        id="correo"
                                        onChange={(e) => setState({...state, correo:e.target.value})}
                                    />
                                </li>
                                <li>
                                    <label htmlFor="mensaje"> Mensaje </label>
                                    <textarea 
                                        name="mensaje" 
                                        id="mensaje" 
                                        cols="30" 
                                        rows="10" 
                                        onChange={(e) => setState({...state, mensaje:e.target.value})}
                                        ></textarea>
                                </li>
                                <li>
                                    <div></div>
                                    <div className="div-btn-contacto">
                                        <button 
                                            type="button" 
                                            className="btn-contacto"
                                            onClick={() => sendMensaje()}
                                        > Enviar
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            
                        </form>

                        <h3 className="mensaje-error"> {mensaje}</h3>
                
                    </>
                }
                
            </div>
        </main>
    )
}


export default Contact