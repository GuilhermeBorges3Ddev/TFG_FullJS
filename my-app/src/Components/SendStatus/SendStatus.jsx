import React, {Component} from 'react'
import styled from 'styled-components';

const SendStatusStyled = styled.div`
	.sendStatus{
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

class SendStatus extends Component{
	render(){
		let stateValues ={}
		switch(this.props.status){
			case 1:
				stateValues = {
					label: 'Produto enviado no prazo',
					className: 'bg-happyGreen'
				}
				break;
			case 2:
				stateValues ={
					label: 'Produto enviado com atraso',
					className: 'bg-mustard'
				}
				break;
			case 3:
				stateValues ={
					label: 'Aguardando Envio',
					className: 'bg-mustard'
				}
				break;
			case 4:
				stateValues ={
					label: 'Enviado',
					className: 'bg-solidGreen'
				}
				break;
			case 5:
				stateValues ={
					label: 'Prazo estourado',
					className: 'bg-oldRed'
				}
				break;
			default:
				stateValues ={
					label: 'Status Desconhecido',
					className: 'bg-oldRed'
				}
		}
		return(
			<SendStatusStyled>
				<div className="w-100 flexCenter">
					<div className="flexCenter flex-wrap w-min text-nowrap" >
						<div className="flexCenter w-100"> 
							<div className={`rounded p-05 px-1 statusLabel text-white ${stateValues.className}`}>
								{stateValues.label}
							</div>  
						</div>
					</div>
				</div>
			</SendStatusStyled>
		);
	}
}

export default SendStatus;