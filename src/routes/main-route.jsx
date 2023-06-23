
import { Context } from "../context/context"
import Publicacion from "../Components/Publicacion/Publicacion"
import { Fade } from "react-awesome-reveal";
import Contact from "../Components/Contact/Contact"
import { useContext, useState } from "react"
import { cuartoProyectoEng, cuartoProyectoEsp, primerProyectoEng, primerProyectoEsp, segundoProyectoEng, segundoProyectoEsp, tercerProyectoEng, tercerProyectoEsp } from "../helpers/idioma"
import Tecnologia from "../Components/Tecnologia/Tecnologia";

import GitHub from "../assets/github.png"
import React from "../assets/react.png"
import Tailwind from "../assets/tailwind.svg"
import Typescript from "../assets/typescript.png"
import Docker from "../assets/docker.webp"
import Next from "../assets/next.svg"
import Linkedin from "../assets/in.png"
import Correo from "../assets/correo.png"

const App = ()=> {
  const { english } = useContext(Context)

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
                  titulo={"Tienda Virtual - Proyecto final"} 
                  img="https://res.cloudinary.com/geronicola/image/upload/v1686262953/mzizyticb4ba7s4atcff.png"
                  contenido={english ? primerProyectoEng : primerProyectoEsp}
                  github={"https://github.com/gero16/tienda-virtual"}
                  web={"https://tienda-virtual-lime.vercel.app/"}
                  tecnologias={["React Js", "Firebase", "Bootstrap"]}
                  /> 

                <Publicacion 
                  titulo={"Blog para Cliente"} 
                  img="https://res.cloudinary.com/geronicola/image/upload/v1687548885/wm4qbdqze2cxjvkdv9pn.jpg"
                  contenido={english ? segundoProyectoEng : segundoProyectoEsp}
                  github={"https://github.com/gero16/blog"}
                  web={"https://www.luzdeluna.blog/"}
                  tecnologias={["Javascript", "Node Js", "Pug Js", "Postgre SQL"]}
                />

                <Publicacion 
                  titulo={"Pokedex - Proyecto Final"} 
                  img="https://res.cloudinary.com/geronicola/image/upload/v1686252165/qjleughaubj3m87uqufv.jpg"
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
                  github={"https://github.com/reginamaite/proyecto-final-frontend"}
                  web={"No hay"}
                  tecnologias={["Javascript", "Mongo DB"]}
                />
            </div>
          </div>
        </section>

      <section className="section-tecnologias-conocidas" id="tecnologias">
          <article className="section-tecnologias">
          <h3 className="flex-center titulo-tecnologias-conocidas"> Teconologias Conocidas</h3>
            
            <Tecnologia tecnologia1={"html"} tecnologia2={"css"} tecnologia3={"javascript"} />

            <Tecnologia tecnologia1={"vite"} tecnologia2={"github"} tecnologia3={"pug"} />

            <Tecnologia tecnologia1={"git"} tecnologia2={"bootstrap"} tecnologia3={"postgre"} />

            <Tecnologia tecnologia1={"node"} tecnologia2={"react"} tecnologia3={"mongo"} />
             
          </article>
        </section>
        
        <section className="section-tecnologias-aprender">
          <h3 className="flex-center titulo-tecnologias-aprender"> Teconologias por aprender </h3>
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

      <footer>
        <div className="container flex-around">
          <span> geronicola1696@gmail.com </span>
          <span><img src={GitHub} alt="imagen con el icono de github" className="github-main"/>
              </span>
          <span> <img src={Linkedin} alt="imagen con el icono de linkedin" className="github-main"/></span>
        </div>
      </footer>
    </div>

    
  )
}


export default App