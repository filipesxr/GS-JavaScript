import './Header.scss';
import Logo from "../../Image/bh.png"
import { useNavigate, Link } from "react-router-dom";

export default function Header(){
    const LogoAlt = 'Logo Better Health';

    const navigate = useNavigate();

    const obJUser = JSON.parse(sessionStorage.getItem("data-user"));

    const handleLogout = () => {
        sessionStorage.removeItem("token-user");
        sessionStorage.removeItem("data-user");
        navigate("/");
    }

    return(
        <>
            <header className="header">
                <div className="logo-header">
                    <a><Link to="/"><img src={Logo} alt={LogoAlt} /></Link></a>
                </div>

                <div className="welcome-header">
                    <p>{obJUser != null ? `Seja Bem-vindo(a) ${obJUser.nome}`:""}</p>
                    <p>{obJUser != null ?  obJUser.email :""}</p>
                </div> 

                <div className='button-header'>
                    <button onClick={handleLogout} className={sessionStorage.getItem("token-user") ? "button-logou":"button"}>SAIR</button>
                </div>
            </header>
        </>
    )
}
