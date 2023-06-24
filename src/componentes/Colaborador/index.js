import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo }) => {
    return (<div className='colaborador'>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className='rodape'>
            <h4>Nickname: {nome}</h4>
            <h5>Line: {cargo}</h5>
        </div>
    </div>)
}

export default Colaborador