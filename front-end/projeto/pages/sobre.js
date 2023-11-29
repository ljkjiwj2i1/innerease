import styles from '../styles/pages/Inicio.module.css'
import Cabecalho from "../components/Cabecalho"
import Helmet from 'react-helmet'


export default function Home() {
  return (
    <>
      <Helmet title="Sobre - INNER EASE" />
      <Cabecalho />
      <div className={styles.inicio}>
        <div className="container">
          <div className="row">
            <div className="col-md">
              <img src="./img_sobre.png" class="img-fluid" alt="Responsive image" id="img_1" />
            </div>
            <div className="col-md">
              <h1 id="titulo">Sobre Nós</h1>
              <p id="sobre_txt">Somos uma dupla de alunos do Instituto Federal de Educação, Ciência e Tecnologia Sul-rio-grandense (IFSul) - Campus Sapiranga. Realizamos esse site para as disciplinas de Projetos II e Projeto e Desenvolvimento de Interfaces.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
