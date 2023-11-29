import styles from '../styles/pages/Cadastro.module.css'
import Cabecalho from "../components/Cabecalho"
import Link from "next/link"
import Helmet from 'react-helmet'


export default function Cadastro() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const senha = document.getElementById('password').value;
        const confirmSenha = document.getElementById('confirmPassword').value;
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        if (senha !== confirmSenha) {
            confirmPasswordError.textContent = "As senhas não coincidem!";
            return;
        }
        confirmPasswordError.textContent = "";

        alert("Cadastro Realizado!");
    }

    return (
        <>
            <Helmet title="Cadastro - INNER EASE" />
            <div className='col'><Cabecalho /></div>
            <div className={styles.cadastro}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 mx-auto'>
                            <div className={styles.formContainer}>
                                <h2 className={styles.formTitle}>Faça o Cadastro</h2>
                                <form onSubmit={handleSubmit}>


                                    <div className="mb-3">
                                        <label htmlFor="name" className={styles.formLabel}>
                                            Nome
                                        </label>
                                        <input type="text" className={`form-control ${styles.formInput}`} id="name" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                                        <input type="email" className={`form-control ${styles.formInput}`} id="email" />
                                    </div>
  
                                    <div className="mb-3">
                                        <label htmlFor="password" className={styles.formLabel}>Senha</label>
                                        <input type="password" className={`form-control ${styles.formInput}`} id="password" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className={styles.formLabel}>Confirmar Senha</label>
                                        <input type="password" className={`form-control ${styles.formInput}`} id="confirmPassword" />
                                        <small className={styles.errorMessage} id="confirmPasswordError"></small>
                                    </div>

                                    <button type="submit" className={`btn btn-primary ${styles.formButton}`}>Cadastrar</button>
                                </form>
                                <p className={styles.formLink}>Já possui login? <Link href="/login" className={styles.linkCadastrar}>Entrar</Link></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}