import React, { Component, Suspense } from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
import {Desktop, Mobile} from '../../Layout/ResponsiveRender';
import styled from 'styled-components';

import InfoCadastrais from './MinhaContaPages/InfoCadastrais/InfoCadastrais';
import InfoCadastraisMobile from './MinhaContaPages/InfoCadastrais/InfoCadastraisMobile';
import SubLojas from './MinhaContaPages/SubLojas/SubLojas';
import Documentos from './MinhaContaPages/Documentos/Documentos';
import DadosBancarios from './MinhaContaPages/DadosBancarios/DadosBancarios';
import Usuarios from './MinhaContaPages/Usuarios/Usuarios';
import Configuracoes from './MinhaContaPages/Configuracoes/Configuracoes';

const LazyRoute = (props)=>(
  <Route 
      path={props.path} 
      render={()=>(
          <Suspense fallback={<div>Carregando..</div>}>{props.children}</Suspense>
      )} 
  />
);

const MinhaContaStyled = styled.div`
  account {
    display: flex;
    width: 100% !important;
    font-family: 'Nunito', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 0.02vw; */
  }
`;

  export default class MinhaConta extends Component {
      render() {
        return (
          <MinhaContaStyled>
            <div className="d-flex w-100 responsiveFont16">
              <Switch>

                <LazyRoute path='/conta/info-cadastrais'>
                  <Desktop>    
                    
                      <div className="mt-1">
                        
                        <InfoCadastrais />
                      </div>
                      
                  </Desktop> 
                  <Mobile>
                    <div className="container mt-2 px-0 ">
                        <InfoCadastraisMobile />
                    </div>
                  </Mobile>
                </LazyRoute> 

                <Route path='/conta/sub-lojas' component={SubLojas} />
                <Route path='/conta/documentos' component={Documentos} />
                <Route path='/conta/dados-bancarios' component={DadosBancarios} />
                <Route path='/conta/usuarios' component={Usuarios} />  
                <Route path='/conta/configuracoes' component={Configuracoes} />      
                <Redirect to='/conta/info-cadastrais' />
                
              </Switch>
              
            </div>
          </MinhaContaStyled>
        );
    }
  }
