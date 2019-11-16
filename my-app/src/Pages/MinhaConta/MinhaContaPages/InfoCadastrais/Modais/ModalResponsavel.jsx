import React from 'react';
import AccountIcon from 'mdi-react/AccountIcon';
import { 
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, Input, Row, Col 
} from 'reactstrap';
import './ModalResponsavel.css';

class ModalResponsavel extends React.Component {
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
        <Button className="btn btn-sm bg-darkBlue text-white" onClick={this.toggle}>Editar Responsavel</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"} className="responsiveFont14">
            <ModalHeader toggle={this.toggle}>
              <h6 className="text-dark">
                  <AccountIcon className="mr-2" size={12} /> 
                  DADOS DO RESPONSÁVEL
              </h6>
            </ModalHeader>
            <ModalBody>
              <Form>
                <Row>
                  <Col className="col-4">
                    <div className="wrapperName">
                      Nome Completo * 
                      <Input className="inputName mb-2" placeholder="Vende Mais" type="text" autofocus/>
                    </div>
                    <div>
                      Data de Nascimento * 
                      <Input className="inputBorn mb-2" placeholder="09/05/1980" autofocus/>
                    </div>
                    <div>
                      Gênero * 
                      <select className="form-control inputGender mb-2" placeholder="Masculino" autofocus>
                        <option>Masculino</option>
                        <option>Feminino</option>
                      </select>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div>
                      E-mail * 
                      <Input className="inputEmail mb-2" placeholder="loja@vmaisclub.com" autofocus/>
                    </div>
                    <div>
                      Telefone * 
                      <Input className="inputPhone mb-2" placeholder="(11) 2384-3777" autofocus/>
                    </div>
                    <div>
                      Cargo 
                      <Input className="inputOffice mb-2" placeholder="COO (Chief Operating Officer)" autofocus/>
                    </div>
                  </Col>
                  <Col className="col-4">
                    <div>
                      CPF * 
                      <Input className="inputCPF mb-2" placeholder="291.366.258-76" autofocus/>
                    </div>
                    <div>
                      Celular 
                      <Input className="inputCellPhone mb-2" placeholder="--" autofocus/>
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
    );
  }
}

export default ModalResponsavel;