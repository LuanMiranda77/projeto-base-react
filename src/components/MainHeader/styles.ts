import styled from "styled-components";

export const Container  = styled.div`

    //adicionar stylos
    grid-area: MH;
    background:${props =>props.theme.colors.primary};
    display: flex;
    align-items: center ;
    justify-content: space-between;
    text-align: right;
    padding: 0.9rem;
    border-bottom: 1px solid ${props =>props.theme.colors.gray};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

