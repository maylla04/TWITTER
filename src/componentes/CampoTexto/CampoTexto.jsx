import './campo-texto.css'
import React from 'react'

const CampoTexto = (props) => {
   
    const digitando= (evento) => {
        props.alterado(evento.target.value)
    }

    return(
        <div className='campo-texto'>
            
            <input value={props.valor} type={props.type} onChange={digitando} 
            required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto