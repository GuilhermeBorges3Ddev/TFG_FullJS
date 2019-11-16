import React, { Component } from 'react'
import { Container } from 'reactstrap';
import styled from 'styled-components';

import * as auxDoc from './DocumentosAux/DocumentosAux.js';
import CollapseCard from '../../../../../Components/CollapseCard/CollapseCard';

const DocumentosCollapseCardStyled = styled.div`
    .documentosCollapseCard .btn-solidGreen {
        color: #fff;
        background-color: var(--happyGreen) !important;
        border-color: green;
        cursor: auto !important;
    }
    .documentosCollapseCard .btn-oldRed {
        color: #fff;
        background-color: var(--oldRed) !important;
        border-color: red;
        cursor: auto !important;
    }
    .documentosCollapseCard .btn-upload {
        color: #fff;
        background-color: var(--darkBlue) !important;
        border-color: var(--deepDarkBlue); 
    }
    .documentosCollapseCard .btn-upload input[type=file] {
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

export default class DocumentosCollapseCard extends Component {
  render() {
    let Visualization = auxDoc.hasVisualization(this.props.data.visualization);
    let dataDoc = auxDoc.hasData(this.props.data.dataDoc);
    let DocStatus= this.props.data.DocStatus === 1 ? {
        bgColorClass:'solidGreen'
      } : {
        bgColorClass:'oldRed'
    };
    
    return (
        <DocumentosCollapseCardStyled>
            <React.Fragment>
                <Container className="px-1">
                    <CollapseCard
                    className="mt-2 border documentosCollapseCard"
                    headerContent={(
                        <div className="d-flex w-100 justify-content-between align-items-center py-1 pl-2">
                            <h6 className="m-0 pr-5">
                                <strong>{this.props.data.cardTitle}</strong>
                            </h6>
                            <div className="flexCenter pr-2">
                                {Visualization}
                                <button 
                                    className={`documentosCollapseCard btn btn-sm btn-${DocStatus.bgColorClass} text-nowrap`}    
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
                                <div className="documentosCollapseCard btn-upload btn btn-sm text-uppercase position-relative">
                                        {this.props.data.docSendResentBtn}
                                        <input type="file"/>
                                </div>
                                <div className="pb-1">
                                    <sub><i>*Enviar arquivos até 4MB em formato .PDF</i></sub>
                                </div>
                            </div>
                        </div>
                    </CollapseCard>
                </Container>
            </React.Fragment>
        </DocumentosCollapseCardStyled>
    )
  }
}
//{this.props.data.docSendResentBtn}