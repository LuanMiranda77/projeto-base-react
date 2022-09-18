import styled from "styled-components";

/** grid siglas
*Layout
*MH = MainHeader
*AS = Aside
*CT = Content
*/
export const Grid  = styled.div`

    display: grid;
    grid-template-columns: 200px auto;
    grid-template-rows: 50px auto;

    grid-template-areas:
    'AS MH'
    'AS CT';

    height: 100vh;



@media screen and (max-width: 40em) {
    //adicionar o stylo responsivo
}

`;

