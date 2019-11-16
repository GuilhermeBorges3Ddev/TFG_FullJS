import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SideItemStyled = styled.div`
	.sideCounterTag{
		color: #003c5f;
		font-weight: 700;
		background: white;
		border-radius: 4px;
		padding: 0 4px;
	}
	.sideItem span{
		margin-right: 1vw;
	}
	.sideItem{
		display: flex;
		align-items: center;
		padding: 0.4rem .7rem;
		transition: all 0.3s;
		margin-bottom: 0.2rem;
	}
	.sideItem:hover{
		background-color: #024369;
		border-radius: 20px;
	}
	.sideItem.active{
		background-color: #013e61;
		border-radius: 20px;
	}
	.sideFilterCounterTag{
		line-height: 1.3vw;
		border-radius: 4px;
		padding: 0 4px;
		font-weight: 600;
	}
	.sideFilterIcon{
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding:0.3vw;
		border-radius: 50%;
		width: 1.75vw;
		height: 1.75vw;	
	}
	.sideItem .mdi-icon{
		width: 1.75vw;
		height: 1.75vw;
	}
	@media(max-width:991px), (min-width:1367px){
		.sideItem .mdi-icon{
			width: 24px;
			height: 24px;
		}
		.sideItem {
			display: flex;
			align-items: center;
			padding: 0.4rem .7rem;
			transition: all 0.3s;
			margin-bottom: 0.2rem;
		}
		.sideItem span{
			margin-right: 1rem;
		}
		.sideFilterCounterTag{
			line-height: 18px;
		}
		.sideFilterIcon{
			padding:4px;
			width: 24px;
			height: 24px;	
		}
	}
`;

export default class SideItem  extends React.PureComponent {
	render(){
		return(
				<SideItemStyled>
					<NavLink className={`text-white sideItem ${(this.props.CurrentHash && this.props.CurrentHash===this.props.href) ? 'active':''} `} to={this.props.href}>
							<span className={`${this.props.bGColor? "sideFilterIcon ":""} ${this.props.dark? 'text-darkC' :''}`} style={this.props.bGColor?{backgroundColor:this.props.bGColor} : {}}>{this.props.leftIcon}</span>
									{this.props.text}
							<div className= {`${this.props.bGColor? "sideFilterCounterTag ml-auto":"sideCounterTag ml-auto"} ${this.props.dark? 'text-darkC' :''} `}  style={this.props.bGColor?{backgroundColor:this.props.bGColor} : {}}>{this.props.counter}</div>
					</NavLink>
				</SideItemStyled>
		);
	}
};
