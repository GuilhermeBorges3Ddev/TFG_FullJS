import React, { Component } from 'react'
import Media from 'react-media'
import SelectLight from '../../Components/SelectLight/SelectLight';
import FilterIcon from 'mdi-react/FilterIcon';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import DeleteIcon from 'mdi-react/DeleteIcon';
import {DebounceInput} from 'react-debounce-input';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import CustomDateRange from '../../Components/CustomDatePicker/CustomDatePicker';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import * as moment from 'moment';
import { Collapse, Button} from 'reactstrap';

const orderOptions=[{
	label:'Data de Cadastro',
	value:'created_at'
},{
	label:'EAN',
	value:'ean'
},{   
	label:'Estoque',
	value:'quantity'
},{   
	label:'Preço',
	value:'price'
},{
	label:'Nome',
	value:'title'
},{
	label:'Marca',
	value: 'brand_name'
}];

const itemsPerPageOptions =[{
	label:'10',
	value:10
},{
	label:'20',
	value:20,
},{
	label:'30',
	value:30
}]

const EnviosListaNavbarStyled = styled.div`
	.toolbar{
		background: white;
		color:#6c757d;
		border-radius: 8px;
		font-size: inherit;
		display: flex;
		align-items: center;
		justify-content: flex-start
	}
	.toolbar .filterIcon{
		margin-left: .5vw;
		margin-right:.5vw;
	}
	.toolbarCollapseButton button{
		background: transparent;
		border:none;
		color:#6c757d;
		border-radius: 50%;
		width: 38px;
		height: 38px;
		padding: 0;
		transition: all 0.3s;
	}
	.toolbarSearch{
		display: inline-flex;
		align-items: center;
	}
	.toolbarDate{
		display: inline-flex;
		align-items: center;
	}
	.toolbarDate input{
		border: none;
	}
	.toolbarSearch input{
		border: none;
		width: 100%;
	}
	.toolbarSearchMobile{
		width: calc(100% - 38px);
	}
	.toolbarSearchMobile input{
		width: calc(100% - 38px);
	}
	.toolbar .datePicker{
		width: 6vw
	}
	.delete-icon{
		width: 20px !important;
		height: 30px !important;
	}
	.filter-icon{
		width: 20px !important;
		height: 30px !important;
	}
	@media(max-width:767px){
		.toolbarDate{
			width:100%;
		}
		.flex-wrap-mobile{
			flex-wrap: wrap ;
		}
	}
	.flexCenter{
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export default class EnviosListaNavbar extends Component {
    state={
		isOpen:false
	}
	componentWillMount(){}
	expand = () =>{
		if(!this.state.isOpen) this.setState({isOpen:true})
	}
	handleDatesChange = (dates) =>{
		let a = `${dates.startDate?dates.startDate.format('YYYY-MM-DD 00:00:00'):'1'}${dates.endDate?dates.endDate.format('YYYY-MM-DD 23:59:59'):'2'}`;
		let b = `${this.props.dateFrom || '1'}${this.props.dateTo || '2'}`;
		if(a===b) return;

		
		this.props.onDatesChange({
			startDate : (dates.startDate ? dates.startDate.format('YYYY-MM-DD 00:00:00') :null) ,
			endDate: (dates.endDate ? dates.endDate.format('YYYY-MM-DD 23:59:59') :null)
			}
		)
	}
	render(){
		return(
			<EnviosListaNavbarStyled>	
				<div className={`d-flex  flex-wrap  toolbar px-2 py-1 p-lg-0 ${this.props.className || ''}`}>	
					<Collapse className="order-2 order-lg-1 col-12 col-lg-auto px-0" isOpen={this.state.isOpen}>
						<div className="d-flex flex-wrap-mobile">	
								<div className="d-flex align-items-center justify-content-between toolbarDate order-1 order-md-2">
									<CustomDateRange
										startDate={this.props.dateFrom? moment(this.props.dateFrom) :null} 
										startDateId="start_date" 
										endDate={this.props.dateTo ? moment(this.props.dateTo) :null} // 
										endDateId="end_date" 
										onDatesChange={this.handleDatesChange}
									/>	
								</div>									
								<div className="order-3 order-md-3 flexCenter">
									<SelectLight
										orderActive={this.props.sort}
										active={this.props.orderBy}  
										label={"Marketplaces"}
										options ={orderOptions}
										onChange={this.props.onChangeOrderBy}
										onChangeSort={this.props.onChangeSort}									
									/>
								<div className="order-3 order-md-3 flexCenter filter-icon">     
									<FilterIcon className="d-flex justify-content-center align-items-center"/>
								</div>
								<div className="order-3 order-md-3 flexCenter delete-icon">    
									<DeleteIcon className="d-flex justify-content-center align-items-center"/>
								</div>
								</div>	
							</div>
						</Collapse>
						
						<div className="toolbarSearch flex-grow-1 order-1 order-lg-3 col-12 col-lg-auto px-0">
							<MagnifyIcon/>
							<DebounceInput 
								type="text" 
								onChange={(event)=>{this.props.onChangeSearch(event.target.value)}} 
								minLength={3}
								debounceTimeout={350} 
								placeholder="Buscar por Código de Venda..." 
							/>
							<span className="toolbarCollapseButton d-lg-none" ><Button onClick={()=>this.setState(state=>({isOpen:!state.isOpen}))} style={{transform: `rotate(${this.state.isOpen?"-180deg" : "0deg" }`}} ><ChevronDownIcon/></Button></span>
							<SelectLight
								orderActive={this.props.sort}
								active={this.props.orderBy}  
								label={"10"}
								options ={itemsPerPageOptions}
								onChange={this.props.onChangeOrderBy}
								onChangeSort={this.props.onChangeSort}									
							/>	
						</div>

						<Media
							query={{ minWidth: 992 }}
							onChange = {matches=>{
								if(matches){
									this.expand();
									return null;
								}else{
									return null;
								}
							}}
						/>
				</div>
			</EnviosListaNavbarStyled>
    	)
  	}
}

