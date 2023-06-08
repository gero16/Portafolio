import { useContext } from "react"
import { Context } from "../../context/context"

const Contact = () => {

    const {urlFrontend} = useContext(Context)
    return (
        <main className="container">
            <div className="contacto flex-column">
                <h2> Contacto </h2>

                <form action={urlFrontend} method="POST" className="formulario-contacto">
                    <ul className="lista-contacto">
                        <li>
                            <label htmlFor="nombre">Nombre </label>
                            <input type="text" name="nombre" id="nombre"/>
                        </li>
                        <li>
                            <label htmlFor="correo"> Correo </label>
                            <input type="text" name="correo" id="correo"/>
                        </li>
                        <li>
                            <label htmlFor="mensaje"> Mensaje </label>
                            <textarea name="mensaje" id="mensaje" cols="30" rows="10" ></textarea>
                        </li>
                        <li>
                            <div></div>
                            <div className="div-btn-contacto">
                                <button type="button" className="btn-contacto">Enviar</button>
                            </div>
                        </li>
                    </ul>
                    
                </form>
            </div>
        </main>
    )
}


export default Contact