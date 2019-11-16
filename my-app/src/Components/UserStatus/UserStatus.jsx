import React, {Component} from 'react'
import styled from 'styled-components';

const UserStatusStyled = styled.div`
	.UserStatus{
		border-radius: 16px;
		margin-right: 2px;
		padding: 3px;
		font-weight: 500;
		font-size: 80%;
		line-height: 80%;
		display: inline-flex;
		color:white;
	}
`;

class UserStatus extends Component{
	render(){
		let stateValues ={}
		switch(this.props.status){
			case 1:
				stateValues = {
					label: 'Usuário Ativo',
					className: 'bg-happyGreen'
				}
				break;
			case 2:
				stateValues ={
					label: 'Usuário Inativo',
					className: 'bg-oldRed'
				}
				break;
			default:
				stateValues ={
					label: 'Status Desconhecido',
					className: 'bg-mustard'
				}
		}
		return(
			<UserStatusStyled>
				<div className="w-100 flexCenter">
					<div className="flexCenter flex-wrap w-min text-nowrap" >
						<div className="flexCenter w-100"> 
							<div className={`rounded p-05 px-1 statusLabel text-white ${stateValues.className}`}>
								{stateValues.label}
							</div>  
						</div>
					</div>
				</div>
			</UserStatusStyled>
		);
	}
}

export default UserStatus;