import { useContext, useState } from "react"
import { Context } from "../../context/context"

const Contact = () => {
    
    const [state, setState] = useState({nombre: "", correo: "", mensaje: ""})
    const [enviado, setEnviado] = useState(false)
    console.log(state)
    const {urlFrontend} = useContext(Context)

    const sendMensaje = async () => {
  
        const settings = { 
        method: 'POST', 
        headers: { 
            "Content-Type": "application/json",
           },
        body :  JSON.stringify(state),
        };

    try {
        const fetchResponse = await fetch(`http://localhost:3000/`, settings);
    
        if(fetchResponse.status === 200){
          console.log("Mensaje enviado correctamente")
          setEnviado(true)

          setTimeout(() => {
            setEnviado(false)
          }, 6000);
        }
    } catch (e) {
        return e;
    }
    return
    }
    return (
        <main className="container">
            <div className="contacto flex-column" id="contact">
                <h2> Contacto </h2>
                
                {
                    enviado === true 
                        ? <>
                            <h3 className="mensaje-enviado"> Mensaje enviado correctamente!</h3>
                        </>
                        : <form action={urlFrontend} method="POST" className="formulario-contacto">
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
                }
                
            </div>
        </main>
    )
}


export default Contact