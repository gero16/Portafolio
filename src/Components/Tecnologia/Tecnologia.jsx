import { useContext } from "react"
import { Context } from "../../context/context"
import "./Tecnologia.css"

const style = {
    backgroundPosition: "50%",
}

const Tecnologia = ({tecnologia1, tecnologia2, tecnologia3}) => {
    const {objetosImages } = useContext(Context)
    let tecnologiasMostar = []

    for (var key in objetosImages) {
        if(key === tecnologia1 || key === tecnologia2 || key === tecnologia3) {
            let extension = key === "node" || key === "pug" || key === "react" ? "JS" : ""
            if(key === "postgre") extension = "SQL"
            if(key === "mongo") extension = "DB"
            
            tecnologiasMostar.push([key, objetosImages[key],  extension])
        }
      }


    return (
        <>
            <section className="grid-tecnologias">
                {
                    tecnologiasMostar.map((element, key) => {
                        return (
                            <article className={"text-center div-tecnologia " + `article-${element[0]}`} key={key} >
                                <div className="div100">
                                    <img 
                                        src={element[1]} 
                                        alt="imagen del logo de html" 
                                        className={"img-tecnologias " + element[0] }
                                    />
                                </div>
                                <p> 
                                    { 
                                        element[0] === "html"
                                            ? element[0].toUpperCase()
                                            : element[0] === "css" 
                                                ? element[0].toUpperCase()
                                                :  element[0][0].toUpperCase() + element[0].substring(1) + " " + element[2]
                                    }
                                    
                                </p>
                            </article>
                        )
                    })
                }
            </section>
        </>
    )
}

export default Tecnologia;