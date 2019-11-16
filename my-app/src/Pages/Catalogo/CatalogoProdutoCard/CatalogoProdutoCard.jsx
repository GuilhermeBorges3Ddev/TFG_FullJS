import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import LinesEllipsis from 'react-lines-ellipsis'

const text="As frigideiras Wok’s são a escolha certa para quem gosta de elaborar pratos diferentes na cozinha. Recomendada para molhos, legumes salteados e massas. São versáteis e permitem preparar uma variedade<"
const title = "Wok Natural 28cm Roichen - Rev Cerâmico Wok Natural 28cm Roichen - Rev Cerâmico Wok Natural 28cm Roichen - Rev Cerâmico"

const CatalogoProdutoStyled = styled.div`
  .catalogoProdutoCard{
    max-width: 328px;
  }
  .catalogoProdutoCard .prodImg{
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    width:100%;
  }
  .catalogoProdutoCard .detailsButton{
    border-radius: 24px;
    border:1px solid white;
    font-weight: 600;
  }
  .catalogoProdutoCard .detailsButton:hover{
    border:1px solid var(--darkBlue);
    color:var(--darkBlue);
  }
  .text-darkBlue{
    color: #014c74;
  }
  .hover-scale:hover .hover-scale-noscale{
    transition: all 0;
    transform: scale(0.954);
  }
  .hover-scale:hover{
    transition: all 0.1s;
    transform: scale(1.05);
  }
  .bg-darkBlue{
    background-color: #014c74;
  }
`;

export default class CatalogoProduto extends Component {
  render() {
    return (
      <CatalogoProdutoStyled>
        <div className="catalogoProdutoCard rounded-lg shadow-sm overflow-hidden">
          <div className="prodImg" style={{backgroundImage:`url(${this.props.img})`}} />
          <div className="p-3">
            <h5 className="text-darkBlue">
              <LinesEllipsis
                text={title}
                maxLine={'2'}
              />
            </h5>
            <p className="">
              <LinesEllipsis
                text={text}
                maxLine={'3'}
              />
            </p>
            <div className="w-100 d-flex align-items-center ">
              <NavLink to="" className="btn detailsButton shadow-sm hover-scale text-white bg-darkBlue"><div className="hover-scale-noscale"><MagnifyIcon/>Ver Detalhes </div></NavLink>
            </div>
          </div>  
        </div>
      </CatalogoProdutoStyled>
    )
  }
}
