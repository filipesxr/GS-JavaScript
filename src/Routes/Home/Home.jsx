import './Home.scss';
import Header from "../../Components/Header/Header";
import { SiGoogleanalytics } from "react-icons/si";
import { ImAidKit } from "react-icons/im";
import { MdOutlineMoneyOff } from "react-icons/md";

export default function Home(){
    
    if(sessionStorage.getItem("token-user")){

        return(
            <>
                <div className='wrapper'>
                    <header className='main-header'>
                        <Header />
                    </header>

                    <section className='top-container'>
                        <header className='showcase'></header>

                        <div className='top-box-a'>
                            <h3>O que é a solução</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, commodi. Ea quis facilis voluptatibus maiores cum? Et optio recusandae assumenda!</p>
                        </div>

                        <div className='top-box-b'>
                            <h3>O que ela fará</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint architecto aspernatur? Rerum consectetur exercitationem, unde error excepturi sequi odit.</p>
                        </div>

                        <div className="info">
                            <h2>Prontuário Eletrônico Baseado em Medicina Preventiva</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit eaque odit sunt? Sapiente eum ad perferendis soluta? Soluta consectetur rem ex, voluptate aliquid velit exercitationem ipsum odio suscipit saepe possimus?</p>
                            <button className='btn'>Mais Informações</button>
                        </div>

                        <div className='top-box-c'>
                            <h3>Como funcionará</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint architecto aspernatur? Rerum consectetur exercitationem, unde error excepturi sequi odit.</p>
                        </div>
                    </section>

                    <section className="boxes">
                        <div className="box">
                            <SiGoogleanalytics className='icon' />
                            <h3>Aumento de casos bem sucedidos</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, dolorum.</p>
                        </div>

                        <div className="box">
                            <ImAidKit className='icon' />
                            <h3>Melhoria na saúde</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, dolorum.</p>
                        </div>

                        <div className="box">
                            <MdOutlineMoneyOff className='icon' />
                            <h3>Diminuição de gastos</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, dolorum.</p>
                        </div>
                    </section>

                    <footer>
                        Better Health &copy; 2023
                    </footer>
                </div>
            </>
        )
    }   
    
    return(
        <>
            <div className="block-container">
                <h1>Página Bloqueada</h1>

                <p>Sentimos muito! Você não tem acesso a essa página :(</p>
            </div>
        </>
    )
}
