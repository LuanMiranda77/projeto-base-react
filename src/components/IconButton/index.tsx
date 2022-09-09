import React from 'react';
import { Container } from './styles';
import { FaBeer } from 'react-icons/fa';
import { AiFillEye } from "react-icons/ai";

interface IconButtonProps{
  icon:string,
}

export const IconButton: React.FC< IconButtonProps> = (porps) => {
  const setIcon=()=>{
    if(porps.icon === 'beer'){
      return <FaBeer />
    }else{
      return <AiFillEye />
    }
  };
  return <Container>
           {setIcon()}
         </Container>;
}