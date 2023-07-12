
import { useContext,useState } from "react"
import { useCopyToClipboard } from 'usehooks-ts'
import { Context } from "../context/context"

import { cuartoProyectoEng, cuartoProyectoEsp, primerProyectoEng, primerProyectoEsp, 
         segundoProyectoEng, segundoProyectoEsp, tercerProyectoEng, tercerProyectoEsp } 
from "../helpers/idioma"

import { Fade } from "react-awesome-reveal";

import Publicacion from "../Components/Publicacion/Publicacion"
import Tecnologia from "../Components/Tecnologia/Tecnologia";
import Contact from "../Components/Contact/Contact"

import GitHub from "../assets/github.png"
import React from "../assets/react.png"
import Linkedin from "../assets/in.png"
import Correo from "../assets/correo.png"

const App = ()=> {
  const { english, Docker, Typescript, Next, Tailwind } = useContext(Context)

  const [value, copy] = useCopyToClipboard()
  const [copiado, setCopiado] = useState(false)

  const copyClipboard = (texto) => {
    copy(texto)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 4000);
  }

  return (
    <div className="App">

      <div className='container'>
        <div id="main"></div>
        <main className="main-titulo" id="main" > 
          <Fade cascade >
            <h1> Gerónimo Nicola </h1>
            <h2 className="subtitulo"> Full Stack Developer </h2>

            <p className="text-titulo">

              {
                english 
                  ? "Full Stack Developer jr pasionated for the development, resident in Montevideo, Uruguay"
                  : "Full Stack Developer jr apasionado por el desarrollo web, residente en Montevideo, Uruguay." 
              }
           
            </p>

            <span className="redes-personal">
              <a href="https://github.com/gero16">
                <img 
                  src={GitHub} 
                  alt="imagen del icono de github" 
                  className="redes-personal-img github-main"/>
              </a>
              <a href="https://www.linkedin.com/in/geronicola">
                <img 
                  src={Linkedin} 
                  alt="imagen del icono de linkedin" 
                  className="redes-personal-img  linkedin-main"/>
              </a>

              <span className="span-correo">
                <img 
                  src={Correo} 
                  alt="imagen del icono de un correo"  
                  className="redes-personal-img  correo-main"/> 
                  geronicola1696@gmail.com
              </span>

            </span>
            
          </Fade>
        </main>
      </div>

      <section className="section-trabajos" id="projects">
            <div className="container">

              <h3> Algunos de mis Proyectos </h3>
              <div className="div-trabajos">
                <Publicacion 
                    titulo={"Blog para Cliente"} 
                    img="https://res.cloudinary.com/geronicola/image/upload/v1687548885/wm4qbdqze2cxjvkdv9pn.jpg" 
                    contenido={english ? primerProyectoEng : primerProyectoEsp}
                    github={"https://github.com/gero16/blog"}
                    web={"https://www.luzdeluna.blog/"}
                    tecnologias={["Javascript", "Node Js", "Pug Js", "Postgre SQL"]}
                    hover={"blog-vanilla"}
                />

                 <Publicacion 
                    titulo={"Tienda Virtual - Proyecto final"} 
                    img="https://res.cloudinary.com/geronicola/image/upload/v1687994366/i8oeayq6idr3rtaliava.jpg"
                    contenido={english ? segundoProyectoEng : segundoProyectoEsp}
                    github={"https://github.com/gero16/tienda-virtual"}
                    web={"https://tienda-virtual-lime.vercel.app/"}
                    tecnologias={["React Js", "Firebase", "Bootstrap"]}
                    hover={"tienda-react"}
                  /> 
                  
                <Publicacion 
                    titulo={"Pokedex - Proyecto Final"} 
                    img="https://res.cloudinary.com/geronicola/image/upload/v1685729177/ulde9uhsbid4hdsv8tsg.jpg"
                    contenido={english ? tercerProyectoEng : tercerProyectoEsp}
                    github={"https://github.com/reginamaite/proyecto-final-frontend"}
                    web={"No hay"}
                    tecnologias={["React Js", "Node Js", "Postgre SQL"]}
                    cover={true}
                />

                <Publicacion 
                  titulo={"Tienda Virtual - Vanilla Js"} 
                  img="https://res.cloudinary.com/geronicola/image/upload/v1685731780/waz1ashegfwgnpxy0f8q.jpg"
                  contenido={english ? cuartoProyectoEng : cuartoProyectoEsp}
                  github={"https://github.com/gero16/tienda-virtual-js"}
                  web={"No hay"}
                  tecnologias={["Javascript", "Mongo DB"]}
                  hover={"tienda-vanilla"}
                />
            </div>
          </div>
        </section>

      <section className="section-tecnologias-conocidas" id="tecnologias">
          <article className="section-tecnologias">
          <h3 className="flex-center titulo-tecnologias-conocidas"> Habilidades </h3>
            
            <Tecnologia tecnologia1={"html"} tecnologia2={"css"} tecnologia3={"javascript"} />

            <Tecnologia tecnologia1={"react"} tecnologia2={"node"} tecnologia3={"pug"} />

            <Tecnologia tecnologia1={"github"} tecnologia2={"git"} tecnologia3={"bootstrap"} />

            <Tecnologia tecnologia1={"postgre"} tecnologia2={"vite"} tecnologia3={"mongo"} />
             
          </article>
        </section>
        
        <section className="section-tecnologias-aprender">
          <h3 className="flex-center titulo-tecnologias-aprender"> Teconologias de interés </h3>
          <section className="flex-center section-tecnologias-aprender2">
              <img src={Typescript} alt="imagen del logo de typescript" className="typescript" />
              <img src={Docker} alt="imagen del logo de docker"  className="docker"/>
              <div className="flex-center-column">
                <img src={Tailwind} alt="imagen del logo de tailwind"  className="tailwind"/> 
                <span className="span-tailwind"> Tailwind </span>
              </div>
              <img src={Next} alt="imagen del logo de next js" className="next"/>
          </section>
        
      </section>

      <section className="contact">
        <Contact />
      </section>

      <footer className="container flex-around">
        <section className="div-correo">
          <span className={`portapapeles ${ copiado ? "active" :"inactive" }`}> {copiado ? "Copiado en portapapeles!" : ""} </span>
          <span onClick={(e) => copyClipboard(e.target.textContent)} className="correo"> geronicola1696@gmail.com </span>
        </section>
        <section> 
          <img src={ GitHub } alt="imagen con el icono de github" className="github-main"/> 
        </section>
        <section> 
          <img src={ Linkedin } alt="imagen con el icono de linkedin" className="github-main"/> 
        </section>
      </footer>

    </div>

    

    
  )
}


export default App