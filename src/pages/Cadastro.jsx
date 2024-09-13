import React, {useState, useEffect} from 'react';
import { Formik } from 'formik';
import axios from 'axios';

const Cadastro = () => {

    const [dados, setDados] = useState({})
    const [clicou, setClicou] = useState(false)

    function enviarDados(){
        axios.post('http://localhost:8080/produto', 
            dados
        ).then(response => console.log(response))
        .then(dados => alert('Dados enviados com sucesso'))
        .catch(error => console.log(error))
    }
    
    useEffect(()=>{
       clicou ? enviarDados() : console.log('app no ar')
       return (()=>setClicou(false))
    }, [clicou])
    
    return (
    <div>
        <h1>Cadastrar Projeto</h1>
        <Formik
            initialValues={{
                id: 0,
                nome: '',
                descricao: '',
                codigo: '',
                statusProj: '',
                tema: '',
            }}
            onSubmit={(values, actions) => {

                if(values.nome.length > 0){
                        setTimeout(() => {
                        setDados({
                            nome: values.nome,
                            descricao: values.descricao,
                            codigo: values.codigo,
                            foto: values.foto,
                            tema: values.tema,
                            statusProd: values.statusProj
                            
                        })
                        setClicou(true)
                        // alert(JSON.stringify(values, null, 2));
                        // console.log(JSON.stringify(values, null, 2));
                        // actions.setSubmitting(false);
                    }, 1000);
                } else {
                    alert('Favor preencher informações!')
                }
                
            }}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <input
                            type="number"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.id}
                            placeholder='0'
                            name="id"
                            disabled
                        />
                        {props.errors.id && <div id="feedback">{props.errors.id}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.nome}
                            placeholder="Nome do Projeto"
                            name="nome"
                        />
                        {props.errors.nome && <div id="feedback">{props.errors.nome}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.descricao}
                            name="descricao"
                            placeholder="Descrição do Projeto"
                        />
                        {props.errors.descricao && <div id="feedback">{props.errors.descricao}</div>}
                    </div>
                    
                   
                   
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.tema}
                            name="tema"
                            placeholder="Tema do Projeto"
                        />
                        {props.errors.tema && <div id="feedback">{props.errors.tema}</div>}
                    </div>
                    
                    <div>
                        <select
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.statusProj}
                            name="statusProj"
                        >
                            <option>ATIVO</option>
                            <option>INATIVO</option>
                        </select>
                        {props.errors.statusProj && <div id="feedback">{props.errors.statusProj}</div>}
                    </div>
                    
                    <button type="submit">SALVAR</button>
                </form>
            )}
        </Formik>
    </div>
    );
}

export default Cadastro