import "./Login.scss";
import Logo from "../../Image/bh.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login(){
    const LogoAlt = 'Logo Better Health';

   // UseNavigate para redirecionar
   const navigate = useNavigate(); 

   // UseState para armazenar os dados do form
   const [usuario, setUsuario] = useState({
       email:"",
       senha:""
   })

   // Preenchimento do form
   const handleChange = (e) => {
       // Destructuring nos campos do form(name,input)
       const{name,value} = e.target;

       // Preenchendo o UseState com os valores da desestruturação, utilizando o operador spread.
       setUsuario({...usuario,[name]:value});
   }

   const handleSubmit = async (e) => {
       e.preventDefault();

       let users;

       try {
           const response = await fetch ("http://localhost:5000/usuarios");
           users = await response.json();
       } catch (error) {
           alert('Ocorreu um erro!');
       }

       // Realizando a validação do usuário
       for (let x = 0; x < users.length; x++) {
           const user = users[x];

           // Realizando a comparação
           if(user.email == usuario.email && user.senha == usuario.senha){
               alert('LogIn realizado!');

                //Criando a autenticação e o token do usuário
                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);
                
                //Criando o SessionStorage
                sessionStorage.setItem("token-user",tokenUser);

                //Adicionando os dados do Usuário na sessão:
                sessionStorage.setItem("data-user", JSON.stringify(user));

                // Redirecionando pra página Home
                navigate('/Home');
                return;
           }
       }
        // Else
        alert('LogIn ou senha incorretos!')
        setUsuario({
            email:"",
            senha:""
        })
   }

    return(
        <>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <fieldset className="form">
                        <header className="header-form">
                            <img src={Logo} alt={LogoAlt} />
                            <h1>Gerenciar sua Conta</h1>
                        </header>

                        <div className="email-form">
                            <label htmlFor=""><MdEmail /></label>
                            <input type="email" name="email" id="idEmail" placeholder="seuemail@gmail.com" value={usuario.email} onChange={handleChange} />
                        </div>

                        <div className="password-form">
                            <label htmlFor=""><RiLockPasswordFill /></label>
                            <input type="password" name="senha" id="idSenha" placeholder="********" value={usuario.senha} onChange={handleChange} />
                        </div>

                        <div className="button-form">
                        <button>ENTRAR</button> 
                        </div>

                        <div className="footer-form">
                            <small>Better Health &copy; 2023</small>
                        </div>   
                    </fieldset>
                </form>
            </div>
        </>
    )
}
