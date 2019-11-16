import React, { Component } from 'react'
import './SubLojasCard.css';
import DateDisplay from '../../../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../../../Components/ActionButtons/ActionButtons';
import UserStatus from '../../../../../Components/UserStatus/UserStatus';

export default class SubLojasCardMobile extends Component {
    render() {
        let status= this.props.data.status === 1 ? {
          label:'Usuário Ativo',
          bgColorClass:'solidGreen'
        } : {
          label:'Usuário Inativo',
          bgColorClass:'oldRed'
        }
        return (
          <div className={`d-flex flex-wrap w-100 SubLojasCard p-2 text-muted bg-white mt-2 mb-3 responsiveFont16 statusBorder-${status.bgColorClass}`} >
            <div className="d-flex align-items-center justify-content-between text-truncate w-100">
                <DateDisplay dateLabel="Empresa:" dateString={this.props.data.company} />
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                <DateDisplay dateLabel="E-mail do Responsável:" dateString={this.props.data.mail} />  
            </div>
            <div className="d-flex align-items-center justify-content-between w-100 pt-2">
                <DateDisplay dateLabel="Cnpj:" dateString={this.props.data.cnpj} />
                <UserStatus status={this.props.data.statusSend} />
                <div className="justify-content-end">
                  <ActionButtons
                      activateUser = {this.props.data.status === 2}
                      inactivateUser = {this.props.data.status === 1}
                      onClickActivateUser= {() => {this.showConfirm('activate')}}
                      onClickInactivateUser= {() => {this.showConfirm('inactivate')}}
                  />
                </div>
            </div>
          </div>
        )
    }
  }