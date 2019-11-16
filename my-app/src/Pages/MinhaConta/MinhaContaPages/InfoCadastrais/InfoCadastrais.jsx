import React from 'react';
import { Col, Card, Row } from 'reactstrap';
import AccountIcon from 'mdi-react/AccountIcon';
import StoreIcon from 'mdi-react/StoreIcon';

import ProfilePic from '../../../../img/profilePhoto.JPG';
import './InfoCadastrais.css'

import ModalResponsavel from './Modais/ModalResponsavel';
import ModalSenha from './Modais/ModalSenha';
import ModalLoja from './Modais/ModalLoja';
import InfoItensCadastrais from './InfoItensCadastrais';

export default class InfoCadastrais extends React.Component {
  render() {
    return (
      <Row className="responsiveFont14 ml-1">
        <Col>
          <Card>
            <Row>
              <Col sm="2" className="bg-light border"> 
                <Row className="bg-darkBlue py-5" />
                  <Col md="12" lg="12">
                      <img src={ProfilePic} className="img-thumbnail perfil" alt="profilePic_error"/>
                      <h5 className="d-flex justify-content-center mt-3 text-dark perfil-title">
                        <small>Vende Mais</small>
                      </h5>
                  </Col>
                  <hr className="perfil-separator"/>
              </Col>
              <Col sm="10">
                <Row>
                  <Col className="py-4 px-4">
                    <h6 className="text-dark">
                      <AccountIcon className="mr-2" /> 
                      Dados do Resposável
                    </h6>
                    <Row>
                      <Col sm="11" className="mx-auto">
                        <Row>
                          <Col sm="6">
                            <InfoItensCadastrais itemTitle="Nome Completo" itemValue="Vende Mais" />
                            <InfoItensCadastrais itemTitle="CPF" itemValue="291.366.258-76" />
                            <InfoItensCadastrais itemTitle="Telefone Comercial" itemValue="(11) 2384-3777" />
                            <InfoItensCadastrais itemTitle="Gênero" itemValue="Masculino" />
                          </Col>
                          <Col sm="6">
                            <InfoItensCadastrais itemTitle="E-mail" itemValue="loja@vmaisclub.com" />
                            <InfoItensCadastrais itemTitle="Data de Nascimento" itemValue="09/05/1980" />
                            <InfoItensCadastrais itemTitle="Celular" itemValue="--" />
                            <InfoItensCadastrais itemTitle="Cargo" itemValue="COO (Chief Operating Officer)" />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col>
                        <ModalResponsavel />
                      </Col>
                      <Col>
                        <ModalSenha />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                
                <Row className="m-0">
                  <Col className="py-4">
                    <h6 className="text-dark">
                      <StoreIcon className="mr-2" /> 
                      Dados da Loja
                    </h6>
                    <Row className="m-0">
                      <Col sm="11" className="mx-auto">
                        <Row>
                          <Col sm="6">
                            <InfoItensCadastrais itemTitle="Razão Social" itemValue="Vende Mais Serviços de Tecnologia Ltda" />
                            <InfoItensCadastrais itemTitle="CNPJ" itemValue="24.925.861/0001-49" />
                            <InfoItensCadastrais itemTitle="Regime de Tributação" itemValue="Simples Nacional" />
                            <InfoItensCadastrais itemTitle="Segmento de Atuação" itemValue="Informática e TI" />
                            <InfoItensCadastrais itemTitle="Endereço" itemValue="Rua José Maria Lisboa" />
                            <InfoItensCadastrais itemTitle="Número" itemValue="860" />
                            <InfoItensCadastrais itemTitle="Estado" itemValue="São Paulo" />
                            <InfoItensCadastrais itemTitle="Bairro" itemValue="Jardim Paulista" />
                          </Col>
                          <Col sm="6">
                            <InfoItensCadastrais itemTitle="Nome Fantasia" itemValue="Vende Mais" />
                            <InfoItensCadastrais itemTitle="Inscrição Estadual" itemValue="141641882116" />
                            <InfoItensCadastrais itemTitle="Inscrição Municipal" itemValue="--" />
                            <InfoItensCadastrais itemTitle="Site" itemValue="www.vendemais.club" />
                            <InfoItensCadastrais itemTitle="Complemento" itemValue="cj. 31/32" />
                            <InfoItensCadastrais itemTitle="Cidade" itemValue="São Paulo" />
                            <InfoItensCadastrais itemTitle="CEP" itemValue="01423-000" />
                          </Col>
                        </Row>
                      </Col>
                    </Row> 
                    <Row className="mt-5">
                      <Col>
                        <ModalLoja />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                
              </Col>
              
            </Row>
            
          </Card>
          
        </Col>
      </Row>
    );
  }
}