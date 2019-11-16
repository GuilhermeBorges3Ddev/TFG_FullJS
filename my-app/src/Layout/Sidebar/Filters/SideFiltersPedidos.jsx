import React, { PureComponent } from 'react'
import {Nav} from 'reactstrap'
import SideItem from "../../../Components/SideItem/SideItem";
import FormatListBulletedTypeIcon from 'mdi-react/FormatListBulletedTypeIcon';
import CartIcon from 'mdi-react/CartIcon';
import TimerSandIcon from 'mdi-react/TimerSandIcon';
import CheckCircleIcon from 'mdi-react/CheckCircleIcon';
import CancelIcon from 'mdi-react/CancelIcon';
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import MapMarkerIcon from 'mdi-react/MapMarkerIcon';
export default class SideFiltersPedidos extends PureComponent {
  render() {
    return (
        <Nav vertical>
            <div className="sidebarTitle text-white">Filtros</div>
            <div>
                <SideItem dark href="#Todos" CurrentHash ={this.props.hash || "#Todos"} leftIcon={<FormatListBulletedTypeIcon/>} text="Todos" counter={150} bGColor="var(--pastelGray)" />
                <SideItem dark href="#Reservados" CurrentHash ={this.props.hash} leftIcon={<CartIcon/>} text="Reservados" counter={50} bGColor="#17a2b8" />
                <SideItem dark href="#NFPendende" CurrentHash ={this.props.hash} leftIcon={<TimerSandIcon/>} text="NF Pendente" counter={38} bGColor="hsla(25, 100%, 51%, 1)" />
                <SideItem dark href="#AEnviar" CurrentHash ={this.props.hash} leftIcon={<TimerSandIcon/>} text="À Enviar" counter={38} bGColor="hsla(35, 100%, 51%, 1)" />
                <SideItem dark href="#EmTransporte" CurrentHash ={this.props.hash} leftIcon={<TruckFastIcon/>} text="Em transporte" counter={38} bGColor="hsla(45, 100%, 51%, 1)" />
                <SideItem dark href="#Entregue" CurrentHash ={this.props.hash} leftIcon={<MapMarkerIcon/>} text="Entrege" counter={38} bGColor="#9ec983" />
                <SideItem dark href="#Completos" CurrentHash ={this.props.hash} leftIcon={<CheckCircleIcon/>} text="Completos" counter={15} bGColor="#6abf40" />
                <SideItem dark href="#Cancelados" CurrentHash ={this.props.hash} leftIcon={<CancelIcon/>} text="Cancelados" counter={7} bGColor="#d2697e" />
            </div>
        </Nav>
    )
  }
}
