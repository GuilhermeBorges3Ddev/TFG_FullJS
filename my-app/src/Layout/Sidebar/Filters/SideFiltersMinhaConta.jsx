import React, { PureComponent } from 'react'
import {Nav} from 'reactstrap'
import SideItem from "../../../Components/SideItem/SideItem";

import BallotRecountIcon from "mdi-react/BallotRecountIcon";
import CityVariantOutlineIcon from "mdi-react/CityVariantOutlineIcon";
import FolderIcon from "mdi-react/FolderIcon";
import BankIcon from "mdi-react/BankIcon";
import AccountMultipleIcon from "mdi-react/AccountMultipleIcon";
import SettingsIcon from "mdi-react/SettingsIcon";

export default class SideFiltersMinhaConta extends PureComponent {
  render() {
    return (
        <Nav vertical>
            <div className="sidebarTitle text-white"><small>Minha Conta</small></div>
            <div>
                <SideItem href="/conta/info-cadastrais" CurrentHash ={this.props.pathname} leftIcon={<BallotRecountIcon/>} text="Info. Cadastrais" />
                <SideItem href="/conta/sub-lojas" CurrentHash ={this.props.pathname} leftIcon={<CityVariantOutlineIcon/>} text="Sub Lojas" />
                <SideItem href="/conta/documentos" CurrentHash ={this.props.pathname} leftIcon={<FolderIcon/>} text="Documentos" />
                <SideItem href="/conta/dados-bancarios" CurrentHash ={this.props.pathname} leftIcon={<BankIcon/>} text="Dados Bancarios" />
                <SideItem href="/conta/usuarios" CurrentHash ={this.props.pathname} leftIcon={<AccountMultipleIcon/>} text="Usuários" />
                <SideItem href="/conta/configuracoes" CurrentHash ={this.props.pathname} leftIcon={<SettingsIcon/>} text="Configurações" />
            </div>
        </Nav>
    )
  }
}
