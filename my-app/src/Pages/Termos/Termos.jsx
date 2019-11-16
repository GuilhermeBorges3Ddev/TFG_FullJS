import React, { Component } from 'react'
import styled from 'styled-components';
import termosPdf from '../../assets/TERMO_DE_USO_VENDEMAIS.pdf'

const TermosStyled = styled.div`
  .termos object{
    width: 100% !important;
    height: calc(100vh - var(--navHeight) - 1.5rem);
  }
`;

export default class Termos extends Component {
  render() {
    return (
      <TermosStyled className="d-flex w-100">
        <div className="termos w-100 d-flex">
          <div className="container">
              <object data={termosPdf} type="application/pdf" internalinstanceid="6">
                      Termos de Uso: <a href={termosPdf} target="_blank" rel="noopener noreferrer">Termos.pdf</a>
              </object>
          </div>        
        </div>
      </TermosStyled>
    )
  }
}
