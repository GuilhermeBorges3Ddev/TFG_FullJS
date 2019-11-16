import React, { PureComponent } from 'react'
import './VendasCard.css'
import DateDisplay from '../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../Components/ActionButtons/ActionButtons';
export default class VendasCard extends PureComponent {
  render() {
    let status= this.props.data.status === 1 ? {
      label:'Em Aberto',
      bgColorClass:'mustard'
    } : {
      label:'Completa',
      bgColorClass:'solidGreen'
    }
    return (
      <tr className={`vendasCard tr-card statusBorder-${status.bgColorClass}`}>
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
        <td>
          <DateDisplay dateLabel="Valor:" dateString={this.props.data.totalPrice} dateStringClassName="font-weight-bold"/>
        </td>
        <td className="text-center">
          {this.props.data.location}
        </td>
        <td>
          <div className="flexCenter w-100">
            <div className={`flexCenter p-05 px-1 rounded-lg text-white bg-${status.bgColorClass}`}>
              {status.label}
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center justify-content-end w-100 pr-1">
            <DateDisplay dateLabel="Data:" dateString={this.props.data.conclusion_date} dateStringClassName="font-weight-bold"/>
          </div>
        </td>
        <td>
          <ActionButtons details className="justify-content-end"/>
        </td>
      </tr>
    )
  }
}
