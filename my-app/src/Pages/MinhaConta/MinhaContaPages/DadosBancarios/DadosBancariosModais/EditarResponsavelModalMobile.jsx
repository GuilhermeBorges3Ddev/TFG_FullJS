import React from 'react';
import styled from 'styled-components';
import AccountIcon from 'mdi-react/AccountIcon';

import { 
  Button, Modal, ModalBody, ModalFooter,
  Form, Row, Col, Input 
} from 'reactstrap';

const EditarResponsavelModalMobileStyled = styled.div`
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

class EditarResponsavelModalMobile extends React.Component {
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
      <EditarResponsavelModalMobileStyled>
        <div>
          <Button className="btn btn-sm bg-darkBlue text-white text-center" onClick={this.toggle}>Editar Responsável Legal</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"} className="responsiveFont14">
            <ModalBody>
            <Form>

                  <Row className="mt-0 mb-3 pl-3">
                    <h6 className="text-dark font-weight-bold">
                      <AccountIcon className="mr-2" size={16} /> 
                      Dados do Representante
                    </h6>
                  </Row>

                  <Row>
                    <Col className="col-12">
                      <div>
                        Nome Completo * 
                        <Input className="underline mb-2" placeholder="Daniel Oliveira Santos" autofocus/>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-2">
                    <Col className="col-12">
                      <div>
                        CPF * 
                        <Input className="underline mb-2" placeholder="291.366.258-76" autofocus/>
                      </div>
                    </Col>
                    <Col className="col-12">
                      <div>
                        RG * 
                        <Input className="underline mb-2" placeholder="328513039" autofocus/>
                      </div>
                    </Col>
                  </Row>

            </Form> 
          </ModalBody>
          <ModalFooter>
              <Button className="btn btn-sm text-white" color="secondary" onClick={this.toggle}>Cancelar</Button>
              <Button className="btn btn-sm bg-darkBlue text-white" onClick={this.toggle}>Salvar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </EditarResponsavelModalMobileStyled>
    );
  }
}

export default EditarResponsavelModalMobile;