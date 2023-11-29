
import styles from '../styles/components/Cabecalho.module.css'
import Link from "next/link"


export default function Cabecalho(){
    return(
        <div className={styles.cabecalho}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md'>
                        <ul>
                            <li>
                             <Link href="/" className={styles.botaoLink}>Início</Link>
                            </li>
                            <li>
                            <Link href="/sobre" className={styles.botaoLink}>Sobre</Link>
                            </li>
                            <li>
                            <Link href="/informacoes" className={styles.botaoLink}>O que é ansiedade?</Link>
                            </li>
                            <li>
                            <Link href="/diario" className={styles.botaoLink}>Registre seu humor</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-md-3 '>
                        <Link href='/login' className={styles.botaoLink}>Faça seu login</Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

