import React, { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState(null);
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    });
    setNome('');
    setCargo('');
    setImagem(null);
    setTime('');
  };

  const handleImagemChange = (event) => {
    const selectedImagem = event.target.files[0];
    setImagem(URL.createObjectURL(selectedImagem));
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nickname"
          placeholder="Digite seu nickname"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Line"
          placeholder="Digite a line do jogador"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <div className='imagem'>
          <label htmlFor="imagem">Imagem:</label>
          <input
            type="file"
            id="imagem"
            accept="image/*"
            onChange={handleImagemChange}
          />
        </div>
        {imagem && <img src={imagem} alt="Imagem do jogador" />}
        <ListaSuspensa
          obrigatorio={true}
          label="Função"
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;