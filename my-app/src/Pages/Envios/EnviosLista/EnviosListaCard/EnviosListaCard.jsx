import React, { Component } from 'react';
import PrinterIcon from 'mdi-react/PrinterIcon';
import TimerIcon from 'mdi-react/TimerIcon';
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import DateDisplay from '../../../../Components/DateDisplay/DateDisplay';
import styled from 'styled-components';
import * as auxEnv from './EnviosListaAux';

const EnviosListaCardStyled = styled.tbody`
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
    .responsiveFont14{
        font-size: 1.02vw;
        line-height: 1.02vw;
    }
    .flexCenter{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inlineFlexCenter{
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .bg-darkBlue{
        background-color: #014c74;
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

export default class EnviosListaCard extends Component {
  render() {
    let printCheck = auxEnv.docPrintStatus(this.props.data.printStatus);
    let data = this.props.data;
    let step = data.canceled_at ? 7 : data.status;
    let colorClass = auxEnv.getStatusColor(step).colorClass;
    let label = auxEnv.getStatusColor(step).label;
    let remainingDaysLabel = auxEnv.getRemainingDaysLabel(step, data.limit_date);     
    return (
        <React.Fragment> 
            <EnviosListaCardStyled className="enviosCard sendOrderWhite bg-white responsiveFont14 mt-1 w-100">
            <tr className={`enviosCard text-muted text-muted responsiveFont14 sendOrderWhite 
            statusBorder-${colorClass} mx-4 p-1`}>
                    <td className="borderLeft">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            {printCheck}                      
                            <span>{this.props.data.codeOfSale}</span>
                        </div>
                    </td>
                    <td className="text-uppercase">
                        <span>{this.props.data.channelSale}</span>
                    </td>
                    <td className="text-success statusSendList">
                        <span className={`rounded p-05 px-1 statusLabel flexCenter w-100 text-white bg-${colorClass}`}>
                            {label}
                        </span>
                    </td>
                    <td className="flexCenter w-100 remainingDays">
                        <div className={`inlineFlexCenter rounded p-05 pr-1 ${remainingDaysLabel.statusClass}`} title="Dias Restantes para Envio">
                            <TimerIcon/><TruckFastIcon className="pr-1"/><span>{remainingDaysLabel.label}</span>
                        </div> 
                    </td>
                    <td className="my-0">
                        <DateDisplay dateLabel="Limite para envio:" dateString={this.props.data.limit_date} /> 
                    </td>
                    <td className="my-0">
                    <DateDisplay dateLabel="Previsão de entrega:" dateString={this.props.data.deliveryLimit} /> 
                    </td> 
                    <td className="borderRight btnSendDoc">
                        <button type="button" className="btn bg-darkBlue btn-sm text-white">
                            <PrinterIcon size={14}/>
                            <span className="ml-2 responsiveFont14">Documento para envio</span>
                        </button>
                    </td>
                </tr>
            </EnviosListaCardStyled>
        </React.Fragment>
    )
  }
}
