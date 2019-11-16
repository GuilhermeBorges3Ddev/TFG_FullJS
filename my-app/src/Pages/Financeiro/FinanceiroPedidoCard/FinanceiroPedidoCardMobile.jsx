import React, { PureComponent } from 'react';
import styled from 'styled-components';
import DateDisplay from '../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../Components/ActionButtons/ActionButtons';

const FinanceiroPedidoCardMobileStyled = styled.div`
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
`;

export default class FinanceiroPedidoCardMobile extends PureComponent {
  render() {
    let status= this.props.data.status === 1 ? {
        label:'A Receber',
        bgColorClass:'mustard'
      } : {
        label:'Recebido',
        bgColorClass:'solidGreen'
      }
    return (
      <FinanceiroPedidoCardMobileStyled>
        <div className={`d-flex flex-wrap w-100 mx-1 financeiroPedidoCard  p-2 text-muted  bg-white mb-2 responsiveFont16 statusBorder-${status.bgColorClass}`} >
          <div className="d-flex align-items-center justify-content-between w-100 header">
            <div className="text-nowrap d-flex">{this.props.data.orderId}</div>
            <div className="ml-2 d-inline-flex">{this.props.data.mp}</div>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100 pt-2">
            <DateDisplay dateLabel="Produtos:" dateString={this.props.data.orderSubTotalProducts}  dateStringClassName="font-semibold"/>
            <DateDisplay dateLabel="Frete:" dateString={this.props.data.orderSubTotalFreight} dateStringClassName=" font-semibold"/>
            <DateDisplay dateLabel="Total:" dateString={this.props.data.orderTotalPrice} dateStringClassName="  font-semibold"/>
          </div>
          <div className="d-flex align-items-center justify-content-between w-100 pt-2">
            <div className="flexCenter flex-wrap w-min text-nowrap" >
              <div className={`p-05 d-inline-flex rounded-lg px-1 text-white bg-${status.bgColorClass}`} >{status.label} </div>
            </div>
            <DateDisplay dateLabel="Inclusão:" dateString="13/03/2019" dateStringClassName="font-weight-bold"/>
            <DateDisplay dateLabel="Entregue:" dateString="14/03/2019" dateStringClassName="font-weight-bold"/>
            <ActionButtons details className="justify-content-end"/>
          </div>
        </div>
      </FinanceiroPedidoCardMobileStyled>
    )
  }
}
