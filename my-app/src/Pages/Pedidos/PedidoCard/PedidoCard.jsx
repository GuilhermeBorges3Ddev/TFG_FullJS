import React, { PureComponent } from 'react'
import './PedidoCard.css'
import DateDisplay from '../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../Components/ActionButtons/ActionButtons';
import TimerIcon from "mdi-react/TimerIcon";
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import * as aux from './auxx'

export default class PedidoCard extends PureComponent {
    
    render() {
        let data = this.props.data;
        let step = data.canceled_at ? 7 : data.step;
        let statusColor=aux.getStatusColor(step);
        let remainingDaysLabel = aux.getRemainingDaysLabel(step, data.limit_date);
       
        return (
            <tr className={`pedidoCard tr-card text-muted responsiveFont14 statusBorder-${statusColor}`}>
                <td>
                    <span className="ml-2">{data.order_marketplace_id}</span>
                </td>
                <td className="text-center">
                    {data.marketplace.name} 
                </td>
                <td className="text-center">
                    Qtd: <span className="font-weight-bold">{data.items[0].total_quantity}</span>
                    
                </td>
                <td >
                    <div className="flexCenter w-100" >
                        <DateDisplay dateLabel="Total:" dateString={ "R$ " +data.total_amount2} dateStringClassName="font-weight-bold"/>
                    </div>
                </td>
                <td>
                    <div className="w-100 flexCenter">
                        <div className="flexCenter flex-wrap w-min text-nowrap" >
                            <div className="flexCenter w-100"> 
                                <div className={`rounded p-05 px-1 statusLabel text-white bg-${statusColor}`}>
                                    {step===7 ? 'Cancelado' :
                                    step===3 ? 'À Enviar' :
                                    step===2 ? 'Adicionar NF' :
                                    data.step_order.name}
                                </div>  
                            </div>
                            {(step !== 7 && step > 3)? <a href="#beceutildes" className="text-center pt-1" >{data.etiqueta}</a> :null}
                        </div>
                    </div>
                </td>
                <td>
                    <div className="flexCenter w-100 remainingDays">
                        <div className={`inlineFlexCenter rounded p-05 pr-1 ${remainingDaysLabel.statusClass}`} title="Dias Restantes para Envio">
                            <TimerIcon/><TruckFastIcon className="pr-1"/><span>{remainingDaysLabel.label}</span>
                        </div>
                    </div> 
                </td>
                <td>
                    <div className="flexCenter w-100">
                        <DateDisplay dateLabel="Limite de envio:" dateString={step===7 ? 'Cancelado' : step===1? '--/--/----' : data.limit_date} dateStringClassName="font-weight-bold" />
                    </div>
                </td>  
                <td>
                    <DateDisplay className="float-right" dateLabel="Data do Pedido:" dateString={data.created_at2} dateStringClassName="font-weight-bold"/>
                </td>
                <td >
                    <ActionButtons details className="justify-content-end mr-1"/>
                </td>    
            </tr>
        )
    }
}
