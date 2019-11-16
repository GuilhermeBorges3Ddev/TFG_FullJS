import React,{Suspense} from 'react'
import styled from 'styled-components';

const PencilIcon= React.lazy(()=>import('mdi-react/PencilIcon'));
const DeleteIcon= React.lazy(()=>import('mdi-react/DeleteIcon'));
const ChevronDownIcon= React.lazy(()=>import('mdi-react/ChevronDownIcon'));
const RestoreIcon= React.lazy(()=>import('mdi-react/RestoreIcon'));
const MagnifyIcon= React.lazy(()=>import('mdi-react/MagnifyIcon'));
const CheckIcon= React.lazy(()=>import('mdi-react/CheckIcon'));
const PrinterIcon= React.lazy(()=>import('mdi-react/PrinterIcon'));
const PauseIcon= React.lazy(()=>import('mdi-react/PauseIcon'));
const PlayIcon= React.lazy(()=>import('mdi-react/PlayIcon'));
const AccountArrowLeftIcon =  React.lazy(()=>import('mdi-react/AccountArrowLeftIcon'));
const AccountOffIcon =  React.lazy(()=>import('mdi-react/AccountOffIcon'));

const ActionButtonsStyled = styled.div`
	.bg-edit {
		background-color: #fe886a;
	}
	.bg-expand {
		background-color: #4e8dc3;
	}
	.bg-expand svg{
		stroke: white;
		stroke-width: .3px
	}
	.check svg{
		stroke: white;
	}
	.bg-expand .mdi-icon{
		padding: 0!important;
	}
	.actionButton:hover{
		cursor: pointer;
		filter: drop-shadow(2px 2px 2px #00000055) brightness(85%);	
	}
`;

const ActionButton = (props) =>(
	<div className="font-weight-light flexCenter px-1 px-lg-0 px-xl-1 ml-1 actionButton" onClick={props.onClick} title={props.title}>
		<div className={`flexCenter rounded-circle iconButtonResponsive text-white ${props.className}`}>
				<Suspense fallback={<div>...</div>}>{props.lazyIcon}</Suspense>
		</div>
	</div> 
)


export default class ActionButtons extends React.PureComponent{
	render(){
		return(
			<ActionButtonsStyled>
				<div className={`d-flex align-items-center actionButtons responsiveIcon24 iconMobileBigger ${this.props.className || ''}`}>
					<div className=" d-flex text-nowrap ">
						{this.props.delete ?<ActionButton title='Excluir' lazyIcon={<DeleteIcon/>}  className="bg-danger" />:null}
						{this.props.edit ?<ActionButton title='Editar' lazyIcon={<PencilIcon/>}  className="bg-darkBlue" />:null}
						{this.props.restore ?<ActionButton title='Restaurar' lazyIcon={<RestoreIcon/>}  className="bg-success" />:null}
						{this.props.details ?<ActionButton title='Detalhes' lazyIcon={<MagnifyIcon/>}  className="bg-darkBlue" />:null}
						{this.props.pause ?<ActionButton title='Pausar' lazyIcon={<PauseIcon/>}  className="bg-dark check" />:null}
						{this.props.resume ?<ActionButton title='Resumir' lazyIcon={<PlayIcon/>}  className="bg-dark check" />:null}
						{this.props.expand ?<ActionButton title='Expandir' lazyIcon={<ChevronDownIcon/>}  className="bg-secondary" />:null}
						{this.props.check ?<ActionButton lazyIcon={<CheckIcon/>}  className="bg-success check" />:null}
						{this.props.print ?<ActionButton title='imprimir' lazyIcon={<PrinterIcon/>}  className="bg-darkBlue check" />:null}
						{this.props.activateUser ?<ActionButton title='Ativar Usuario' onClick={this.props.onClickActivateUser} lazyIcon={<AccountArrowLeftIcon/>} className="bg-dark" />:null}
						{this.props.inactivateUser ?<ActionButton title='Inativar Usuario' onClick={this.props.onClickInactivateUser} lazyIcon={<AccountOffIcon />} className="bg-dark" />:null}
						{this.props.spacement ?<ActionButton  lazyIcon={null} />:null}
					</div>
				</div>
			</ActionButtonsStyled>
		)
	}
}

