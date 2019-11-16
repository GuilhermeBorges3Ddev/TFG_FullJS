import React, { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import styled from 'styled-components';
import Media from 'react-media';
import moment from 'moment';

const CustomDateRangeStyled = styled.div`
    .customDatePicker .DateRangePickerInput_calendarIcon{
        padding:0
    }
    .customDatePicker .DateInput_input__small{
        font-size: inherit
    }
    .customDatePicker .DateInput__small{
        width: 5.5vw;
    }
    .customDatePicker .calendarInfo{
        font-size: 12px!important;
        padding: 8px;
    }
    .customDatePicker .DateRangePickerInput{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .customDatePicker .DateRangePicker{
        width: 100%;
    }
    .customDatePicker .DateRangePickerInput_calendarIcon{
        display: inline-flex;
    }
    .customDatePicker .DateRangePickerInput_clearDates{
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
    .customDatePicker .CalendarDay__selected_span {
        background: hsl(203, 68%, 64%);
        border: 1px double hsl(202, 69%, 53%);
        color: #fff;
    }
    .customDatePicker .CalendarDay__selected_span:hover {
        background: hsl(202, 69%, 53%);
        border: 1px double hsl(202, 69%, 53%);
        color: #fff;
    }
    .customDatePicker .CalendarDay__hovered_span, .CalendarDay__hovered_span:hover {
        background: hsl(202, 69%, 82%);
        border: 1px double hsl(202, 69%, 71%);
        color: hsl(213, 100%, 26%);
    }
    .customDatePicker .CalendarDay__selected, .CalendarDay__selected:active, .CalendarDay__selected:hover {
        background: hsl(202, 100%, 33%);
        border: 1px double hsl(202, 100%, 33%);
        color: #fff;
    }
    @media(max-width:991px),(min-width:1367px){
        .customDatePicker .DateInput__small{
            width: 75px;
        }
    }
    @media(max-width:991px){
        .customDatePicker .calendarInfo{
            padding-bottom: 60px;   
        }
        .DayPicker_transitionContainer{
            height: 320px!important;
        }
        .DateRangePicker_picker{
            max-height: calc(100vh - 160px);
            overflow: scroll;
        }
    }
`;

const CustomDateRange =(props)=>{
    const [focusedDateInput, setFocusedDateInput] =useState(null);
    const [orient, setOrient] = useState('horizontal');
    const [sD, eD, oC] = [props.startDate,props.endDate, props.onDatesChange];
  
	return(
        <CustomDateRangeStyled>
            <div className="d-inline-flex customDatePicker w-100">
                <Media query={{minWidth:992}}>
                    {matches=>{
                        if(matches){
                            setOrient('horizontal');
                            return null;
                        }else{
                            setOrient('vertical');
                            return null;
                        }
                    }}
                </Media>
                <DateRangePicker
                    {...props}
                    noBorder
                    focusedInput={focusedDateInput} 
                    onFocusChange={focusedInput => setFocusedDateInput(focusedInput)}
                    small
                    showDefaultInputIcon={true}
                    showClearDates={true}
                    startDatePlaceholderText= "Data Inicial"
                    endDatePlaceholderText= "Data Final"
                    isOutsideRange={()=>false}
                    hideKeyboardShortcutsPanel
                    orientation={orient}
                    numberOfMonths={orient==='horizontal'? 2 : 1}
                    keepOpenOnDateSelect={true}
                    initialVisibleMonth={()=>sD?  moment(sD) : eD ? moment(eD) : moment().add(-1,'month')}
                    renderCalendarInfo= {() => (
                        <div className="d-flex w-100 align-items-center calendarInfo flex-wrap justify-content-around">
                            <div>
                                <button className="btn btn-sm btn-outline-secondary p-0 px-1 ml-1 ml-lg-0 my-1" onClick={()=>{oC({startDate:moment(), endDate:moment()})}}>Hoje</button>
                                <button className="btn btn-sm btn-outline-secondary p-0 px-1 ml-1 my-1"  onClick={()=>{oC({startDate:moment().add(-1,'day'), endDate:moment().add(-1,'day')})}}>Ontem</button>
                                <button className="btn btn-sm btn-outline-secondary p-0 px-1 ml-1 my-1" onClick={()=>{oC({startDate:moment().add(-6,'day'), endDate:moment()})}}>Ultimos 7 Dias</button>
                                <button className="btn btn-sm btn-outline-secondary p-0 px-1 ml-1 my-1"  onClick={()=>{oC({startDate:moment().startOf('month'), endDate:moment()})}}>Este Mês</button>
                                <button className="btn btn-sm btn-outline-secondary p-0 px-1 ml-1 my-1" onClick={()=>{oC({startDate:moment().add(-1, 'month').startOf('month'), endDate:moment().add(-1, 'month').endOf('month')})}}>Ultimo Mês</button>
                            </div>
                            <div className=""> 
                                <strong>Criado entre: </strong> <span className="px-2">{sD ? sD.format('DD/MM/YYYY') :'__/__/____'}</span> - <span className="pl-2">{eD?eD.format('DD/MM/YYYY'):'__/__/____'}</span>
                            </div>
                        </div>
                    )}
                    
                />
            </div>
        </CustomDateRangeStyled>
	)
}

export default CustomDateRange;