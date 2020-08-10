import React, { useState, FormEvent } from 'react';
import './styles.css';
import PageHeader from '../../components/pageHeader';
import PageFooter from '../../components/pageFooter';
import api from '../../services/api';
function Cadastro() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');

    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [formaDePagamento, setFormaDePagamento] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [codigoSeguranca, setCodigoSeguranca] = useState('');




    function handleCreateUser(e: FormEvent) {
        e.preventDefault();

        console.log({
            nome,
            email,
            cpf,
            endereco,
            estado,
            cidade,
            cep,
            formaDePagamento,
            nomeCartao,
            mes,
            ano,
            numeroCartao,
            codigoSeguranca,
        })

        api.post('/', {
            nome,
            email,
            cpf,
            endereco,
            estado,
            cidade,
            cep,
            formaDePagamento,
            nomeCartao,
            mes,
            ano,
            numeroCartao,
            codigoSeguranca,

        }).then(() => {
            alert('Cadastrado com sucesso')
        }).catch(() => {
            alert('Erro na hora de fazer o cadastro ')
        })
    }

    return (
        <div id="page-cadastro" className="container">
            {/* importação do Componente Header */}
            <PageHeader title="Cadastro" />
            <div className="page-form">
                <form id="formulario" onSubmit={handleCreateUser}>
                    <div className="input-block">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" id="cpf" placeholder="111.111.111-11" value={cpf} onChange={(e) => { setCpf(e.target.value) }} />
                    </div>
                    <div className="grupo2">

                        <div className="input-block">
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" id="endereco" placeholder="Rua, Número e Bairro" value={endereco} onChange={(e) => { setEndereco(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="estado">Estado</label>
                            <select id="estado" placeholder="Selecione o Estado" value={estado} onChange={(e) => { setEstado(e.target.value) }} >
                                <option value="">Selecione o Estado</option>
                                <option value="Minas Gerais">Minas Gerais</option>
                            </select>
                        </div>
                        <div className="input-block">
                            <label htmlFor="cep">CEP</label>
                            <input type="text" id="cep" placeholder="22.222-000" value={cep} onChange={(e) => { setCep(e.target.value) }} />
                        </div>
                        <div className="input-block">
                            <label htmlFor="cidade">Cidade</label>
                            <select id="cidade" value={cidade} onChange={(e) => { setCidade(e.target.value) }} >
                                <option value="">Selecione a Cidade</option>
                                <option value="Belo Horizonte">Belo Horizonte</option>
                            </select>
                        </div>

                    </div>
                    <p>Forma de Pagamento</p>
                    <div className="forma-de-pagamento">

                        <div className="radio-group">
                            <input type="radio" id="formaDePagamento" name="formaDePagamento" value="Cartão de Credito" onChange={(e) => { setFormaDePagamento(e.target.value) }} />
                            <label htmlFor="credito">Cartão de Credito</label>

                            <input type="radio" id="formaDePagamento" name="formaDePagamento" value="Boleto" onChange={(e) => { setFormaDePagamento(e.target.value) }} />
                            <label htmlFor="boleto">Boleto Bancário</label>
                        </div>
                        <div className="grupo3">

                            <div className="input-block">
                                <label htmlFor="nomeCartao">Nome no Cartão</label>
                                <input type="text" id="nomeCartao" value={nomeCartao} onChange={(e) => { setNomeCartao(e.target.value) }} />
                            </div>
                            <div className="input-block">
                                <label htmlFor="dataExpiracao">Data de Expiração</label>

                                <select id="mes" value={mes} onChange={(e) => { setMes(e.target.value) }} >
                                    <option value="">Mês</option>
                                    <option value="1">Janeiro</option>
                                </select>

                                <select id="ano" value={ano} onChange={(e) => { setAno(e.target.value) }} >
                                    <option value="">Ano</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                            <div className="input-block">
                                <label htmlFor="numeroCartao">Número do Cartão</label>
                                <input type="text" id="numeroCartao" value={numeroCartao} onChange={(e) => { setNumeroCartao(e.target.value) }} />
                            </div>

                            <div className="input-block">
                                <label htmlFor="codigoSeguranca">Código de Seguraça</label>
                                <input type="text" id="codigoSeguranca" value={codigoSeguranca} onChange={(e) => { setCodigoSeguranca(e.target.value) }} />
                            </div>
                        </div>
                    </div>
                    <div className="footer-form">
                        <p>Seu cartão será debitado em R$ 49,00</p>
                        <button type="submit">
                            REALIZAR MATRÍCULA
                        </button>
                        <h5>Informações seguras e criptografadas</h5>
                    </div>
                </form>
                <PageFooter />
            </div>
            {/* importação do componente Footer */}
        </div>
    );
}

export default Cadastro;