import React from 'react'
import './MktPlcStatusTag.css'
export default class MktPlcStatusTag extends React.PureComponent{
	render(){
		let stateClass = '';
		if(this.props.status ==='Publicado'){
			stateClass ='bg-lightGreen border-lightGreen'
		}else if(this.props.status ==='Reprovado' || this.props.status ==='Erro'){
			stateClass='bg-oldRed border-oldRed'
		}else if(this.props.status ==='Aguardando' || this.props.status === 'Em Moderação'){
			stateClass='bg-mustard border-mustard'
		}
		return (
			<span className={'MktPlcTag ' + stateClass + (this.props.noMr? 'mr-0':'') } >{this.props.label}</span>
		)
	}
	
	
}
