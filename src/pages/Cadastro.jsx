import React from 'react';
import { Formik } from 'formik';

const Cadastro = () => (
    <div>
        <h1>Cadastrar Produto</h1>
        <Formik
            initialValues={{
                id: 1,
                nome: 'suco de laranja',
                descricao: 'suco natural de laranja',
                codigoBarras: '1234567890123',
                foto: [],
                preco: '13.5',
                categoria: 'bebidas',
                destaque: 'promoção natural',
                statusProd: 'ATIVO'
            }}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    console.log(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
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
                            name="id"
                        />
                        {props.errors.id && <div id="feedback">{props.errors.id}</div>}
                    </div>

                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.nome}
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
                        />
                        {props.errors.descricao && <div id="feedback">{props.errors.descricao}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.codigoBarras}
                            name="codigoBarras"
                        />
                        {props.errors.codigoBarras && <div id="feedback">{props.errors.codigoBarras}</div>}
                    </div>
                    <div>
                        <input
                            type="image"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.foto}
                            name="foto"
                            hidden
                        />
                        {props.errors.foto && <div id="feedback">{props.errors.foto}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.preco}
                            name="preco"
                        />
                        {props.errors.preco && <div id="feedback">{props.errors.preco}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.categoria}
                            name="categoria"
                        />
                        {props.errors.categoria && <div id="feedback">{props.errors.categoria}</div>}
                    </div>
                    <div>
                        <input
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.destaque}
                            name="destaque"
                        />
                        {props.errors.destaque && <div id="feedback">{props.errors.destaque}</div>}
                    </div>
                    <div>
                        <select
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.statusProd}
                            name="statusProd"
                        >
                            <option>ATIVO</option>
                            <option>INATIVO</option>
                        </select>
                        {props.errors.statusProd && <div id="feedback">{props.errors.statusProd}</div>}
                    </div>
                    
                    <button type="submit">SALVAR</button>
                </form>
            )}
        </Formik>
    </div>
);

export default Cadastro