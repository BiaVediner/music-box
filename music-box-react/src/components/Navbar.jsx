import logo from '../html-css-template/imagens/logo-verde.png'
import avatar from '../html-css-template/imagens/avatar.png'

export default function Navbar(props) {
    return(
        <>
            <nav>
                <div className="container">
                    <img src={logo} alt="Logo" className="logo" />
                    <img src={avatar} alt="Avatar" className="avatar" />
                </div>
            </nav>
        </>
    )
}