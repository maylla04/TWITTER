import './campo-texto.css'
import { useState } from 'react'

const CampoTexto = (props) => {
    const [valor, setValor] = useState('')
    const digitando = (evento) => {
        setValor(evento.target.value)
        console.log(valor)
    }

    return(
        <div className='campo-texto'>
            
            <input value={valor} onChange={digitando} required={props.obrigatorio}placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto