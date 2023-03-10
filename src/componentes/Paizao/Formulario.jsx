import { useState } from 'react';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import Botao from '../Botao/Botao';



const Formulario = (props) => {

    const [texto, setTexto] = useState('')
    const Salvar = (evento) => {
        evento.preventDefault()
        props.aoPubliCadastrado({
            texto
        })
    }
    

    return(
        <section className='formulario'>
            <form onSubmit={Salvar}>
                <CampoTexto obrigatorio={true} placeholder="Digite o que voce esta pensando..." 
                valor={texto} alterado={valor => setTexto(valor)}/>
                
                
                <Botao>
                    Salvar
                </Botao>
            </form>
        </section>
    )


}

export default Formulario