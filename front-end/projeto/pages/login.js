import styles from '../styles/pages/Login.module.css'
import Cabecalho from "../components/Cabecalho"
import Link from "next/link"
import Helmet from 'react-helmet'


const handleSubmit = (e) => {
    e.preventDefault()
    alert("Login Realizado!")
}


export default function Login() {
    return (
        <>
            <Helmet title="Login - INNER EASE" />
            <div className='col'>
                <Cabecalho />
            </div>
            <div className={styles.login}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            <div className={styles.formContainer}>
                                <h2 className={styles.formTitle}>Faça o Login</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className={styles.formLabel}>
                                            Endereço de email
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${styles.formInput}`}
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className={styles.formLabel}>
                                            Senha
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${styles.formInput}`}
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <button type="submit" className={`btn btn-primary ${styles.formButton}`}>
                                        Entrar
                                    </button>
                                </form>
                                <p className={styles.formLink}>Não possui login? <Link href="/cadastro" className={styles.linkCadastrar}>Cadastre-se</Link></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}