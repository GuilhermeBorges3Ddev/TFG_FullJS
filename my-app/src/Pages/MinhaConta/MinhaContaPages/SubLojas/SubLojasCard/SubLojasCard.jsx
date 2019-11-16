import React, { Component } from 'react'

import './SubLojasCard.css';

import ActionButtons from '../../../../../Components/ActionButtons/ActionButtons';
import DateDisplay from '../../../../../Components/DateDisplay/DateDisplay';
import UserStatus from '../../../../../Components/UserStatus/UserStatus';

import  Modal  from 'antd/lib/modal';
import 'antd/lib/modal/style/index.css'
import 'antd/lib/button/style/index.css'


const confirm = Modal.confirm;

export default class SubLojasCard extends Component {
  showErrorOrSuccess = (options) => {

    if(options.status==='success'){
      Modal.success({
        title: 'Sucesso!',
        content: options.action === 'activate' ? 'O Usuário foi ativado!' : 'O Usuário foi inativado!',
      })
    }else if(options.status==='error'){
      Modal.error({
        title: 'Erro',
        content: 'ocorreu um erro na solicitação, se o erro persistir contate o administrador',
      })
    }
      

  }
  showConfirm = (action) =>{
    const onActivate =  this.props.onActivate;
    const onInactivate =  this.props.onInactivate;
    const showErrorOrSuccess = this.showErrorOrSuccess
    confirm({
      title: action === 'inactivate' ? 
        'Você tem certeza que deseja INATIVAR essa subloja?' : 
        'Você tem certeza que deseja ATIVAR essa subloja?',
      content: action === 'inactivate' ? 
        'Você não poderá mais restaurar essa sublojas' :
        '',
      onOk() {
        if(action === 'activate'){
          //return new Promise((resolve,reject)=>{});
          return onActivate().then(()=>{
            showErrorOrSuccess({status:'success', action});
          }).catch((er)=>{
            showErrorOrSuccess({status:'error', action});
          })
        }else if(action === 'inactivate'){
          return onInactivate().then(()=>{
            showErrorOrSuccess({status:'success', action});
          }).catch((er)=>{
            showErrorOrSuccess({status:'error', action});
          })
        }
      },
      onCancel() {},
    });
  }
  render() {
    let status= this.props.data.status === 1 ? {
      label:'Usuário Ativo',
      bgColorClass:'solidGreen'
    } : {
      label:'Usuário Inativo',
      bgColorClass:'oldRed'
    }
    return (
      <React.Fragment>
        <tr className={`SubLojasCard tr-card sendOrderWhite mx-4 p-1 statusBorder-${status.bgColorClass}`}>
                <td>
                    <DateDisplay dateLabel="Empresa:" dateString={this.props.data.company} />
                </td>
                <td>
                    <DateDisplay dateLabel="E-mail do Responsável:" dateString={this.props.data.mail} />
                </td>
                <td>
                    <DateDisplay dateLabel="Cnpj:" dateString={this.props.data.cnpj} />
                </td>
                <td>
                    <UserStatus status={this.props.data.status}/>
                </td>
                <td>
                    <div className="d-flex justify-content-end" id="ativarDesativarLojas">
                      <ActionButtons 
                        activateUser = {this.props.data.status === 2}
                        inactivateUser = {this.props.data.status === 1}
                        onClickActivateUser= {() => {this.showConfirm('activate')}}
                        onClickInactivateUser= {() => {this.showConfirm('inactivate')}}
                      />
                      
                    </div>
                </td>
        </tr>
      </React.Fragment>
    )
  }
}
