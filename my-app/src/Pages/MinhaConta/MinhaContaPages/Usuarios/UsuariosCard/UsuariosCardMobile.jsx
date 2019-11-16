import React, { Component } from 'react'
import ActionButtons from '../../../../../Components/ActionButtons/ActionButtons';
import './UsuariosCard.css';

import { Container, Row } from 'reactstrap';

export default class UsuariosCard extends Component {
  render() {
    return (  
        <Container className="bg-white container-card mb-3 mx-2 w-100">
            <Row>
                <div className="d-flex w-100 justify-content-between text-nowrap mt-2">
                    <span className="mt-2 ml-2">
                        <span className="font-weight-bold mr-2">Nome:</span>
                        {this.props.data.userName}
                    </span>
                    <span> 
                        <ActionButtons 
                            edit = {this.props.data.userAction === 2}
                            delete = {this.props.data.userAction === 1}
                        />
                    </span> 
                </div>
            </Row>
            <Row>
                <div className="d-flex w-100 text-nowrap ml-2 my-3">
                    <span className="font-weight-bold mr-2">Email:</span>
                    <span>{this.props.data.userMail}</span>
                </div> 
            </Row>
            <Row>    
                <div className="d-flex w-100 text-nowrap ml-2 mb-3">
                    <span className="font-weight-bold mr-2">Ocupação:</span>
                    <span>{this.props.data.userOcupation}</span>
                </div>
            </Row>
            <Row>
                <div className="d-flex w-100 ml-2 mb-2">
                    <span className="font-weight-bold mr-2">CPF:</span>
                    <span>{this.props.data.userCPF}</span>
                </div>
            </Row>
        </Container>      
    )
  }
}
