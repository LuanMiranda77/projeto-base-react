import React,  { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  //adicionar os props
  label:string;
  model:string;

}

export const ButtonBase: React.FC< ButtonBaseProps> = (props) => {
  return <Container>
            <button id={props.label} name={props.label} className={props.model+" "+props.className}>{props.label}</button>
         </Container>;
}