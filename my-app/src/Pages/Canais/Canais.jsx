import React, { Component } from 'react'
import styled from 'styled-components';
import Canal from './Canal/Canal';
import b2w from './Data/b2w';
import viavarejo from './Data/viavarejo';

const CanaisStyled = styled.div`
  .canais .canal{
    margin-bottom: .5rem;
  }
  .canais .canal:last-child{
    margin-bottom: 0;
  }
`;

export default class Canais extends Component {
  render() {
    return (
      <CanaisStyled>
        <div className="canais d-flex justify-content-center flex-wrap w-100 text-muted">
          <div className="container">
            <Canal data={b2w}/>
            <Canal data={viavarejo}/>
          </div>
        </div>
      </CanaisStyled>
    )
  }
}
