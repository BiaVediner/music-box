import ItemMusica from "../components/ItemMusica";
import Navbar from "../components/Navbar";

export default function Musica(props) {
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

                    <ItemMusica
                        musica="Get Jinxed"
                        artista="Imagine Dragons"
                        genero="Crazy"
                        ano={2022}
                        id="1"
                    />
                    <ItemMusica
                        musica="Get Jinxed"
                        artista="Imagine Dragons"
                        genero="Crazy"
                        ano={2022}
                        id="2"
                    />
                    <ItemMusica
                        musica="In the end"
                        artista="Linkin Park"
                        genero="Crazy"
                        ano={2022}
                        id="3"
                    />
                </div>
            </div>
        </>
    )
}