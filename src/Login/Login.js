import React from "react";
import "./Login.css"

export default function Login(props){

   function mostrarMensagem(){
       alert("O  nome do usuário e/ou senha está inválido.")
   }


    return(
        <>
            <form className="form">
                <div className="usuario">
                    <input type="texto" name="username" placeholder="Nome do usuário" />
                </div>
                <div className="senha">
                    <input type="password" name="senha" placeholder="Senha" />
                </div>
                <button className="botao" onClick={() => mostrarMensagem()}>LOGIN</button>
                <p className="esqueceu"> Esqueceu sua senha? 
                    <a target="_blank" href="http://google.com">Clique Aqui</a>
                </p>
                <p id="props">
                    {props.felicidade} {props.mensagem}
                </p>
            </form>
        </>
    );
}