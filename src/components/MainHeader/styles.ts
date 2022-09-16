import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    grid-area: MH;
    background:${props =>props.theme.colors.secondary} ;

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

