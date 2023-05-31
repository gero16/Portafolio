
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
import Docker from "../assets/docker.svg"
import Js from "../assets/js.png"
import Css from "../assets/css.svg"
import Html from "../assets/html.svg"
import Next from "../assets/next.svg"
import { Context } from "../context/context"
import Publicacion from "../Components/Publicacion/Publicacion"
import { Fade } from "react-awesome-reveal";
import { useLocation, useParams } from "react-router-dom"



const App = ()=> {
  const location = useLocation()
  console.log(location.hash)
  return (
    <div className="App">

      <div className='container'>
        <div id="main"></div>
        <main className="main-titulo" id="main" > 
          <Fade cascade >
            <h1> Gerónimo Nicola </h1>
            <h2> Full Stack Web Developer </h2>

            <p className="text-titulo">
            Soy un Full Stack Web Developer especializado en Javascript
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus adipisci quidem nulla amet fugit, 
            at odit modi voluptatum distinctio, sequi sapiente atque autem labore rem! Quibusdam, omnis. Quos, velit.
            </p>
          </Fade>
        </main>

        <section className="section-about">
          <h2> Sobre mí </h2>
          <p className="texto-about">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quod natus ipsam molestiae dicta sapiente necessitatibus et nam error doloremque quisquam, adipisci fugit consequuntur officiis, laboriosam excepturi dolores reprehenderit nihil.
          </p>
        </section>

        <section className={location.hash === "#projects" ? "section-trabajos pt-70" : "section-trabajos"} id="projects">
            <h3> Algunos de mis Proyectos </h3>
            <div className="div-trabajos">
              <Publicacion 
                titulo={"Tienda Virtual - Proyecto final"} 
                img="https://camo.githubusercontent.com/eb0081f7f57d4f3c29ca21687b46162bbe9c0b2df501241820c04bb304be5521/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313637363531363335312f676f767135796c726c66667179646432633468762e6a7067"
                contenido={"Proyecto final del curso de ReactJs realizado en Coderhouse, marzo del 2023. Es una tienda virtual de productos, que cuenta con un sistema de sesion y administracion de productos utilizando firebase como backend"}
                github={"https://github.com/gero16/tienda-virtual"}
                web={"https://tienda-virtual-lime.vercel.app/"}
              /> 

              <Publicacion 
                titulo={"Blog para Cliente"} 
                img="https://camo.githubusercontent.com/a50032a1e6c636b1175d3ea7d4ac3d45dc8c6810c739dc7b08e4b5aad496b72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313638313039353332312f636f646572686f7573652f627a64377a336b6b3365647039346732636f33762e6a7067"
                contenido={"Blog hecho para cliente mediante javascript. En constante actualizacion. Se utilizo Node js como backend, y el sistema de plantillas de pug js para renderizar desde el servidor la mayoria del contenido presente"}
                github={"https://github.com/gero16/blog"}
                web={"https://www.luzdeluna.blog/"}
              />

              <Publicacion 
                titulo={"Pokedex - Proyecto Final"} 
                img="https://camo.githubusercontent.com/a50032a1e6c636b1175d3ea7d4ac3d45dc8c6810c739dc7b08e4b5aad496b72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313638313039353332312f636f646572686f7573652f627a64377a336b6b3365647039346732636f33762e6a7067"
                contenido={"Proyecto final grupal del Bootcamp de Senpai Academy. Se utilizo React JS como framework para el front end y Node js como entorno de ejecucion para el backend. Es una pokedex que trae todo los datos de una api. Cuenta con un sistema de login y se pueden agregar nuevos pokemons tanto como comprar"}
                github={"https://github.com/reginamaite/proyecto-final-frontend"}
                web={"https://github.com/reginamaite/proyecto-final-frontend"}
              />
          </div>
        </section>
      </div>

      <section className="section-tecnologias-conocidas" id="tecnologias">
          <article className="section-tecnologias ">
          <h3 className="flex-center titulo-tecnologias-conocidas"> Teconologias Conocidas</h3>
          
            <section className="flex-center-column div">
              <section className="flex-center section">
                <img src={Html} alt="" className="html"/>
                <img src={Css} alt="" className="css"/>
                <img src={Js} alt=""/>
              </section>

              <section className="flex-center section">
                <img src={Vite} alt=""  className="vite"/>
                <img src={GitHub} alt=""  className="github"/>
                <img src={Pug} alt="" className="pug"/>
              </section>

              <section className="flex-center section">
                <img src={Git} alt="" className="git"/>
                <img src={Bootstrap} alt="" className="bootstrap"/>
                <img src={Postgre} alt="" className="postgre"/>
              </section>

              <section className="flex-center section">
                <img src={Node} alt="" className="node"/>
                <img src={React} alt="" />
                <img src={Mongo} alt=""  className="mongo"/>
              </section>
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
                <span> Tailwind </span>
              </div>
              <img src={Next} alt="" className="next"/>
          </section>
        
      </section>
    </div>

    
  )
}


export default App