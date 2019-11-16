
import * as moment from 'moment';
export  const getStatusColor = (step) =>{
    switch(step){
        case 1:return 'info';
        case 2:return 'orange';
        case 3:return 'midOrange';
        case 4:return 'mustard';
        case 5:return 'solidGreen';
        case 7:return 'oldRed'
        default: return '';
    }
}
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
