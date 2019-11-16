import React, { Component } from 'react'
import './InfoCadastrais.css';
import ProfilePic from '../../../../img/profilePhoto.JPG';

import { Col, Card, Row } from 'reactstrap';
import AccountIcon from 'mdi-react/AccountIcon';
import StoreIcon from 'mdi-react/StoreIcon';

import ModalSenha from './Modais/ModalSenha';
import InfoItensCadastrais from './InfoItensCadastrais';

import ModalLojaMobile from './Modais/ModalLojaMobile';
import ModalResponsavelMobile from './Modais/ModalResponsavelMobile';

export default class InfoCadastraisMobile extends Component {
    render() {
      return (
        
        <React.Fragment>

          <Card className="responsiveFont16 mx-2">

            <Row className="mx-0">
              <Col sm="10" className="bg-light border"> 
                <Row className="bg-darkBlue py-5" />
                  <Col sm="10">
                   
                      <div className="w-100 flexCenter">
                        <img src={ProfilePic} className="img-thumbnail perfil" alt="profilePic_error"/>
                      </div>
                      <h5 className="d-flex justify-content-center mt-4 text-dark perfil-title">
                        <small>Vende Mais</small>
                      </h5>
                  
                  </Col>
                  <hr className="perfil-separator mb-0"/>
              </Col>
            </Row>
          </Card>


          <Card className="responsiveFont16 mt-3 mx-2">
            <Row className="mx-2 pt-2">
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
                    <Row className="d-flex justify-content-between w-100 mt-4 mx-0"> 
                        <ModalResponsavelMobile className="text-nowrap"/>
                        <ModalSenha className="text-nowrap" />
                    </Row>
                  </Col>
                </Row>
                </Col>
              </Row>
            </Card>
              
            <Card className="responsiveFont16 mt-3 mx-2">
              <Row>
                <Row className="m-0">
                  <Col className="py-4 px-4">
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
                    <Row className="mt-4">
                      <Col className="ml-3">
                        <ModalLojaMobile />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Card>

          
      
      </React.Fragment>
      );
    }
}