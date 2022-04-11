import { useEffect, useState } from "react";
import ItemMusica from "../components/ItemMusica";
import Navbar from "../components/Navbar";
import api from "../api"


export default function Musica(props) {
    const [musicas, setMusicas] = useState([]);

    useEffect(() => {
        api.get().then((res) => {
            console.log(res.data)
            setMusicas(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">
                    {
                        musicas.map(music => (
                            <ItemMusica
                                key={music.id}
                                musica={music.musica}
                                artista={music.artista}
                                genero={music.categoria}
                                ano={music.ano}
                                id={music.id}
                            />
                        ))
                    }
                    
                </div>
            </div>
        </>
    )
}