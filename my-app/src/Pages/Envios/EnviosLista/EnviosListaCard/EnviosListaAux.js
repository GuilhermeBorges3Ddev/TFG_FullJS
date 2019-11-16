import React from 'react';
import FileCheckIcon from 'mdi-react/FileCheckIcon'
import * as moment from 'moment';

/* docPrintStatus faz com que seja ativado o checkbox de impressão ou o ícone default */
export const  docPrintStatus = (printStatus) => {
    if ((printStatus) === 1){
        return( 
            <input className="mx-1" type="checkbox"/>
        );
    } else {
        return(
            <FileCheckIcon className="mr-1" size={20} color={'#013e61'}/>
        );
    }
}

/* getStatus color serve tanto para o 'rounded-status' quanto para a cor da borda  */
export  const getStatusColor = (step) =>{
    switch(step){
        case 1:
            return {
                label:'Aguardando NF',
                colorClass:'orange'
            };
        case 2:
            return {
                label:'Aguardando PLP',
                colorClass:'midOrange'
            };
        case 3:
            return {
                label:'Aguardando envio',
                colorClass:'mustard'
            };
        case 4:
            return {
                label:'Em transporte',
                colorClass:'info'
            };
        case 5:
            return {
                label:'Entregues',
                colorClass:'happyGreen'
            }
        default: return '';
    }
}

/* const usada para o cálculo dos dias restantes para envio   */
export  const getRemainingDaysLabel = (step,limit_date) => {
    let lD = moment(limit_date, "DD-MM-YYYY");
    let remaining = lD.diff(moment().startOf('day'),'days');
    let label='';
    let statusClass='';
    if(step>3 || step===1){
        label = '0 Dias';
        statusClass= 'bg-inactive text-white';
    }else{
        label = String(remaining) + (remaining ===1  ? " Dia" : " Dias");
        if(remaining<4){
            if(remaining<2){
                statusClass = 'bg-danger text-white'
            }else statusClass ='bg-warning text-white'
        }else{
            statusClass = 'bg-primary text-white'
        }
    }
    return {
        label,
        statusClass
    }
}
