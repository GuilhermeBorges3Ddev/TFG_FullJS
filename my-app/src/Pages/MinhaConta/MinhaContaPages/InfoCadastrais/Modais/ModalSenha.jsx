import React from 'react';
import AccountIcon from 'mdi-react/AccountIcon';
import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, Row, Col, Input 
} from 'reactstrap';

import './ModalSenha.css';

class ModalSenha extends React.Component {
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
      <div>
        <Button className="btn btn-sm bg-darkBlue text-white" onClick={this.toggle}>Trocar Senha</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="responsiveFont14">
          <ModalHeader toggle={this.toggle}>
            <h6 className="text-dark">
                <AccountIcon className="mr-2" size={12} /> 
                TROCAR SENHA DE USUÁRIO
            </h6>
          </ModalHeader>
          <ModalBody>
            <Form>
              <Row>
                <Col className="col-12">
                  <div>
                    Senha Antiga * 
                    <Input className="inputOldPassword mb-2" type="password" name="password_old" autofocus/>
                  </div>
                  <div>
                    Nova Senha * 
                    <Input className="inputNewPassword mb-2" type="password" autofocus/>
                  </div>
                  <div>
                    Confirmar a Nova Senha * 
                    <Input className="inputConfirmNewPassword mb-2" type="password" autofocus/>
                  </div>
                </Col>
              </Row>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button className="btn btn-sm text-white text-capitalize" color="secondary" onClick={this.toggle}>cancelar</Button>
            <Button className="btn btn-sm bg-darkBlue text-capitalize text-white" onClick={this.toggle}>salvar</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalSenha;