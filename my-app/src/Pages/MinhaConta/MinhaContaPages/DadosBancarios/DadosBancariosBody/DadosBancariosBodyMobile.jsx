import React, { Component } from 'react'
import { Alert, Card, Col, Row } from 'reactstrap';

import AccountIcon from 'mdi-react/AccountIcon';
import AlertIcon from 'mdi-react/AlertIcon';
import StoreIcon from 'mdi-react/StoreIcon';

import DadosBancariosItens from '../DadosBancariosItens';
import DadosBancariosModalMobile from '../DadosBancariosModais/DadosBancariosModalMobile';
import EditarResponsavelModalMobile from '../DadosBancariosModais/EditarResponsavelModalMobile';
import DadosBancariosCollapseMobileCard from '../DadosBancariosCollapseCard/DadosBancariosCollapseMobileCard';

const DadosBancariosData = [
    [
      'Comprovante RG/CPF (Representante Legal)',
       0,
       0,
       0,
      'Aguardando Envio',
      'Faça o upload de uma cópia em uma folha única do RG e CPF do Representante Legal da empresa.',
      'enviar documento'
    ],
    [
      'Comprovante Bancário (Favorecido)',
       0,
       0,
       0,
      'Aguardando Envio',
      'Faça o upload da tela do Banco ou cópia do Cheque Empresarial contendo visivelmente as informações: Razão Social, CNPJ, Banco, Agência e Conta Corrente..',
      'enviar documento'    
    ]
  ]

export default class DadosBancariosBodyMobile extends Component {
  render() {
    return (
      <div>
        
            <Card className="d-flex align-items-center justify-content-center w-100">
                <Row>
                    <Col sm="12">
                        
                        <Row>
                            <Col sm="12" className="py-4 px-4">
                                <h6 className="text-dark font-weight-bold">
                                    <AccountIcon className="mr-2" /> 
                                    Dados Bancários do Favorecido
                                </h6>
                            </Col>
                            <Col sm="10">
                                <Alert className="text-justify ml-0 mx-3 pl-0 pb-3" color="warning">
                                    <h5 className="font-weight-bold"> 
                                    <AlertIcon className="ml-3 mr-1 mb-2" size={24} />
                                    Atenção!
                                    </h5>
                                    <div className="mb-4 ml-3">
                                    <strong className="text-justify">
                                        A conta bancária deve ser do CNPJ do cadastro da loja. 
                                        Se a conta for de outro CNPJ ou de pessoa física, não será possível o repasse.
                                    </strong>
                                    </div>
                                </Alert>
                            </Col>
                          </Row>

                          <Row className="d-flex w-100 align-items-center justify-content-center">
                            <Col sm="11" className="ml-4">
                              <Row>
                                <Col sm="12">
                                        <DadosBancariosItens itemTitle="Nome Completo" itemValue="Vende Mais" />
                                        <DadosBancariosItens itemTitle="Banco" itemValue="341 - BANCO ITAU S.A" />
                                        <DadosBancariosItens itemTitle="Agência" itemValue="2000" />
                                        <DadosBancariosItens itemTitle="Conta" itemValue="76847" />
                                </Col>
                                <Col md="12">
                                        <DadosBancariosItens itemTitle="CNPJ" itemValue="24.925.861/0001-49" />
                                        <DadosBancariosItens itemTitle="Tipo de Conta" itemValue="Conta Corrente" />
                                        <DadosBancariosItens itemTitle="Dígito" itemValue="9" />
                                </Col>
                              </Row>
                            </Col>
                          </Row>

                          <Row className="mt-4 p-0">
                            <Col className ="d-flex align-items-center justify-content-center pl-0">
                              <DadosBancariosModalMobile />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
            
                      <Row className="m-0 pt-2">
                          <Col sm="12" className="pt-4">
                              <h6 className="text-dark font-weight-bold mb-2">
                                  <StoreIcon className="mr-2" /> 
                                  Dados do Representante Legal
                              </h6>
                          </Col>

                          <Row className="d-flex w-100 align-items-center justify-content-center">
                            <Col sm="11" className="ml-4">
                              <Row>
                                <Col sm="12">
                                  <DadosBancariosItens itemTitle="Nome Completo" itemValue="Daniel Oliveira Santos" />
                                  <DadosBancariosItens itemTitle="CPF" itemValue="291.366.258-76" />
                                </Col>
                                <Col sm="12">
                                  <DadosBancariosItens itemTitle="RG" itemValue="328513039" />
                                </Col>
                              </Row>
                            </Col>
                          </Row> 
                          
                          <Row className="d-flex w-100 align-items-center justify-content-center mt-4 mx-auto">
                            <Col sm="12" className="d-flex w-100 align-items-center justify-content-center pl-0">
                              <EditarResponsavelModalMobile />
                            </Col>
                          </Row>
                        </Row>

                        <Row className="my-4">
                            <Col md="12" className="">
                                {Array(2).fill('').map((el,i)=>(
                                    <DadosBancariosCollapseMobileCard
                                        key={i} 
                                        data={{
                                            cardTitle: DadosBancariosData[i%2][0],
                                            visualization: DadosBancariosData[i%2][1],
                                            DocStatus: DadosBancariosData[i%2][2],
                                            dataDoc: DadosBancariosData[i%2][3],
                                            btnState: DadosBancariosData[i%2][4],
                                            docDescription: DadosBancariosData[i%2][5],
                                            docSendResentBtn: DadosBancariosData[i%2][6]
                                        }}
                                            onActivate={this.handleActivate}
                                            onInactivate={this.handleInactivate}
                                    />
                                ))}
                            </Col>
                        </Row>
                     </Card>
                
            </div>
    )
  }
}
