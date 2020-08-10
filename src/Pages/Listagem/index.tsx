import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/pageHeader';
import PageFooter from '../../components/pageFooter';

import './styles.css'
import api from '../../services/api';

interface cadastro {
    nome: string,
    email: string,
    cpf: number,
}

function Listagem() {
    const [cadastro, setCadastro] = useState<cadastro[]>([]);

    useEffect(() => {
        console.log("oi");
        api.get('/').then((res) => {
            console.log(res.data);
            setCadastro(res.data);
        })
    }, []);






    return (

        <div id="page-lista" className="container">
            <PageHeader title="Cadastro" />
            <div className="lista-container">
                <p id="listacliente">Lista de Clientes</p>
                <div className="input-block">
                    <label htmlFor="nomeDoCliente">Nome do Cliente</label>
                    <input type="text" id="nomeDoCliente" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Cpf</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cadastro.map(table => (
                            <tr key={table.cpf}>
                                <td>{table.nome}</td>
                                <td>{table.email}</td>
                                <td>{table.cpf}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
            <PageFooter />
        </div>
    );
}

export default Listagem;