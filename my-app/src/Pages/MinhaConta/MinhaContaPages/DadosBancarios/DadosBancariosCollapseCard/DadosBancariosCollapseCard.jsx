import React, { Component } from 'react'
import { Container } from 'reactstrap';
import styled from 'styled-components';

import * as auxDoc from './DadosBancariosAux/DadosBancariosAux.js';
import CollapseCard from '../../../../../Components/CollapseCard/CollapseCard';

const DadosBancariosCollapseCardStyled = styled.div`
    .dadosBancariosCard .btn:hover{
        color: white;
    }
    .dadosBancariosCard svg:hover{
        color: black !important;
    }
    .dadosBancariosCard .btn-solidGreen {
        color: #fff;
        background-color: var(--happyGreen) !important;
        border-color: green;
        cursor: auto !important;
    }
    .dadosBancariosCard .btn-oldRed {
        color: #fff;
        background-color: var(--oldRed) !important;
        border-color: red;
        cursor: auto !important;
    }
    .dadosBancariosCard .btn-upload {
        color: #fff;
        background-color: var(--darkBlue) !important;
        border-color: var(--deepDarkBlue); 
    }
    .dadosBancariosCard .btn-upload input[type=file] {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: 100%;
        margin: 0;
        padding: 0;
        cursor: pointer;
        opacity: 0;
    }
`;

export default class DadosBancariosCollapseCard extends Component {
  render() {
    let Visualization = auxDoc.hasVisualization(this.props.data.visualization);
    let dataDoc = auxDoc.hasData(this.props.data.dataDoc);
    let DocStatus= this.props.data.DocStatus === 1 ? {
        bgColorClass:'solidGreen'
      } : {
        bgColorClass:'oldRed'
    };
    
    return (
        <DadosBancariosCollapseCardStyled>
            <React.Fragment>
            <div className="w-100">
                <Container>
                    <CollapseCard
                    className="dadosBancariosCard mt-2 border"
                    headerContent={(
                        <div className="d-flex w-100 justify-content-between align-items-center py-1 pl-2">
                            <h6 className="m-0 pr-5">
                                <strong>{this.props.data.cardTitle}</strong>
                            </h6>
                            <div className="flexCenter pr-2">
                                {Visualization}
                                <button 
                                    className={`btn btn-sm btn-${DocStatus.bgColorClass} text-nowrap`}    
                                >
                                    {this.props.data.btnState}
                                </button>
                                {dataDoc}
                            </div>
                        </div>
                    )}
                    >
                        <div className="d-flex justify-content-between border py-2 px-2">
                            <div className="border w-75 py-2 pl-3 pr-4">
                                {this.props.data.docDescription}
                            </div>
                            <div className="flexCenter flex-wrap justify-content-end">
                                <div className="btn-upload btn btn-sm text-uppercase position-relative">
                                        {this.props.data.docSendResentBtn}
                                        <input type="file"/>
                                </div>
                            </div>
                        </div>
                    </CollapseCard>
                </Container>
            </div>
            </React.Fragment>
        </DadosBancariosCollapseCardStyled>
    )
  }
}
