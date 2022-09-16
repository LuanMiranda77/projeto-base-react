import styled from "styled-components";

export const Container  = styled.div`
    //adicionar stylos
    grid-area: AS;
    background:${props => props.theme.colors.black};

@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

