import './Publi.css'

const Publi = (props) => {
    return(
    <div className='publi'>
        
        <img src='/Maylla Nascimento.png' alt='Professor'/>
        <h4>Maylla Nascimento</h4>
        
        <p>{props.texto}</p>
        
    </div>
        )
}

export default Publi