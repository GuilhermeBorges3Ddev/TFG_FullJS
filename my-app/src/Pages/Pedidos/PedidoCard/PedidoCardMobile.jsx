import React, { PureComponent } from 'react'
import './PedidoCard.css'
import DateDisplay from '../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../Components/ActionButtons/ActionButtons';
import TimerIcon from "mdi-react/TimerIcon";
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import * as aux from './auxx'

export default class PedidoCardMobile extends PureComponent {
    
    render() {
        let data = this.props.data;
        let step = data.canceled_at ? 7 : data.step;
        let statusColor=aux.getStatusColor(step);
        let remainingDaysLabel = aux.getRemainingDaysLabel(step, data.limit_date);
        return (
            <div className={`d-flex flex-wrap w-100 pedidoCard mx-1 p-2 text-muted  bg-white mb-2 responsiveFont16 statusBorder-${statusColor}`} >
                <div className="d-flex align-items-center justify-content-between w-100 header">
                    <div className="text-nowrap d-flex">{data.order_marketplace_id}</div>
                    <div className="ml-2 d-inline-flex">{data.marketplace.name}</div>
                </div>
                <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                    <div className="d-flex">
                        <small>Qtd: </small><span className="font-weight-bold pl-1">{data.items[0].total_quantity}</span>
                    </div>
                    <div className="d-flex">
                        <div className="flexCenter w-100" >
                            <DateDisplay dateLabel="Total:" dateString={ "R$ " +data.total_amount2} dateStringClassName="font-weight-bold"/>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className={`inlineFlexCenter rounded p-05 pr-1 ${remainingDaysLabel.statusClass}`} title="Dias Restantes para Envio">
                            <TimerIcon/><TruckFastIcon className="pr-1"/>{remainingDaysLabel.label}
                        </div>
                    </div> 
                </div>
                {/* <div className="d-flex w-100">
                    
                </div> */}
                <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                    <div className="flexCenter flex-wrap w-min text-nowrap" >
                        <div className="flexCenter w-100"> 
                            <div className={`rounded p-05 px-1 statusLabel text-white bg-${statusColor}`}>
                                {step===7 ? 'Cancelado' : 
                                 step===3? 'À Enviar' :
                                 step===2? 'Adicionar NF' : 
                                 data.step_order.name}
                            </div>  
                        </div>
                        {(step !== 7 && step > 3)? <a href="#beceutildes" className="text-center" >{data.etiqueta}</a> :null}
                    </div>
                    <DateDisplay dateLabel="Enviar até:" dateString={step===7 ? 'Cancelado' : step===1? '--/--/----' : data.limit_date} dateStringClassName="font-weight-bold"/>
                    <DateDisplay dateLabel="Pedido:" dateString={data.created_at2} className="float-right" dateStringClassName="font-weight-bold"/>
                    <ActionButtons details className="justify-content-end iconMobile30"/>
                </div>
            </div>
        )
    }
}
