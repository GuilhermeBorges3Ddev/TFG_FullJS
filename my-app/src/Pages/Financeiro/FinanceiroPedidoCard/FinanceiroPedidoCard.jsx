import React, { PureComponent } from 'react';
import styled from 'styled-components';
import DateDisplay from '../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../Components/ActionButtons/ActionButtons';

const FinanceiroPedidoCardStyled = styled.tbody`
  .financeiroPedidoCard{
    border-radius: 8px;
    margin-bottom: 0;
  }
  .financeiroPedidoCard .orderId{
    width:15.89vw;
  }
  @media(min-width:1367px){
    .financeiroPedidoCard .orderId{
        width:217px;
    }
  }
  .tr-card  td{
    background-color: white;
    padding: .25rem;
  }
  .tr-card{
    height: 3.51vw;
  }
  .tr-card td:first-child{
    border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
  } 
  .tr-card td:last-child{
    border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
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
  .responsiveFont14{
    font-size: 1.02vw;
    line-height: 1.02vw;
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
`;

export default class FinanceiroPedidoCard extends PureComponent {
  render() {
    let status= this.props.data.status === 1 ? {
      label:'A Receber',
      bgColorClass:'mustard'
    } : {
      label:'Recebido',
      bgColorClass:'solidGreen'
    }
    return (
      <FinanceiroPedidoCardStyled className="w-100">
        <tr className={`tr-card financeiroPedidoCard text-muted responsiveFont14 px-1 statusBorder-${status.bgColorClass}`}>
          <td>
            <div className="d-flex pl-2">
              <div className="d-flex orderId">
                {this.props.data.orderId}
              </div>
              <div className="d-flex flex-grow-1 justify-content-center">
                {this.props.data.mp}
              </div>
            </div>
          </td>
          <td >
            <DateDisplay dateLabel="Produtos:" dateString={this.props.data.orderSubTotalProducts} dateStringClassName="font-weight-bold"/>
          </td>
          <td >
            <DateDisplay dateLabel="Frete:" dateString={this.props.data.orderSubTotalFreight} dateStringClassName="font-weight-bold"/>
          </td>
          <td >
            <DateDisplay dateLabel="Total:" dateString={this.props.data.orderTotalPrice} dateStringClassName="font-weight-bold"/>
          </td>
          <td >
            <div className={`p-05 d-inline-flex rounded-lg px-1 text-white bg-${status.bgColorClass}`} >{status.label} </div>
          </td>
          <td >
            <div className="flexCenter w-100">
                <DateDisplay dateLabel="Inclusão:" dateString={this.props.data.created_at2} dateStringClassName="font-weight-bold" />
            </div>
          </td>
          <td >
            <div className="d-flex align-items-center justify-content-end w-100">
              <DateDisplay dateLabel="Entregue:" dateString={this.props.data.limit_date}  dateStringClassName="font-weight-bold"/>
            </div>
          </td>     
          <td>
            <ActionButtons details className="justify-content-end"/>
          </td>
        </tr>
      </FinanceiroPedidoCardStyled>
    )
  }
}
