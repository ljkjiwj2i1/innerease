import styles from '../styles/pages/Inicio.module.css'
import Link from "next/link"
import Cabecalho from "../components/Cabecalho"
import Helmet from 'react-helmet'


export default function Home() {

  return (
    <>
      <Helmet title="Início - INNER EASE" />
      <Cabecalho />
      <div className={styles.inicio}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="./img_capa.png" className="img-fluid d-block mx-auto" alt="Responsive image" id="img_1" />
              <Link href='/informacoes'>
                <img src="./img_capaBotao.png" className="img-fluid d-block mx-auto" alt="Responsive image" id="img_2" />
              </Link>
            </div>
            <div className="col-md"> <h2 id="titulo">Vamos falar de</h2>
              <h1 id="titulo2">ansiedade?</h1></div>
          </div>
        </div>

      </div>
    </>
  )
}
