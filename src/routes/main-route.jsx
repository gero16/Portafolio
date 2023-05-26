
import Git from "../assets/git.png"
import GitHub from "../assets/github.png"
import Triada from "../assets/triada.png"
import React from "../assets/react.png"
import Node from "../assets/node.png"
import Mongo from "../assets/mongo.png"
import Postgre from "../assets/postgre.png"
import Pug from "../assets/pug.png"
import Vite from "../assets/vite.svg"
import Typescript from "../assets/typescript.png"
import Docker from "../assets/docker.png"
import Publicacion from "../Components/Publicacion/Publicacion"

const App = ()=> {

  return (
    <div className="App">

      <div className='container'>

        <main className="main-titulo">
          <h1> Gerónimo Nicola </h1>
          <h2> Full Stack Developer </h2>
          <p className="text-titulo">
            Soy un Full Stack Web Developer especializado en Javascript
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus adipisci quidem nulla amet fugit, 
            at odit modi voluptatum distinctio, sequi sapiente atque autem labore rem! Quibusdam, omnis. Quos, velit.
          </p>
        </main>

        <section className="section-trabajos">
            <h3> Algunos de mis Trabajos </h3>
            <section className="section-articles">

              <Publicacion 
                titulo={"Tienda Virtual - Poryecto final, Coderhouse"} 
                img="https://camo.githubusercontent.com/eb0081f7f57d4f3c29ca21687b46162bbe9c0b2df501241820c04bb304be5521/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313637363531363335312f676f767135796c726c66667179646432633468762e6a7067"
                contenido={"Proyecto final del curso de ReactJs realizado en Coderhouse, marzo del 2023. Es una tienda virtual de productos, que cuenta con un sistema de sesion y administracion de productos utilizando firebase como backend"}
              /> 

              <Publicacion 
                titulo={"Blog - en Node js"} 
                img="https://camo.githubusercontent.com/a50032a1e6c636b1175d3ea7d4ac3d45dc8c6810c739dc7b08e4b5aad496b72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313638313039353332312f636f646572686f7573652f627a64377a336b6b3365647039346732636f33762e6a7067"
                contenido={"Blog hecho para cliente mediante javascript. En constante actualizacion. Se utilizo Node js como backend, y el sistema de plantillas de pug js para renderizar desde el servidor la mayoria del contenido presente"}
              />

              <Publicacion 
                titulo={"Pokedex - Proyecto Final, Senpai Academy"} 
                img="https://camo.githubusercontent.com/a50032a1e6c636b1175d3ea7d4ac3d45dc8c6810c739dc7b08e4b5aad496b72a/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f6765726f6e69636f6c612f696d6167652f75706c6f61642f76313638313039353332312f636f646572686f7573652f627a64377a336b6b3365647039346732636f33762e6a7067"
                contenido={"Proyecto grupal final del Bootcamp de Senpai Academy. Se utilizo React JS como framework para el front end y Node js como entorno de ejecucion para el backend. Es una pokedex que trae todo los datos de una api. Cuenta con un sistema de login y se pueden agregar nuevos pokemons tanto como comprar"}
              />

            </section>
        </section>

      </div>
      
      <section className="section-tecnologias-conocidas">
          <article className="seccion-tecnologias ">
          <h3 className="flex-center titulo-tecnologias-conocidas"> Teconologias Conocidas</h3>

            <section className="flex-center">
              <img src={Triada} alt=""  className="img-triada"/>
              <img src={Git} alt="" className="git"/>
            </section>

            <section className="flex-center">
              <img src={GitHub} alt=""  className="github"/>
              <img src={Vite} alt="" />
              <img src={Mongo} alt=""  className="mongo"/>
              <img src={Postgre} alt="" />
            </section>

            <section className="flex-center">
              <img src={Node} alt="" className="node"/>
              <img src={Pug} alt="" className="pug"/>
              <img src={React} alt="" />
            </section>
            
          </article>
      </section>

      <section className="section-tecnologias-aprender">
        <h3 className="flex-center titulo-tecnologias-aprender"> Teconologias por aprender </h3>
        <div className="flex-center">
            <section className="flex-center">
              <img src={Typescript} alt="" className="typescript" />
              <img src={Docker} alt=""  className="docker"/>
            </section>
          </div>
      </section>

      <footer>
          algo
      </footer>

    </div>
  )
}


export default App