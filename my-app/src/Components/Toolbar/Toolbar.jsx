import React from 'react';
import Media from 'react-media'
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import {DebounceInput} from 'react-debounce-input';
import 'react-dates/lib/css/_datepicker.css';
import styled from 'styled-components';
import CustomDateRange from '../CustomDatePicker/CustomDatePicker';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import CloseIcon from 'mdi-react/CloseIcon';

import SelectLight from '../SelectLight/SelectLight'

import * as moment from 'moment';
import { 
	Collapse,
	Button
} from 'reactstrap';

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

const ToolbarStyled = styled.div`
	.toolbar{
		background: white;
		color:#6c757d;
		border-radius: 8px;
		font-size: inherit;
		display: flex;
		align-items: center;
		justify-content: flex-start
	}
	.toolbar .clearButton{
		cursor: pointer;
		transition: all .15s;
		border: none;
		color: inherit;
		background-color: transparent;
	}
	.toolbar .clearButton:hover{
		background-color: #6c757d;
		color:white;
		box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);
	}
	.toolbar .clearButton:hover::after{
		content: "Limpar Filtros";
		position: absolute;
		color: white;
		background-color: #6c757d;
		right: 26px;
		border-radius: 16px;
		padding: 3px 6px;
		display: flex;
		width: max-content;
		align-items: center;
		justify-content: center;
		line-height: 16px;
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
	@media(max-width:767px){
		.toolbarDate{
			width:100%;
		}
		.flex-wrap-mobile{
			flex-wrap: wrap ;
		}
	}
`;

export default class Toolbar extends React.Component{
	state={
		isOpen:false
	}
	componentWillMount(){
		
	}
	expand = () =>{
		if(!this.state.isOpen) this.setState({isOpen:true})
	}
	handleDatesChange = (dates) =>{
		//Concat dates from components and dates from state and compare them, if there is no change, return
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
			<ToolbarStyled>
				<div className={`d-flex  flex-wrap  toolbar px-2 py-1 p-lg-0 ${this.props.className || ''}`}>
					<Collapse className="order-2 order-lg-1 col-12 col-lg-auto px-0" isOpen={this.state.isOpen}>
						<div className="d-flex flex-wrap-mobile">
							
							<SelectLight  
								label={this.props.itemsPerPage}
								onChange={this.props.onChangeItemsPerPage}
								options = {itemsPerPageOptions}
								className="order-2 order-md-1 "
								hint="Items por Página"
							/>	
							
							<div className="d-none order-md-2 d-lg-flex align-items-center mr-3">
								<span> 
									<strong className="mr-1">
										{this.props.itemsPerPage * this.props.actualPage < this.props.total ?  this.props.itemsPerPage * this.props.actualPage : this.props.total}
									</strong> 
									de 
									<strong  className="ml-1"> 
										{this.props.total}
									</strong>
								</span>
							</div>
							
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
								{this.props.orderOptions ?
									<SelectLight
									sort
									orderActive={this.props.sort}
									active={this.props.orderBy}  
									label={"Ordernar Por"}
									options ={this.props.orderOptions}
									onChange={this.props.onChangeOrderBy}
									onChangeSort={this.props.onChangeSort}
									/>
								:null}
								{this.props.brandOptions ? 
									<SelectLight  
									label={this.props.brand || "Marca"} 
									options = {this.props.brandOptions}
									onChange={this.props.onChangeBrand}
									active={this.props.brand}
									/> : 
								null}
								{this.props.marketPlaceOptions?
									<SelectLight
									active={this.props.marketPlace}  
									label={"Marketplaces"}
									options ={this.props.marketPlaceOptions}
									onChange={this.props.onChangeMarketPlace}
									/>
								:null}
								{this.props.ufOptions?
									<SelectLight
									active={this.props.uf}  
									label={"UF"}
									options ={this.props.ufOptions}
									onChange={this.props.onChangeUf}
									/>
								:null}
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
							placeholder="Buscar" 
						/>
						<span className="toolbarCollapseButton d-lg-none" >
							<Button onClick={()=>this.setState(state=>({isOpen:!state.isOpen}))} style={{transform: `rotate(${this.state.isOpen?"-180deg" : "0deg" }`}} >
								<ChevronDownIcon/>
							</Button>
						</span>
						<button 
							className="rounded-circle d-inline-flex align-items-center justify-content-center clearButton p-1 p-lg-0 ml-1 mr-lg-2 position-relative" 
							title="Limpar Filtros"
							onClick={this.props.onClear}
						>
							<CloseIcon/>
						</button>
						
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
			</ToolbarStyled>	
		)
	}
}

