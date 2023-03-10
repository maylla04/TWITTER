import Publi from '../Publi/Publi'
import './Time.css'

const Receba = (props) => {
    return (
        
        (props.publis.length > 0) ? <section className='receba' style={{ backgroundColor: props.corFundo} }>
             
                <div className='publis'>
                    {props.publis.map(publi => 
                    <Publi texto={publi.texto}
                    />)}

                </div>
            
        </section>
        : ''
    )
} 

export default Receba