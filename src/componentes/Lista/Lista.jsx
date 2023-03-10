import './Listinha.css'

const Lista = (props) => {

    return (
        <div className='lista'>
            
                <select onChange={evento => props.alterado(evento.target.value)} value={props.value}>
                    {props.itens.map(item => {return <option key={item}>{item}</option>})}
                </select>
        </div>
    )

}

export default Lista