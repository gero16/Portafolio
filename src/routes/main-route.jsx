
import Git from "../assets/git.svg"
import GitHub from "../assets/github.png"
import Triada from "../assets/triada.png"
import React from "../assets/react.png"
import Node from "../assets/node.png"
import Mongo from "../assets/mongo.svg"
import Postgre from "../assets/postgre.svg"
import Pug from "../assets/pug.png"
import Vite from "../assets/vite.png"
import Bootstrap from "../assets/bootstrap.svg"
import Tailwind from "../assets/tailwind.svg"
import Typescript from "../assets/typescript.png"
import Docker from "../assets/docker.webp"
import Js from "../assets/js.png"
import Css from "../assets/css.svg"
import Html from "../assets/html.svg"
import Next from "../assets/next.svg"
import Linkedin from "../assets/in.png"
import Correo from "../assets/correo.png"
import { Context } from "../context/context"
import Publicacion from "../Components/Publicacion/Publicacion"
import { Fade } from "react-awesome-reveal";
import { useLocation, useParams } from "react-router-dom"
import Contact from "../Components/Contact/Contact"
import { useContext } from "react"



const App = ()=> {
  const { cambiarLenguaje } = useContext(Context)
  
  return (
    <div className="App">

      <div className='container'>
        <div id="main"></div>
        <main className="main-titulo" id="main" > 
          <Fade cascade >
            <h1> Gerónimo Nicola </h1>
            <h2 className="subtitulo"> Full Stack Web Developer </h2>

            <p className="text-titulo">
              Soy un Full Stack Web Developer Junior apasionado por el desarrollo web, 
              residente en Montevideo, Uruguay. 
            </p>

            <span className="redes-personal">
              <a href="https://github.com/gero16">
                <img src={GitHub} alt="" className="github-main"/>
              </a>
              <a href="https://www.linkedin.com/in/geronicola">
                <img src={Linkedin} alt="" className="linkedin-main"/>
              </a>

              <span className="span-correo">
                <img src={Correo} alt=""  className="correo-main"/> 
                geronicola1696@gmail.com
              </span>

            </span>
            
          </Fade>
        </main>


        <section className="section-trabajos" id="projects">
            <h3> Algunos de mis Proyectos </h3>
            <div className="div-trabajos">
              <Publicacion 
                titulo={"Tienda Virtual - Proyecto final"} 
                img="https://res.cloudinary.com/geronicola/image/upload/v1685907757/prspzggsc2ipgqozjpfd.png"
                contenido={"Continuacion del proyecto final del curso de React Js realizado en Coderhouse, marzo del 2023. Es una tienda virtual de productos, que cuenta con un sistema de sesion y administracion de productos utilizando firebase como backend"}
                github={"https://github.com/gero16/tienda-virtual"}
                web={"https://tienda-virtual-lime.vercel.app/"}
                tecnologias={["React Js", "Firebase", "Bootstrap"]}
                /> 

              <Publicacion 
                titulo={"Blog para Cliente"} 
                img="https://camo.githubusercontent.com/eb0081f7f57d4f3c29ca21687b46162bbe9c0b2df501241820c04bb304be5521/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313637363531363335312f676f767135796c726c66667179646432633468762e6a7067"
                contenido={"Blog hecho para cliente mediante javascript. En constante actualizacion. Se utilizo Node js como backend, y el sistema de plantillas de pug js para renderizar desde el servidor la mayoria del contenido presente"}
                github={"https://github.com/gero16/blog"}
                web={"https://www.luzdeluna.blog/"}
                tecnologias={["Javascript", "Node Js", "Pug Js", "Postgre SQL"]}
              />

              <Publicacion 
                titulo={"Pokedex - Proyecto Final"} 
                img="https://res.cloudinary.com/geronicola/image/upload/v1685729177/ulde9uhsbid4hdsv8tsg.jpg"
                contenido={"Proyecto final grupal del Bootcamp de Senpai Academy. Se utilizo React JS como framework para el front end y Node js como entorno de ejecucion para el backend. Es una pokedex que trae todo los datos de una api. Cuenta con un sistema de login y se pueden agregar nuevos pokemons tanto como comprar"}
                github={"https://github.com/reginamaite/proyecto-final-frontend"}
                web={"No hay"}
                tecnologias={["React Js", "Node Js"]}
                cover={true}
              />

            <Publicacion 
                titulo={"Tienda Virtual - Vanilla Js"} 
                img="https://res.cloudinary.com/geronicola/image/upload/v1685731780/waz1ashegfwgnpxy0f8q.jpg"
                contenido={"Proyecto personal sobre una tienda virtual, integrada con mercado pago"}
                github={"https://github.com/reginamaite/proyecto-final-frontend"}
                web={"No hay"}
                tecnologias={["Javascript", "Mongo DB"]}
              />
          </div>
        </section>
      </div>

      <section className="section-tecnologias-conocidas" id="tecnologias">
          <article className="section-tecnologias">
          <h3 className="flex-center titulo-tecnologias-conocidas"> Teconologias Conocidas</h3>
            
              <section className="grid-tecnologias">
                <div className="text-center">
                  <img src={Html} alt="" className="html"/>
                  <p> HTML </p>
                </div>
                <div className="text-center">
                  <img src={Css} alt="" className="css"/>
                  <p> CSS </p>
                </div>
                <div className="text-center">
                  <img src={Js} alt=""/>
                  <p> JavaScript </p>
                </div>
              </section>

              <section className="grid-tecnologias">
                <div className="text-center">
                <img src={Vite} alt=""  className="vite"/>
                <p> Vite </p>
                </div>
                <div className="text-center">
                <img src={GitHub} alt=""  className="github"/>
                <p>Github</p>
                </div>
                <div className="text-center">
                  
                  <img src={Pug} alt="" className="pug"/>
                  <p>Pug JS</p>
                </div>
              </section>

              <section className="grid-tecnologias section-especial">
                
              <div className="text-center">
                <div className="div100">
                  <img src={Git} alt="" className="git"/>
                </div>
                <p>Git</p>
                </div>
              <div className="text-center">
                <div className="div100">
                  <img src={Bootstrap} alt="" className="bootstrap"/>
                </div>
                <p>Bootstrap</p>
                </div>
              <div className="text-center">
                <div className="div100">
                <img src={Postgre} alt="" className="postgre"/>
                </div>
                <p>PostgreSQL</p>
                </div>
              </section>

              <section className="grid-tecnologias">
              <div className="text-center"> 
                <div className="div100">
                  <img src={Node} alt="" className="node"/>
                </div>
                <p>Node JS</p>
              </div>
              <div className="text-center"> 
                <div className="div100">
                  <img src={React} alt="" />
                </div>
               <p>React JS</p>
              </div>
              <div className="text-center"> 
                <img src={Mongo} alt=""  className="mongo"/>
                <p> Mongo DB </p>
              </div>
              </section>
 
  
            
          </article>
        </section>
        
        <section className="section-tecnologias-aprender">
          <h3 className="flex-center titulo-tecnologias-aprender"> Teconologias por aprender </h3>
          <section className="flex-center section-tecnologias-aprender2">
              <img src={Typescript} alt="" className="typescript" />
              <img src={Docker} alt=""  className="docker"/>
              <div className="flex-center-column">
                <img src={Tailwind} alt=""  className="tailwind"/> 
                <span className="span-tailwind"> Tailwind </span>
              </div>
              <img src={Next} alt="" className="next"/>
          </section>
        
      </section>

      <Contact> </Contact>

      <footer>
        <div className="container flex-around">
          <span> Geronimo Nicola </span>
          <span><img src={GitHub} alt="" className="github-main"/>
              </span>
          <span> <img src={Linkedin} alt="" className="github-main"/></span>
        </div>
      </footer>
    </div>

    
  )
}


export default App