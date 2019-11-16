
import React, { PureComponent } from 'react'
import {Nav} from 'reactstrap'
import SideItem from "../../../Components/SideItem/SideItem";
import FormatListBulletedTypeIcon from 'mdi-react/FormatListBulletedTypeIcon';
import SquareEditOutlineIcon from 'mdi-react/SquareEditOutlineIcon';
import EyeCircleIcon from 'mdi-react/EyeCircleIcon';
import TimerSandIcon from 'mdi-react/TimerSandIcon';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import MinusCircleIcon from 'mdi-react/MinusCircleIcon';

export default class SideFiltersEnvios extends PureComponent {
  render() {
    return (
        <Nav vertical>
            <div className="sidebarTitle text-white">Filtros</div>
            <div>
                <SideItem dark href="#todos" CurrentHash ={this.props.hash|| "#todos"} leftIcon={<FormatListBulletedTypeIcon/>} text="Todos" counter={343} bGColor="var(--pastelGray)" />
                <SideItem dark  href="#nf" CurrentHash ={this.props.hash} leftIcon={<SquareEditOutlineIcon/>} text="Aguardando NF" counter={0} bGColor="var(--orange)" />
                <SideItem dark  href="#plp" CurrentHash ={this.props.hash} leftIcon={<EyeCircleIcon/>} text="Aguardando PLP" counter={0} bGColor="var(--midOrange)" />
                <SideItem dark  href="#envio" CurrentHash ={this.props.hash} leftIcon={<TimerSandIcon/>} text="Aguardando Envio" counter={0} bGColor="var(--mustard)" />
                <SideItem dark  href="#transporte" CurrentHash ={this.props.hash} leftIcon={<CheckCircleIcon/>} text="Em Transporte" counter={14} bGColor="var(--info)" />
                <SideItem dark  href="#entregues" CurrentHash ={this.props.hash} leftIcon={<MinusCircleIcon/>} text="Entregues" counter={329} bGColor="var(--happyGreen)" />
            </div>
        </Nav>
    )
  }
}
