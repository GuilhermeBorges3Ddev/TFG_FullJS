import React from 'react';

import StoreIcon from 'mdi-react/StoreIcon';
import AccountIcon from 'mdi-react/AccountIcon';

import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, Row, Col, Input
} from 'reactstrap';

import './SubLojaModal.css';

class SubLojaModalMobileComBtn extends React.Component {
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
        <Button className="btn btn-sm bg-darkBlue text-white text-center" onClick={this.toggle}>Cadastrar Sub Loja</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size={"lg"} className="responsiveFont14">
          <ModalHeader className="pb-0" toggle={this.toggle}>
            <h5 className="text-dark font-weight-bold text-capitalize">
                cadastro de sub loja
            </h5>
          </ModalHeader>
          <ModalBody>
          <Form>
                <Row className="my-3 pl-3">
                  <h6 className="text-dark font-weight-bold">
                    <AccountIcon className="mr-2" size={16} />
                    Dados do Responsável
                  </h6>
                </Row>

                <Row>
                  <Col className="col-12">
                    <div className="wrapperName">
                      Nome Completo *
                      <Input className="inputName mb-2" placeholder="Vende Mais" type="text" autofocus/>
                    </div>
                  </Col>
                
                  <Col className="col-12">
                    <div>
                      Data de Nascimento *
                      <Input className="inputBorn mb-2" placeholder="09/05/1980" autofocus/>
                    </div>
                  </Col>
               
                  <Col className="col-12">
                    <div>
                      Gênero *
                      <select className="form-control inputGender mb-2" placeholder="Masculino" autofocus>
                        <option>Masculino</option>
                        <option>Feminino</option>
                      </select>
                    </div>
                  </Col>
                
                  <Col className="col-12">
                    <div>
                      E-mail *
                      <Input className="inputEmail mb-2" placeholder="loja@vmaisclub.com" autofocus/>
                    </div>
                  </Col>
         
                  <Col className="col-12">
                    <div>
                      Telefone *
                      <Input className="inputPhone mb-2" placeholder="(11) 2384-3777" autofocus/>
                    </div>
                  </Col>
                

             
               <Col className="col-12">
                    <div>
                      Cargo
                      <Input className="inputOffice mb-2" placeholder="COO (Chief Operating Officer)" autofocus/>
                    </div>
              </Col>
            

            
              <Col className="col-12">
                  <div>
                      CPF *
                      <Input className="inputCPF mb-2" placeholder="291.366.258-76" autofocus/>
                  </div>
             </Col>
          

          
            <Col className="col-12">
                  <div>
                    Celular
                    <Input className="inputCellPhone mb-2" placeholder="--" autofocus/>
                  </div>
            </Col>
            </Row>

        </Form>

          {/* Second form, about the enterprise */}

          <Form>
              <Row className="my-3 pl-3">
                <h6 className="text-dark font-weight-bold">
                  <StoreIcon className="mr-2" size={16} />
                  Dados da Empresa
                </h6>
              </Row>

              <Row>
                <Col className="col-12">
                    <div>
                      Razão Social *
                      <Input className="inputSocialReason mb-2" placeholder="Vende Mais Serviços de Tecnologia Ltda" type="text" autofocus/>
                    </div>
               </Col>
             </Row>

             <Row>
               <Col className="col-12">
                    <div>
                      Inscrição Municipal *
                      <Input className="inputCityIncription mb-2" placeholder="--" autofocus/>
                    </div>
              </Col>
            </Row>

