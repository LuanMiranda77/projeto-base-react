import React, { useContext } from 'react';
import { Grid } from './styles';
import {MainHeader} from '../MainHeader';
import {Aside} from '../Aside';
import {Content} from '../Content';
import {ThemeContext} from 'styled-components'

interface Props{
  //adicionar os props
  alterTheme():void;
}

export const Layout: React.FC <Props> = ({alterTheme}) => {
  const {colors, title} = useContext(ThemeContext);
  
  return <Grid >
            <MainHeader alterTheme={alterTheme}/>
            <Aside/>
            <Content/>
         </Grid>;
}