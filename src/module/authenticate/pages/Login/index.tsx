import React from "react";
import { Container } from "./styles";
import help_user from "../../../../helpers/hep_user.json";
import {Logo} from '../../../../components/Logo';
import {SizeLogo} from '../../../../types/enums/size-logo';
import {InputBase} from '../../../../components/InputBase';
import { ButtonBase } from "../../../../components/ButtonBase";

function Login() {
  const login = () =>{
    console.log("sim");
  }
  return (
    <Container >
      <div className="div-left">
        <div className="card-local">
        <h3><Logo size="LARGE"/>Bem vindo ao sistema</h3>
        <div style={{margin:"3rem"}}>
          <InputBase type="email" model="input_line" placeholder="" label="E-mail"></InputBase>
          <InputBase type="password" model="input_line" placeholder="" label="Senha"></InputBase>
          {/* <button type="button">Increva-se</button> */}
        </div>
        <div style={{width:"100%", textAlign:"center"}}>
          <ButtonBase label="ENTRAR" model="btn_base" className="black-color" size="small" onClick={login}/>
        </div>
        </div>
      </div>
      <div className="div-right">
        <Logo size={SizeLogo.MEDIUM}></Logo>
        <h1>Liberte-se</h1>
        <h2>Escolha seu melhor sistema</h2>
        <h2>Que vai te ajudar e gerenciar seu negocio</h2>
      </div>
    </Container>
  );
}

export default Login;
