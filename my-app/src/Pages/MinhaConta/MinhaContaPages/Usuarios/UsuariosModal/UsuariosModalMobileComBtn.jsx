import React from 'react';
import AccountIcon from 'mdi-react/AccountIcon';
import '../Usuarios.css'

import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, Row, Col, Input 
} from 'reactstrap';

class UsuariosModalMobileComBtn extends React.Component {
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
        <Button className="btn btn-sm bg-darkBlue text-white text-center" onClick={this.toggle}>Cadastrar Usuário</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"} className="responsiveFont14">
          <ModalHeader toggle={this.toggle}>
            <h6 className="text-dark font-weight-bold">
                <AccountIcon className="mr-2" size={16} /> 
                Dados do Usuário
            </h6>
          </ModalHeader>
          <ModalBody>
            <Form>
                    <Row>
                        <Col className="col-12">
                            <div className="wrapperName">
                            Nome* 
                            <Input className="inputName mb-2" type="text" autofocus/>
                            </div>
                        </Col>
                        <Col className="col-12">
                            <div>
                            CPF* 
                            <Input className="inputCPF mb-2" autofocus/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12">
                            <div>
                            E-mail* 
                            <Input className="inputEmail mb-2" type="mail" autofocus/>
                            </div>
                        </Col>
                        <Col className="col-12">
                            <div>
                            Cargo* 
                            <Input className="inputWork mb-2" autofocus/>
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
    );
  }
}

export default UsuariosModalMobileComBtn;