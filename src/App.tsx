import { FormEvent, useState} from 'react'
import './App.css'

function App() {

    interface InfoProps{
        nome: string
        idade: number
    }
    
    const [inputNome, setInputNome] = useState('')
    const [inputNascimento, setInputNascimento] = useState('')

    const [usuario, setUsuario] = useState<InfoProps>()

    function handleResult(e: FormEvent){
        e.preventDefault()

        if(!inputNascimento || !inputNascimento){
            alert('OPS... complete o formulário!')
            return
        }
        const anoAtual = new Date().getFullYear()
        
        let calculoIdade = anoAtual - parseInt(inputNascimento, 10)

        setUsuario({
            nome: inputNome,
            idade: calculoIdade
        })

        setInputNome('')
        setInputNascimento('')
    }

    return (
        <div className='container'>
            <h1 className='title' > Descubra sua idade </h1>

            <form className='form' onSubmit={handleResult}>
                <label> Digite seu nome? </label>
                <input
                    placeholder='Digite seu nome...' 
                    className='input-text'
                    value={inputNome}
                    onChange={(e) => setInputNome(e.target.value)}
                />

                <label> Digite seu ano de nascimento? </label>
                <input
                    placeholder='Digite o ano de nascimento...' 
                    className='input-text'
                    value={inputNascimento}
                    onChange={(e) => setInputNascimento(e.target.value)}
                />

                <input 
                    type = 'submit' 
                    value= 'Descobrir idade'
                    className='button'
                />
            </form>

            <section>
                {usuario && (
                    <p className='text-result' > {usuario?.nome}, sua idade é: {usuario?.idade} anos </p>
                )}
            </section>
        </div>
    )
}

export default App
