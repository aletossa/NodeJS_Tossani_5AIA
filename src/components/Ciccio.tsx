/*import { Fragment } from "react"*/

import '../components/Ciccio.css'
import { useState } from 'react'

interface PropsType{

    valore: number,
    nome: string

}

function Ciccio(props: PropsType){

    const name = "Bastox"
    
    const [contatore, setContatore] = useState(0)

    return(

        <>
            <h1>Ciao {props.valore} {props.nome}</h1>
            <button onClick={() => { setContatore(contatore+1)}}>Saluta Bastox {contatore}</button>
            </>
        
    )
}

export default Ciccio