import React from 'react';
import AccountIcon from 'mdi-react/AccountIcon';
import styled from 'styled-components';
import { 
  Button, Modal, ModalBody, ModalFooter,
  Form, Row, Col, Input 
} from 'reactstrap';

const DadosBancariosModalStyled = styled.div`
  input.inputSocialReason.mb-2.form-control,
  input.inputCityIncription.mb-2.form-control,
  .inputActionArea.mb-2.form-control,
  input.inputFantasyName.mb-2.form-control,
  input.inputStateInscription.mb-2.form-control,
  input.inputCNPJ.mb-2.form-control,
  input.inputCEP.form-control,
  input.inputAddress.mb-2.form-control,
  input.inputAddressNumber.mb-2.form-control,
  input.inputNeighborhood.mb-2.form-control,
  input.inputComplement.mb-2.form-control,
  input.inputState.mb-2.form-control,
  input.inputCity.mb-2.form-control{
      padding: 0 !important;
      box-shadow: 0 0 0 0;
      border: none !important;
      outline: none !important;
      background: linear-gradient(to left, lightgray, lightgray) 1px calc(100% - 5px)/calc(100% - 10px) 2px no-repeat
  }
  /* Centralize modal */
  .modal {
      text-align: center;
    }
  @media screen and (min-width: 768px) { 
      .modal:before {
        display: inline-block;
        vertical-align: middle;
        content: " ";
        height: 100%;
      }
    }
    .modal-dialog {
      display: inline-block;
      text-align: left;
      vertical-align: middle;
    }
`;

class DadosBancariosModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <DadosBancariosModalStyled>
        <div>
          <Button className="btn btn-sm bg-darkBlue text-white text-center" onClick={this.toggle}>Editar Dados Bancários</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"} className="responsiveFont14">
            <ModalBody>
            <Form>

                  <Row className="mt-0 mb-3 pl-3">
                    <h6 className="text-dark font-weight-bold">
                      <AccountIcon className="mr-2" size={16} /> 
                      Dados Bancários
                    </h6>
                  </Row>

                  <Row>
                    <Col className="col-8">
                      <div>
                          Banco *
                          <select className="form-control inputActionArea mb-2" autofocus>
                            <option>341 - BANCO ITAU S.A</option>
                            <option>001 - BANCO DO BRASIL S/A</option>
                            <option>002 - BANCO CENTRAL DO BRASIL</option>
                            <option>003 - BANCO DA AMAZONIA S.A</option>
                            <option>004 - BANCO DO NORDESTE DO BRASIL S.A</option>
                            <option>007 - BANCO NAC DESENV. ECO. SOCIAL S.A</option>
                            <option>008 - BANCO MERIDIONAL DO BRASIL</option>
                            <option>020 - BANCO DO ESTADO DE ALAGOAS S.A</option>
                            <option>021 - BANCO DO ESTADO DO ESPIRITO SANTO S.A</option>
                            <option>022 - BANCO DE CREDITO REAL DE MINAS GERAIS SA</option>
                            <option>024 - BANCO DO ESTADO DE PERNAMBUCO</option>
                            <option>025 - BANCO ALFA S/A</option>
                            <option>026 - BANCO DO ESTADO DO ACRE S.A</option>
                            <option>027 - BANCO DO ESTADO DE SANTA CATARINA S.A</option>
                            <option>028 - BANCO DO ESTADO DA BAHIA S.A</option>
                            <option>029 - BANCO DO ESTADO DO RIO DE JANEIRO S.A</option>
                            <option>030 - BANCO DO ESTADO DA PARAIBA S.A</option>
                            <option>031 - BANCO DO ESTADO DE GOIAS S.A</option>
                            <option>032 - BANCO DO ESTADO DO MATO GROSSO S.A</option>
                            <option>033 - BANCO DO ESTADO DE SAO PAULO S.A</option>
                            <option>034 - BANCO DO ESTADO DO AMAZONAS S.A</option>
                            <option>035 - BANCO DO ESTADO DO CEARA S.A</option>
                          </select>
                        </div>
                    </Col>
                    <Col className="col-4">
                      <div>
                        Tipo de Conta *
                        <select className="form-control inputActionArea mb-2" autofocus>
                          <option>Conta Corrente</option>
                          <option>Conta Poupança</option>
                          <option>Conta Salário</option>
                          <option>Conta Mista</option>
                          <option>Conta Conjunta</option>
                        </select>
                      </div>
                    </Col> 
                  </Row>

                  <Row>
                    <Col className="col-4">
                      <div>
                        Agência * 
                        <Input className="underline mb-2 mt-2" placeholder="2000" autofocus/>
                      </div>
                    </Col>
                    <Col className="col-2">
                      <div>
                        Dígito * 
                        <Input className="underline mb-2 mt-2" placeholder="0" autofocus/>
                      </div>
                    </Col>
                    <Col className="col-4">
                      <div>
                        Conta * 
                        <Input className="underline mb-2 mt-2" placeholder="76847" autofocus/>
                      </div>
                    </Col>
                    <Col className="col-2">
                      <div>
                        Dígito * 
                        <Input className="underline mb-2 mt-2" placeholder="9" autofocus/>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col className="col-8">
                      <div>
                        Nome do Favorecido * 
                        <Input className="underline mb-2 mt-2" placeholder="Vende Mais" autofocus/>
                      </div>
                    </Col>
                    <Col className="col-4">
                      <div>
                        CNPJ 
                        <Input className="underline mb-2 mt-2" placeholder="24.925.861/0001-49" autofocus/>
                      </div>
                    </Col>
                  </Row>

            </Form> 
          </ModalBody>
          <ModalFooter>
              <Button className="btn btn-sm text-white" color="secondary" onClick={this.toggle}>CANCELAR</Button>
              <Button className="btn btn-sm bg-darkBlue text-white" onClick={this.toggle}>SALVAR</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </DadosBancariosModalStyled>
    );
  }
}

export default DadosBancariosModal;