import React from 'react';
import PropTypes from 'prop-types';
import { 
	UncontrolledDropdown,
	DropdownMenu,
	DropdownToggle,
	DropdownItem
} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import ArrowUpIcon from 'mdi-react/ArrowUpIcon';
import ArrowDownIcon from 'mdi-react/ArrowDownIcon';
import styled from 'styled-components';

const SelectLightStyled = styled.div`
	.selectLight{
		background-color: transparent;	
	}
	.selectLight .dropToggle{
		color:#6c757d;
		background-color: transparent;
		border:none;
		padding:0!important;
		padding-right: 0.5rem!important;
	}
	.selectLight .dropToggle svg{
		width:30px;
		height: 30px;
	}
	.selectLight .dropToggle{
		font-size: inherit!important;
		display: inline-flex;
		align-items: center;
	}
	.selectLight .active{
		color:#024369;
		font-weight: bold;
	}
	.selectLight .sortActive{
		stroke:#024369;
		color: #024369;
	}
	.selectLight .dropdown-item:active{
		background-color: #afafaf;
	}
`;

export default class SelectLight extends React.PureComponent{
	
	static propTypes ={
		onChange: PropTypes.func.isRequired,
		options: PropTypes.arrayOf(PropTypes.shape({
			value:PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
			label:PropTypes.string
		})),
		sort:PropTypes.bool,
		active:PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	}
	
	render(){
		return(
			<SelectLightStyled>
				<UncontrolledDropdown size="sm"  className={`selectLight d-flex ${this.props.className ||''}`} title={this.props.hint || ''}  >
					<DropdownToggle className="dropToggle">
							<ChevronDownIcon/>
							{this.props.label}	
					</DropdownToggle>
					<DropdownMenu>
						{this.props.options? this.props.options.map((el,i)=>(
							<DropdownItem key={i}  className="px-0">
								<div className="d-flex justify-content-between align-items-center " >
									<div onClick={()=>{this.props.onChange(el.value)}} className={`p-0 pl-2 w-100 ${(this.props.active === el.value)? 'active':'' } `}>
										{el.label || el.value}	
									</div>

									{this.props.sort ? <div className="flexCenter float-right pr-2">
										<div className="btn btn-outline-secondary btn-sm p-0 px-1 mr-1 border-0" onClick={()=>{this.props.onChangeSort({orderBy:el.value, sort:'desc'})}} ><ArrowDownIcon className={((this.props.active === el.value ) && (this.props.orderActive === 'desc'))? 'active':'' }/></div>
										<div className="btn btn-outline-secondary btn-sm p-0 px-1 border-0"  onClick={()=>{this.props.onChangeSort({orderBy:el.value, sort:'asc'})}} ><ArrowUpIcon className={((this.props.active === el.value ) && (this.props.orderActive === 'asc'))? 'active':'' }/></div>
									</div> :null}
								</div>
								
							</DropdownItem>
						)): '...' }
					</DropdownMenu>
				</UncontrolledDropdown>
			</SelectLightStyled>
		)
	}
											
};

