import React, { PureComponent } from 'react'
import {Nav} from 'reactstrap'
import SideItem from "../../../Components/SideItem/SideItem";
import FormatListBulletedTypeIcon from 'mdi-react/FormatListBulletedTypeIcon';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import TimerSandIcon from 'mdi-react/TimerSandIcon';

export default class SideFiltersVendas extends PureComponent {
  render() {
    return (
        <Nav vertical>
            <div className="sidebarTitle text-white">Filtros</div>
            <div>
                <SideItem dark  href="#Todas" CurrentHash ={this.props.hash || "#Todas"} leftIcon={<FormatListBulletedTypeIcon/>} text="Todas" counter={150} bGColor="var(--pastelGray)" />
                <SideItem dark href="#Concluidas" CurrentHash ={this.props.hash} leftIcon={<CheckCircleIcon/>} text="Concluídas" counter={50} bGColor="var(--happyGreen)" />
                <SideItem dark href="#EmAberto" CurrentHash ={this.props.hash} leftIcon={<TimerSandIcon/>} text="Em Aberto" counter={99} bGColor="var(--mustard)" />

            </div>
        </Nav>
    )
  }
}
