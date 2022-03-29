import { useState } from "react"

function Votacao(props) {
    const [numero, setNumero] = useState(0);

    return(
        <>
            <h1>{props.title}</h1>
            <button onClick={() => setNumero(numero + 1)}>Votar</button>
            <h1>Quantidade votos: {numero} </h1>
        </>
    )
}

export default Votacao;