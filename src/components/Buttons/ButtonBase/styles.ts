import styled from "styled-components";

export const Container  = styled.div`
 //adicionar stylos
  .primary-color{
      background-color: var(--primary);
      border: 2px solid var(--primary);
  }
  .secondary-color{
      background-color: var(--secondary);
      border: 2px solid var(--secondary);
  }
  .basic-color{
      background-color: var(--basic-color);
      border: 2px solid var(--basic-color);
  }
  .green-color{
      background-color: var(--green);
      border: 2px solid var(--green);
  }
  .red-color{
      background-color: var(--red);
      border: 2px solid var(--red);
  }
  .blue-color{
      background-color: var(--blue);
      border: 2px solid var(--blue);
  }
  .black-color{
      background-color: var(--black);
      border: 2px solid var(--black);
  }

  .large{
    width: 100%;
  }
  .medium{
    width: 75%;
  }
  .small{
    width: 50%;
  }
  .mini{
    width: 25%;
  }

 //button-hover
 .btn_base {
  height: var(--max-height-button);
  /* background-color: var(--primary); */
  cursor: pointer;
  color: var(--white);
  transition: all 0.3s;
  position: relative;
  font-weight: bold;

  text-align: center;
  overflow: hidden;

  border-radius: 5px;
  box-shadow: 0 6px 30px -10px rgba(#CCCCCC, 1);
  
  &:hover {
    transform: translateX(5px) translateY(-7px);
    opacity : 0.8;
  }
}

.btn_line{
  background-color: transparent;
  color: var(--text-label);
  /* border: 2px solid #4CAF50; */
  border-radius: 2px; 
  height: var(--max-height-button);
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
  &:hover {
    transform: translateX(2px) translateY(-3px);
    box-shadow: 0px 8px 16px 0 rgba(0,0,0,0.5);
  }
}


/* CSS */
.btn_super {
  height: var(--max-height-button);
  border: 10;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  padding: 3px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  &:hover{
    outline: 0;
    background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
            label {
    background: none;
  }
  }
}

@media (min-width: 768px) {
  
}

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
  .btn_super {
    font-size: 24px;
    min-width: 196px;
  }
}

`;

