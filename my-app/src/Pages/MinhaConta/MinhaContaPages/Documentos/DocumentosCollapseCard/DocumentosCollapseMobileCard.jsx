import React, { Component } from 'react'
import {Row, Col } from 'reactstrap';
import styled from 'styled-components';

import * as auxDoc from './DocumentosAux/DocumentosAux.js';
import CollapseCard from '../../../../../Components/CollapseCard/CollapseCard';

const DocumentosCollapseMobileCardStyled = styled.div`
  .docDesc, .docTitle{
    text-align: justify;
    text-justify: inter-word;
    line-height: 1.4;
  }
  .sendBtn{
    margin-left: 0 !important;
  }
`;

export default class DocumentosCollapseMobileCard extends Component {
  render() {
    let Visualization = auxDoc.hasVisualization(this.props.data.visualization);
    let dataDoc = auxDoc.hasData(this.props.data.dataDoc);
    let DocStatus= this.props.data.DocStatus === 1 ? {
        bgColorClass:'solidGreen'
      } : {
        bgColorClass:'oldRed'
    };
    return (
        <DocumentosCollapseMobileCardStyled>
            <React.Fragment>
                <CollapseCard
                className="mt-2 border documentosCollapseCard"
                headerContent={(
                    <div className="d-flex w-100 justify-content-between align-items-center py-1 pl-2">
                        <h6 className="m-0">
                            <strong>{this.props.data.cardTitle}</strong>
                        </h6>
                    </div>
                )}
                >
                <Row className="d-flex align-items-center justify-content-center w-100 pb-3 pt-3 ml-0">
                    <Col sm="12" className="d-flex w-100 align-items-center justify-content-center">
                        {Visualization}
                        <button
                            className={`btn btn-sm btn-${DocStatus.bgColorClass}`}
                        >
                            {this.props.data.btnState}
                        </button>
                            <small className="date-btn">
                                {dataDoc}
                            </small>
                    </Col>
                </Row>

                        <Row className="docDesc m-0 p-0 flex-wrap w-100 px-3">
                            <Col sm="12" className="inlineFlexCenter rounded p-2 pr-1 border">
                                <small>
                                    <span>{this.props.data.docDescription}</span>
                                </small>
                            </Col>
                        </Row>

                        <Row className="d-flex sendBtn align-items-center justify-content-center text-center w-100 pt-3 pb-3">
                            <div className="btn-upload btn btn-sm text-capitalize position-relative">
                                {this.props.data.docSendResentBtn}
                                <input type="file"/>
                            </div>
                        </Row>
                    </CollapseCard>
                </React.Fragment>
            </DocumentosCollapseMobileCardStyled>
        );
    }
}
