import React from 'react';
import { Container } from './styles';
interface Props{
  //adicionar os props
  alterTheme():void;
}

export const MainHeader: React.FC<Props> = ({alterTheme}) => {
  
  return <Container>
              <h1>MH</h1>
            <button onClick={alterTheme} >SetTema</button>
         </Container>;
}