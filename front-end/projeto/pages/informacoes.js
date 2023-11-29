import Cabecalho from "../components/Cabecalho"
import Helmet from 'react-helmet'
import styles from '../styles/pages/Informacoes.module.css'


export default function Informacoes() {
  return (
    <>
      <Helmet title="Informções - INNER EASE" />
      <Cabecalho />
      <div className={styles.informacoes}>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className={styles.txt}>
                A ansiedade é uma resposta natural do corpo a situações de estresse e ameaça. É um estado emocional caracterizado por preocupação, apreensão e tensão, que pode variar em intensidade de leve a debilitante. Em seu nível mais básico, a ansiedade é um mecanismo de sobrevivência que nos prepara para enfrentar desafios iminentes, liberando hormônios do estresse, como adrenalina e cortisol. Esses hormônios ativam o instinto de "lutar ou fugir", aumentando o ritmo cardíaco, aguçando os sentidos e fornecendo energia extra.
              </p>
              <p className={styles.txt}>No entanto, a ansiedade pode se tornar prejudicial quando é crônica ou excessiva. Pessoas que experimentam ansiedade crônica frequentemente interpretam situações comuns como ameaçadoras, levando à liberação constante de hormônios do estresse. Isso pode resultar em sintomas físicos, como tensão muscular, distúrbios do sono e problemas gastrointestinais. Além disso, a ansiedade pode afetar o sistema cardiovascular, aumentando o risco de doenças cardíacas, e enfraquecer o sistema imunológico, tornando o indivíduo mais suscetível a doenças.</p>
              <p className={styles.txt}>A busca por estratégias de manejo da ansiedade, como terapia, exercícios e técnicas de relaxamento, é fundamental para lidar com esse estado emocional. Reconhecer os gatilhos da ansiedade e aprender a controlar suas respostas é crucial para manter um equilíbrio saudável entre a mente e o corpo. No entanto, é importante lembrar que a ansiedade, quando apropriada e controlada, desempenha um papel vital em nossa sobrevivência e adaptação a desafios do dia a dia.</p>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
