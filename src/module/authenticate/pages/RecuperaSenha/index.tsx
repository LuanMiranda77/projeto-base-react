import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styles";
import { Logo, InputBase, ButtonBase } from "../../../../components";

/**
 *@Author
 *@Issue
 */

function RecuperaSenha() {
  return (
    <Container>
      <div className="card-local flex justify-center text-center">
        <div className="">
          <Logo size="MEDIUM" />
          <br />
          <label htmlFor="" className="text-gray-400 font-bold text-sm text-xl">
            Esqueceu a senha?
          </label>
          <br />
          <small className="p-4 text-gray-400 text-sm text-xl">
            Para recuperar seu acesso preencha o campo com o e-mail cadastrado
            em sua conta do nosso app.
          </small>
          <div>
            <InputBase type="email" label="E-mail" model="input_line" />
            <ButtonBase
              model="btn_base"
              label="Recuperar senha"
              className="black-color my-5"
              size="small"
            />
          </div>
          <div>
            <small className="p-4 text-gray-400 text-sm text-xl">
              Caso não tenha acesso ao e-mail cadastrado por favor entre em
              contato com o nosso Atendimento.
            </small>
          </div>
        </div>
      </div>
    </Container>
  );
}
export default RecuperaSenha;
