import React, { PureComponent } from 'react'
import {Nav} from 'reactstrap'
import SideItem from "../../../Components/SideItem/SideItem";
import FormatListBulletedTypeIcon from 'mdi-react/FormatListBulletedTypeIcon';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import TimerSandIcon from 'mdi-react/TimerSandIcon';

export default class SideFiltersFinanceiro extends PureComponent {
  render() {
    return (
        <Nav vertical>
            <div className="sidebarTitle text-white">Filtros</div>
            <div>
                <SideItem dark  href="#Todos" CurrentHash ={this.props.hash || "#Todos"} leftIcon={<FormatListBulletedTypeIcon/>} text="Todos" counter={150} bGColor="var(--pastelGray)" />
                <SideItem dark href="#Recebido" CurrentHash ={this.props.hash} leftIcon={<CheckCircleIcon/>} text="Recebido" counter={50} bGColor="var(--happyGreen)" />
                <SideItem dark href="#AReceber" CurrentHash ={this.props.hash} leftIcon={<TimerSandIcon/>} text="A Receber" counter={99} bGColor="var(--mustard)" />
            </div>
        </Nav>
    )
  }
}

