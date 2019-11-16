import React, { Component } from 'react'
import ActionButtons from '../../../../../Components/ActionButtons/ActionButtons';
import './UsuariosCard.css';

export default class UsuariosCard extends Component {
  render() {
    return (  
        <React.Fragment>
            <tr className="lightDisplay border-bottom">
                
                <td>{this.props.data.userName}</td>
                <td>{this.props.data.userMail}</td>
                <td>{this.props.data.userOcupation}</td>
                <td>{this.props.data.userCPF}</td>
                <td className="pt-1">
                    <ActionButtons 
                           edit = {this.props.data.userAction === 2}
                           delete = {this.props.data.userAction === 1}
                    />
                </td>
            </tr>
        </React.Fragment>      
    )
  }
}