            <Row>
              <Col className="col-12">
                    <div>
                      Segmento de Atuação *
                      <select className="form-control inputActionArea mb-2" placeholder="Informática e TI" autofocus>
                        <option>Selecione uma opção...</option>
                        <option>Alimentação</option>
                        <option>Arquitetura e Decoração</option>
                        <option>Comércio Exterior</option>
                        <option>Comunicação e Marketing</option>
                        <option>Construção, Limpeza e Conservação</option>
                        <option>Consultoria</option>
                        <option>Engenharia</option>
                        <option>Finanças e Seguros</option>
                        <option>Informática e TI</option>
                        <option>Representações</option>
                        <option>Alimentos e Bebidas</option>
                        <option>Agro/Indústria e Comércio</option>
                        <option>Artes e Artesanato</option>
                        <option>Artigos de Festas</option>
                        <option>Artigos de Natal</option>
                        <option>Áudio</option>
                        <option>Automação e Segurança</option>
                        <option>Automotivo</option>
                        <option>Bebidas</option>
                        <option>Bebês</option>
                        <option>Beleza e Saúde</option>
                        <option>Brinquedos</option>
                        <option>Cama Mesa e Banho</option>
                        <option>Casa e Jardim</option>
                        <option>CDs, DVDs e Blu-Ray</option>
                        <option>Construção, Limpeza e Conservação</option>
                        <option>Cine e Fotos</option>
                        <option>Climatização</option>
                        <option>Console e Games</option>
                        <option>Eletrodomésticos</option>
                        <option>Eletrônicos</option>
                        <option>Eletroportáteis</option>
                        <option>Embalagens</option>
                        <option>Esporte e Lazer</option>
                        <option>Fashion</option>
                        <option>Ferramentas</option>
                        <option>Flores</option>
                        <option>Fraldas e Higiene</option>
                        <option>Homecenter</option>
                        <option>Indústria,Comércio e Negócios</option>
                        <option>Instrumentos Musicais</option>
                        <option>Livros</option>
                        <option>Malas e Assessórios</option>
                        <option>Móveis</option>
                        <option>Multivarejo</option>
                        <option>Papelaria</option>
                        <option>Páscoa</option>
                        <option>Perfumaria</option>
                        <option>Pet Shop</option>
                        <option>Relógios e Presentes</option>
                        <option>Seguros e Serviços</option>
                        <option>Sinalização e Segurança</option>
                        <option>Supermercados</option>
                        <option>Suplementos e Vitaminas</option>
                        <option>Telefonia</option>
                        <option>Utilidades Domésticas</option>
                      </select>
                    </div>
                  </Col>
              </Row>

              <Row>
                <Col className="col-12">
                    <div>
                      Nome Fantasia *
                      <Input className="inputFantasyName mb-2" placeholder="Vende Mais" autofocus/>
                    </div>
               </Col>
            </Row>

            <Row>
              <Col className="col-12">
                    <div>
                      Inscrição Estadual *
                      <Input className="inputStateInscription mb-2" placeholder="141641882116" autofocus/>
                    </div>
              </Col>
            </Row>

            <Row>
              <Col className="col-12">
                    <div>
                      Site
                      <Input className="inputEmail mb-2" placeholder="www.vendemais.club" autofocus/>
                    </div>
              </Col>
            </Row>

            <Row>
              <Col className="col-12">
                    <div>
                      CNPJ *
                      <Input className="inputCNPJ mb-2" placeholder="24.925.861/0001-49" autofocus/>
                    </div>
             </Col>
           </Row>

           <Row>
             <Col className="col-12">
                    <div>
                      Regime de Tributos *
                      <select className="form-control inputActionArea mb-2" placeholder="Simples Nacional" autofocus>
                        <option>Selecione uma opção...</option>
                        <option>Lucro Real</option>
                        <option>Lucro Presumido</option>
                        <option>Simples Nacional</option>
                      </select>
                    </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
                    <div>
                      CEP *
                      <Input className="inputCEP" placeholder="01423-000" autofocus/>
                    </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 mb-2">
                    <div>
                      Endereço *
                      <Input className="inputAddress mb-2" placeholder="Rua José Maria Lisboa" autofocus/>
                    </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
                    <div>
                      Número *
                      <Input className="inputAddressNumber mb-2" placeholder="860" autofocus/>
                    </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 my-2">
                    <div>
                      Bairro *
                      <Input className="inputNeighborhood mb-2" placeholder="Jardim Paulista" autofocus/>
                    </div>
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
                    <div>
                      Complemento
                      <Input className="inputComplement mb-2" placeholder="cj. 31/32" autofocus/>
                    </div>
            </Col>
         </Row>

         <Row>
           <Col className="col-12">
                  <div>
                      Estado *
                      <Input className="inputState mb-2" placeholder="São Paulo" autofocus/>
                  </div>
           </Col>
        </Row>

        <Row>
          <Col className="col-12">
                    <div>
                      Cidade *
                      <Input className="inputCity mb-2" placeholder="São Paulo" autofocus/>
                    </div>
          </Col>
        </Row>
      </Form>
      </ModalBody>
      <ModalFooter>
            <Button className="btn btn-sm text-white text-capitalize" color="secondary" onClick={this.toggle}>cancelar</Button>
            <Button className="btn btn-sm bg-darkBlue text-white text-capitalize" onClick={this.toggle}>salvar</Button>{' '}
      </ModalFooter>
      </Modal>
    </div>
  );
  }
}

export default SubLojaModalMobileComBtn;
