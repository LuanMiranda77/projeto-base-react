import styled from "styled-components";

export const Container  = styled.div`
 //adicionar stylos

 //button-hover
 .btn {
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 220px;
  height: 60px;
  
  background-color: var(--light-theme);
  cursor: pointer;
  font-size: 24px;
  color: var(--color);
  transition: all 0.3s;
  position: relative;

  text-align: center;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 0 6px 30px -10px rgba(#CCCCCC, 1);
  
  &:hover {
    transform: translateX(5px) translateY(-7px);
  }
}


@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

