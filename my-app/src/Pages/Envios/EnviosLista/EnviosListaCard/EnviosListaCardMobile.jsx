import React, { Component } from 'react';
import TimerIcon from 'mdi-react/TimerIcon';
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import styled from 'styled-components';
import DateDisplay from '../../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../../Components/ActionButtons/ActionButtons';
import * as auxEnv from './EnviosListaAux';

const EnviosListaCardMobileStyled = styled.div`
  .enviosCard .sendOrderWhite {
    background-color: #ffffff !important;
  }
  .enviosCard .borderLeft {
    border-top-left-radius: 8px  !important;
    border-bottom-left-radius: 8px !important;
  }
  .enviosCard .borderRight{
    border-top-right-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    text-align: right !important;
  }
  .enviosCard td, th {
    border: 0px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  .enviosCard .borderLeft.borderGray{
    border-left: 3px solid #6c757d;
  }
  .enviosCard .borderLeft.borderPink{
    border-left: 3px solid #f36b7c;
  }
  .enviosCard .borderLeft.borderBlack {
    border-left: 3px solid #00000055;
  }
  .enviosCard .borderLeft.borderYellow{
    border-left: 3px solid #fec107;
  }
  .enviosCard .borderLeft.borderDarkGray{
    border-left: 3px solid #343a40;
  }
  @media (max-width: 991px){
    .envios {
        padding-top: 46px;
    }
  }
  @media (max-width: 991px){
    .pedidoCard .header {
        line-height: 13px;
    }
  }
  .enviosCard {
    border-radius: 8px;
    margin-bottom: 0;
  }
  .mobileGray{
    border-left: 3px solid #6c757d;
  }
  .mobilePink{
    border-left: 3px solid #f36b7c;
  }
  .mobileBlack {
    border-left: 3px solid #00000055;
  }
  .mobileYellow{
    border-left: 3px solid #fec107;
  }
  .mobileDarkGray{
    border-left: 3px solid #343a40;
  } 
  /*  Solved bugs on desktops between 992px and 1149px */
  @media (min-width: 992px) and (max-width: 1149px) {
    .btnSendDoc{
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
    }
    .statusSendList{
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
    }
    .remainingDays{
        padding: 20px 0 !important;
        text-align: center !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
    }
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
  .flexCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .bg-veryLightGray{
    background-color: #f8f9fa;
  }
  .bg-solidGreen{
    background-color: #4CAF50;
  }
  .bg-midOrange{
    background-color: hsla(35, 100%, 51%, 1);
  }
  .bg-deepDarkBlue{
    background-color: #013e61;
  }
  .bg-mustard{
    background-color: hsla(45, 100%, 51%, 1);
  }
  .bg-lightGreen{
    background-color: #9ec983;
  }
  .bg-happyGreen{
    background-color: #6abf40;
  }
  .bg-oldRed{
    background-color: #d2697e;
  }
  .bg-pastelGray{
    background-color: #CBD1CB;
  }
  .bg-darkBlue{
    background-color: #014c74;
  }
  .bg-deepDarkBlue{
    background-color: #013e61;
  }
  .bg-orange{
    background-color: orange;
  }
  .bg-inactive{
    background-color: inactive;
  }
  .bg-midLightGray{
    background-color: #a5abb1;
  }
  .inlineFlexCenter{
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .p-05{
    padding: .125rem;
  }
`;

export default class EnviosListaCardMobile extends Component {
    render() {
      let printCheck = auxEnv.docPrintStatus(this.props.data.printStatus);
      let data = this.props.data;
      let step = data.canceled_at ? 7 : data.status;
      let colorClass = auxEnv.getStatusColor(step).colorClass;
      let label = auxEnv.getStatusColor(step).label;
      let remainingDaysLabel = auxEnv.getRemainingDaysLabel(step, data.limit_date);
      return (
            <EnviosListaCardMobileStyled>
              <React.Fragment>
                <div className="envios responsiveFont16 pt-2">
                    <div className={`d-flex flex-wrap w-100 enviosCard statusBorder-${colorClass} p-2 text-muted bg-white`}>
                        <div className="d-flex align-items-center justify-content-between w-100 header">
                            <div className="text-nowrap d-flex">
                              {this.props.data.codeOfSale}
                            </div>
                            <div className="ml-2 d-inline flex text-uppercase">
                              {this.props.data.channelSale}
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                            <div className="d-flex">
                                {printCheck}
                            </div>
                            <div className="d-flex">
                              <span className={`rounded p-05 px-1 statusLabel flexCenter text-white bg-${colorClass}`}>
                                {label}
                              </span>
                            </div>
                            <div className="d-flex w-min text-nowrap">
                                <div className={`inlineFlexCenter rounded p-05 pr-1 ${remainingDaysLabel.statusClass} text-white`} title="Dias Restantes para Envio">
                                  <TimerIcon/>
                                  <TruckFastIcon className="pr-1"/>
                                  <span>{remainingDaysLabel.label}</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                            <div className="d-flex">
                                <DateDisplay dateLabel="Limite para envio:" dateString={this.props.data.limit_date} />
                            </div>
                            <div className="d-flex">
                                <DateDisplay dateLabel="Previsão de entrega:" dateString={this.props.data.deliveryLimit} />
                            </div>
                            <div className="d-flex">
                                <ActionButtons print />
                            </div>
                        </div>
                    </div>
                </div>
              </React.Fragment>
            </EnviosListaCardMobileStyled>
          )
        }
      }
