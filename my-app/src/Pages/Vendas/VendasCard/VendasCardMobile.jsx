import React, { PureComponent } from 'react'
import DateDisplay from '../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../Components/ActionButtons/ActionButtons';

export default class VendasCardMobile extends PureComponent {
  render() {
    let status= this.props.data.status === 1 ? {
      label:'Em Aberto',
      bgColorClass:'mustard'
    } : {
      label:'Completa',
      bgColorClass:'solidGreen'
    }
    return (
      <div className={`bg-white rounded-xl mx-1 mb-2 p-2 d-flex flex-wrap w-100 responsiveFont16 statusBorder-${ 0 ? 'solidGreen' : 'mustard'}`}>
        <div className="d-flex align-items-center justify-content-between w-100 header">
          <div className="text-nowrap d-flex">{this.props.data.orderId}</div>
          <div className="ml-2 d-inline-flex">{this.props.data.mp}</div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 pt-2">
          <DateDisplay dateLabel="Valor:" dateString={this.props.data.totalPrice} dateStringClassName="font-weight-bold"/>
          <div className="flexCenter">
            {this.props.data.location}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between w-100 pt-2">
          <div className={`flexCenter p-05 px-1 rounded-lg text-white bg-${status.bgColorClass}`}>
            {status.label}
          </div>
          <DateDisplay dateLabel="Data:" dateString={this.props.data.conclusion_date} dateStringClassName="font-weight-bold"/>
          <ActionButtons details className="justify-content-end"/>
        </div>
      </div>
    )
  }
}
