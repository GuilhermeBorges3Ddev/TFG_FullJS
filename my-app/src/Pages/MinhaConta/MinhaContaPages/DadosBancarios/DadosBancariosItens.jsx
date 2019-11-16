import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class DadosBancariosItens extends Component {
  render() {
    return (     
      <Row className="mt-3">
        <Col sm="6">
           <b>{this.props.itemTitle}</b>
        </Col>
        <Col sm="6">
           {this.props.itemValue}
        </Col>
      </Row>
    );
  }
}

export default DadosBancariosItens;
