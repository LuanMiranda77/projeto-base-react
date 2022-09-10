import React from 'react';
import { Container } from './styles';
import help_user from '../../../../helpers/hep_user.json'

function Login() {
  return <Container>
      <h1>Login {help_user.STATUS.ATIVO}</h1>
    </Container>
}

export default Login;