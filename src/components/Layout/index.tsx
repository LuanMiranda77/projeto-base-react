import React, { useContext } from 'react';
import { Grid } from './styles';
import {MainHeader} from '../MainHeader';
import {Aside} from '../Aside';
import {Content} from '../Content';
import {ThemeContext} from 'styled-components'

interface Props{
  //adicionar os props
  alterTheme():void;
  children: React.ReactNode;
}

export const Layout: React.FC <Props> = (props) => {
  const {colors, title} = useContext(ThemeContext);
  
  return <Grid >
            <MainHeader alterTheme={props.alterTheme}/>
            <Aside/>
            <Content>
                {props.children}
            </Content>
         </Grid>;
}