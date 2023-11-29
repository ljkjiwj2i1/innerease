import Cabecalho from "../components/Cabecalho"
import Helmet from 'react-helmet'
import { useEffect, useState } from "react"
import axios from "axios"
import styles from '../styles/pages/Diario.module.css'


export default function Diario() {

    const [registros, setRegistros] = useState([])
    const [id, setId] = useState("")
    const [data, setData] = useState("")
    const [relato, setRelato] = useState("")

    useEffect(() => {
        obtemRegistros()
    }, [])

    const obtemRegistros = () => {
        axios.get('http://127.0.0.1:5000/registro').then((dados) => {
            setRegistros(dados.data)
        })
    }
    const insereRegistro = () => {

        if (id == "") {
            axios.post('http://127.0.0.1:5000/registro', { "data": data, "relato": relato }).then(() => {
                obtemRegistros()
                limparForm()
            })
        } else {
            axios.put('http://127.0.0.1:5000/registro' + id, { "data": data, "relato": relato }).then(() => {
                obtemRegistros()
                limparForm()
            })
        }

    }
    const excluirRegistro = (id) => {
        axios.delete('http://127.0.0.1:5000/registro/' + id).then(() => {
            obtemRegistros()
        })
    }

    const limparForm = () => {
        setId("")
        setData("")
        setRelato("")
    }
    const editarRegistro = (registro) => {
        setId(registro.id)
        setData(registro.data)
        setRelato(registro.relato)
    }

    return (
        <>
            <Helmet title="Registro - INNER EASE" />
            <Cabecalho />
            <div className={`container ${styles.diario}`}>
                <div className="row align-items-center">
                    <div className="col-md-9">
                        <h1 className={`${styles.titulo} display-4`}>Diário</h1>
                    </div>
                    <div className="col-md-3">
                        <div className={`${styles.usuario} p-4 text-center`}>
                            <img src="./img_user.png" className={`${styles.img_user} img-fluid rounded-circle`} alt="Imagem do usuário" />
                            <p>Nome de usuário</p>
                            <button className="btn btn-outline-dark">Sair</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="text"
                            className="form-control mb-2"
                            placeholder="Data (YYYY-mm-dd)"
                            value={data}
                            onChange={
                                (e) => {
                                    setData(e.target.value)
                                }
                            }
                        />
                        <input type="text"
                            className={"form-control mb-2 "}
                            placeholder="Novo relato"
                            value={relato}
                            onChange={
                                (e) => {
                                    setRelato(e.target.value)
                                }
                            }
                        />
                        <button className="btn btn-primary mb-2" onClick={
                            insereRegistro}
                        >Salvar relato</button>
                        <button className="btn btn-secondary mb-2"
                            onClick={() => { limparForm() }}
                        >Limpar</button>
                        <h2 className={styles.seusRelatosTitulo}>Seus relatos</h2>
                        <ul className="list-group">
                            {registros.map((registro) => (
                                <li className="list-group-item d-flex justify-content-between align-items-center"
                                    key={registro.id}>
                                    Data: {registro.data} - Relato: {registro.relato}
                                    <div>
                                        <button className="btn btn-warning me-2"
                                            onClick={() => {
                                                editarRegistro(registro)
                                            }}
                                        >Editar</button>
                                        <button className="btn btn-danger"
                                            onClick={() => {
                                                excluirRegistro(registro.id)
                                            }}>Deletar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}
