import React, { Component } from 'react';
import styled from 'styled-components';
import DateDisplay from '../../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../../Components/ActionButtons/ActionButtons';
import SendStatus from '../../../../Components/SendStatus/SendStatus';

const EnviosPlpsCardMobileStyled = styled.div`
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
  .responsiveFont16{
    font-size: 1.17vw;
    line-height: 1.17vw;
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

export default class EnviosPlpsCardMobile extends Component {
    render() {
        let status= this.props.data.status === 1 ? {
            label:'Aguardando Envio',
            bgColorClass:'mustard'
          } : {
            label:'Enviado',
            bgColorClass:'solidGreen'
          }
        return (
          <EnviosPlpsCardMobileStyled>
            <div className={`d-flex flex-wrap w-100 mx-1 financeiroPedidoCard  p-2 text-muted  bg-white my-2 responsiveFont16 statusBorder-${status.bgColorClass}`} >
              <div className="d-flex align-items-center justify-content-between w-100 header">
                <div className="text-nowrap d-flex">{this.props.data.orderId}</div>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                <DateDisplay dateLabel="Número da Plp:" dateString={this.props.data.plpId} dateStringClassName="font-semibold"/>
                <DateDisplay dateLabel="Cep do Remetente:" dateString={this.props.data.cepRemetente} dateStringClassName=" font-semibold"/>
              </div>
              <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                <div className="d-flex">
                  <SendStatus status={this.props.data.statusSend} />
                </div>
                <DateDisplay dateLabel="Criado em:" dateString={this.props.data.plpDate} dateStringClassName="font-weight-bold"/>
                <ActionButtons details className="justify-content-end"/>
              </div>
            </div>
          </EnviosPlpsCardMobileStyled>
        )
    }
  }