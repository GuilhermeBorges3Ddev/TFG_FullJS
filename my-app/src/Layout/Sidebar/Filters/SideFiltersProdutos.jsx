import {Nav} from 'reactstrap'
import SideItem from "../../../Components/SideItem/SideItem";

import FormatListBulletedTypeIcon from "mdi-react/FormatListBulletedTypeIcon";
import SquareEditOutlineIcon from "mdi-react/SquareEditOutlineIcon";
import EyeCircleIcon from "mdi-react/EyeCircleIcon";
import TimerSandIcon from "mdi-react/TimerSandIcon";
import CheckCircleIcon from "mdi-react/CheckCircleIcon";
import MinusCircleIcon from "mdi-react/MinusCircleIcon";
import TrashCanOutlineIcon from "mdi-react/TrashCanOutlineIcon";
import CancelIcon from "mdi-react/CancelIcon";

import React, { PureComponent } from 'react'

export default class SideFiltersProdutos extends PureComponent {
  render() {
    return (
        <Nav vertical>
            <div className="sidebarTitle text-white">Filtros</div>
            <div>
                <SideItem dark href="#Todos" CurrentHash ={this.props.hash || "#Todos"} leftIcon={<FormatListBulletedTypeIcon/>} text="Todos" counter={150} bGColor="var(--pastelGray)" />
                <SideItem  dark href="#Rascunho" CurrentHash ={this.props.hash} leftIcon={<SquareEditOutlineIcon/>} text="Rascunho" counter={50} bGColor="#8a9098" />
                <SideItem dark href="#Em_revisao" CurrentHash ={this.props.hash} leftIcon={<EyeCircleIcon/>} text="Em revisão" counter={38} bGColor="var(--orange)" />
                <SideItem dark href="#Em_catalogacao" CurrentHash ={this.props.hash} leftIcon={<TimerSandIcon/>} text="Em catalogação" counter={99} bGColor="var(--mustard)" />
                <SideItem  dark href="#Catalogados" CurrentHash ={this.props.hash} leftIcon={<CheckCircleIcon/>} text="Catalogados" counter={15} bGColor="var(--happyGreen)" />
                <SideItem  dark href="#Inativos" CurrentHash ={this.props.hash} leftIcon={<MinusCircleIcon/>} text="Inativos" counter={22} bGColor="var(--inactive)" />
                <SideItem href="#Lixeira" CurrentHash ={this.props.hash} leftIcon={<TrashCanOutlineIcon/>} text="Lixeira" counter={115} bGColor="black" />
                <SideItem  dark href="#Reprovados" CurrentHash ={this.props.hash} leftIcon={<CancelIcon/>} text="Rep. nos Marketp." counter={7} bGColor="var(--oldRed)" />
            </div>
        </Nav>
    )
  }
}

