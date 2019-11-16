import React, { Component } from 'react';
import styled from 'styled-components';
import ActionButtons from '../../../../Components/ActionButtons/ActionButtons';
import DateDisplay from '../../../../Components/DateDisplay/DateDisplay';
import SendStatus from '../../../../Components/SendStatus/SendStatus';

const EnviosPlpsCardStyled = styled.tbody`
  .plpsCard.sendOrderWhite {
    background-color: #ffffff !important;
  }
  .plpsCard .sendOrderWhite {
    background-color: #ffffff !important;
  }
  .plpsCard td, th {
    border: 0px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  div.plpsCard{
    border-radius:8px
  }
  .plpsCard .textBtn{
    font-size: 12px;
  }
  div.statusBorder-midOrange, tr.statusBorder-midOrange td:first-child {
    border-left: 3px solid var(--midOrange);
  }
  div.statusBorder-mustard, tr.statusBorder-mustard td:first-child {
      border-left: 3px solid var(--mustard);
  }
  div.statusBorder-lightGreen, tr.statusBorder-lightGreen td:first-child {
      border-left: 3px solid var(--lightGreen);
  }
  div.statusBorder-happyGreen, tr.statusBorder-happyGreen td:first-child {
      border-left: 3px solid var(--happyGreen);
  }
  div.statusBorder-oldRed, tr.statusBorder-oldRed td:first-child {
      border-left: 3px solid var(--oldRed);
  }
  div.statusBorder-pastelGray, tr.statusBorder-pastelGray td:first-child {
      border-left: 3px solid var(--pastelGray);
  }
  div.statusBorder-darkBlue, tr.statusBorder-darkBlue td:first-child {
      border-left: 3px solid var(--darkBlue);
  }
  div.statusBorder-deepDarkBlue, tr.statusBorder-deepDarkBlue td:first-child {
      border-left: 3px solid var(--deepDarkBlue);
  }
  div.statusBorder-info, tr.statusBorder-info td:first-child {
      border-left: 3px solid var(--info);
  }
  div.statusBorder-orange, tr.statusBorder-orange td:first-child {
      border-left: 3px solid var(--orange);
  }
  div.statusBorder-orange, tr.statusBorder-orange td:first-child {
      border-left: 3px solid var(--orange);
  }
  div.statusBorder-dark, tr.statusBorder-dark td:first-child {
      border-left: 3px solid var(--dark);
  }
  div.statusBorder-secondary, tr.statusBorder-secondary td:first-child {
      border-left: 3px solid var(--secondary);
  }
  div.statusBorder-inactive, tr.statusBorder-inactive td:first-child {
      border-left: 3px solid var(--inactive);
  }
  div.statusBorder-solidGreen, tr.statusBorder-solidGreen td:first-child {
      border-left: 3px solid var(--solidGreen);
  }
`;

export default class EnviosPlpsCard extends Component {
  render() {
    let status= this.props.data.status === 1 ? {
      label:'Aguardando Envio',
      bgColorClass:'mustard'
    } : {
      label:'Enviado',
      bgColorClass:'solidGreen'
    }
    return (
      <React.Fragment className="w-100">
        <EnviosPlpsCardStyled className="responsiveFont14 w-100 mt-1"> 
          <tr className={`plpsCard tr-card sendOrderWhite mx-4 p-1 statusBorder-${status.bgColorClass}`}>
                  <td>
                      {this.props.data.orderId}
                  </td>
                  <td>
                      <DateDisplay dateLabel="Número da Plp:" dateString={this.props.data.plpId} />
                  </td>
                  <td>
                      <DateDisplay dateLabel="Cep do Remetente:" dateString={this.props.data.cepRemetente} />
                  </td>
                  <td>
                      <SendStatus status={this.props.data.statusSend}/>
                  </td>
                  <td>
                      <div className="d-flex justify-content-end">
                        <DateDisplay dateLabel="Criado em:" dateString={this.props.data.plpDate} />
                      </div> 
                  </td>
                  <td>
                      <div className="d-flex justify-content-end">
                        <ActionButtons details></ActionButtons>
                      </div>
                  </td>
          </tr>
        </EnviosPlpsCardStyled>
      </React.Fragment>
      
    )
  }
}
