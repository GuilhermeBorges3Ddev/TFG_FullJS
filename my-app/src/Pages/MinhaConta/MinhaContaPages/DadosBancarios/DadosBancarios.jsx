import React from 'react';
import {Desktop, Mobile} from '../../../../Layout/ResponsiveRender';
import { Row } from 'reactstrap';
import styled from 'styled-components';

import DadosBancariosBody from './DadosBancariosBody/DadosBancariosBody';
import DadosBancariosBodyMobile from './DadosBancariosBody/DadosBancariosBodyMobile';

const DadosBancariosStyled = styled.div`
  .dadosBancarioFinalBtn {
    margin-left: 0 !important;
  }
  .pl-0, .px-0 {
    padding-left: 0 !important;
  }
  .pr-0, .px-0 {
    padding-right: 0 !important;
  }
  .underline {
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    padding-bottom: 0 !important;
  }
`;

export default class DadosBancarios extends React.Component {
  render() {
    return (
      <DadosBancariosStyled>
        <Row className="d-flex w-100 responsiveFont14 ml-0 pt-3">
          <Desktop>
            <DadosBancariosBody /> 
          </Desktop>
          <Mobile>
            <DadosBancariosBodyMobile />
          </Mobile>
        </Row>
      </DadosBancariosStyled>
    );
  }
}