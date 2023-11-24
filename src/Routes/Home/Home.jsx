import './Home.scss';
import Header from "../../Components/Header/Header";
import { VscAccount } from "react-icons/vsc";
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
                            <p>A solução é um Prontuário Eletrônico Baseado em Medicina Preventiva, uma plataforma inovadora desenvolvida para a HapVida. Esse sistema integrado utiliza da tecnologia para calcular, monitorar e prevenir riscos cardiovasculares em pacientes, promovendo uma abordagem proativa à saúde.</p>
                        </div>

                        <div className='top-box-b'>
                            <h3>O que ela fará</h3>
                            <p>A solução realizará o cálculo preciso do risco cardiovascular, considerando variáveis como histórico médico, estilo de vida e resultados de exames. Além disso, oferecerá um monitoramento contínuo das consultas, exames e tratamentos, gerando alertas automáticos para profissionais médicos em situações que demandem intervenções. A interface intuitiva proporcionará acesso fácil às informações para pacientes e profissionais, incentivando o engajamento ativo em práticas saudáveis.</p>
                        </div>

                        <div className="info">
                            <h2>Prontuário Eletrônico Baseado em Medicina Preventiva</h2>
                            <p>A solução é um Prontuário Eletrônico Baseado em Medicina Preventiva da HapVida, integrando tecnologia avançada para calcular riscos cardiovasculares, monitorar pacientes e promover a saúde proativa de forma intuitiva.</p>
                            <button className='btn'>Mais Informações</button>
                        </div>

                        <div className='top-box-c'>
                            <h3>Como funcionará</h3>
                            <p>A solução funcionará por meio de um algoritmo, o qual calculará o risco cardiovascular dos pacientes com base em dados específicos. Essas informações serão continuamente atualizadas através do monitoramento em tempo real das consultas e tratamentos. Profissionais médicos receberão alertas automáticos caso ocorram desvios no acompanhamento adequado dos pacientes. A interface intuitiva facilitará a interação, garantindo que pacientes e profissionais possam acessar facilmente informações relevantes para a promoção da saúde preventiva.</p>
                        </div>
                    </section>

                    <section className="boxes">
                        <div className="box">
                            <VscAccount className='icon' />
                            <h3>Fidelização de Clientes</h3>
                            <p>Ao proporcionar cuidado personalizado, prevenção ativa e fácil engajamento dos pacientes, a solução contribui para a fidelização dos clientes, fortalecendo a reputação da HapVida e atraindo novos beneficiários.</p>
                        </div>

                        <div className="box">
                            <ImAidKit className='icon' />
                            <h3>Eficiência Operacional</h3>
                            <p>A solução otimiza processos, melhorando a eficiência operacional da HapVida e da medicina ao integrar dados de saúde, agilizando o atendimento e facilitando o acompanhamento contínuo dos pacientes.</p>
                        </div>

                        <div className="box">
                            <MdOutlineMoneyOff className='icon' />
                            <h3>Reudção de Custos</h3>
                            <p>Reduz custos hospitalares ao prevenir complicações cardiovasculares, diminuindo a necessidade de tratamentos caros e hospitalizações.</p>
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
