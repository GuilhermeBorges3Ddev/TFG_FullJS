import React, { Component } from 'react'
import { Container } from 'reactstrap';
import CogsIcon from "mdi-react/CogsIcon";
import './ConfiguracoesCollapseCard.css';

import * as auxConf from './ConfiguracoesAux/ConfiguracoesAux.js';
import CollapseCard from '../../../../../Components/CollapseCard/CollapseCard';

export default class ConfiguracoesCollapseCard extends Component {
  render() {
    let base = auxConf.hasBase(this.props.data.base);
    let frete = auxConf.hasFrete(this.props.data.frete);
    let callback = auxConf.hasCallback(this.props.data.callback);
    let estoque = auxConf.hasEstoque(this.props.data.estoque);
    return (
        <React.Fragment>
            <div className="w-100">
                <Container>
                    <CollapseCard
                    className="configuracoesCard mt-2 border"
                    headerContent={(
                        <div className="d-flex w-100 justify-content-between align-items-center py-1 pl-2">
                            <div className="m-0 pr-5">
                                <CogsIcon className="mr-2" />
                                <small className="font-weight-bold">{this.props.data.cardTitle}</small>
                            </div>
                        </div>
                    )}
                    >
                        <div className="d-flex justify-content-between border py-2 px-2">
                            <div className="border w-100 py-2 pl-3 pr-4">
                                <small>
                                    <b>{base}</b><span>{this.props.data.baseDescription}</span>
                                    <b>{callback}</b><span>{this.props.data.callbackDescription}</span>
                                    <b>{estoque}</b><span>{this.props.data.estoqueDescription}</span>
                                    <b>{frete}</b><span>{this.props.data.freteDescription}</span>
                                </small>
                            </div>
                        </div>
                    </CollapseCard>
                </Container>
            </div>
        </React.Fragment>
    )
  }
}
