import React, { Component, Suspense } from 'react';
import {Route,Switch, withRouter, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/index';
import { Nav } from 'reactstrap';
import SideItem from '../../Components/SideItem/SideItem';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

import "./Sidebar.css";

import Image from '../../img/vmais-novo-logo2.png'


import FinanceIcon from 'mdi-react/FinanceIcon';
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon'
import TruckFastIcon from 'mdi-react/TruckFastIcon';
import CoinIcon from 'mdi-react/CoinIcon';
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';
import SpeedometerIcon from 'mdi-react/SpeedometerIcon';
import SideFiltersVendas from './Filters/SideFiltersVendas';
import FormatListBulletedIcon from 'mdi-react/FormatListBulletedIcon'
import PlusBoxIcon from 'mdi-react/PlusBoxIcon'
import FileMultipleIcon from 'mdi-react/FileMultipleIcon'

const SideFiltersEnvios = React.lazy(()=>import('./Filters/SideFiltersEnvios'));
const SideFiltersProdutos = React.lazy(()=>import('./Filters/SideFiltersProdutos'));
const SideFiltersPedidos = React.lazy(()=>import('./Filters/SideFiltersPedidos'));
const SideFiltersPlps = React.lazy(()=>import('./Filters/SideFiltersPlps'));
const SideFiltersFinanceiro = React.lazy(()=>import('./Filters/SideFiltersFinanceiro'));
const SideFiltersMinhaConta = React.lazy(()=>import('./Filters/SideFiltersMinhaConta'));

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
class Sidebar extends Component{
    getCapitalizedHash= ()=>{
        if(this.props.location.hash && this.props.location.hash.length > 0) return capitalize(this.props.location.hash.slice(1).toLowerCase());
        else return null;
    }
    hashHandlerProdutos = () =>{
        let hash  = this.getCapitalizedHash();
        if(hash && (!this.props.status || this.props.status !== hash) ){
            if(hash ==='Todos') {
                this.props.onChangeStatus(null);
                return;
            }
        this.props.onChangeStatus(hash)
        }
    }

    hashHandler = ()=>{
        switch(this.props.location.pathname.slice(1)){
            case 'produtos':
                this.hashHandlerProdutos();
                return;
            case 'dashboard':
                return;
            default:
                return;
        }
    }

    componentDidMount(){
        this.hashHandler();
    }
    componentDidUpdate(){
        this.hashHandler();
    }

    render() {
        return (    
                
                <div className="justify-content-center align-items-center sidebar">
                    <SimpleBar style={{position:'unset',}} className="px-2">
                        <div className="text-center mb-3 pt-3">
                            <img src={Image} className="sideLogo" alt="Logo VendeMais"/>
                        </div>
                        <div className="sidebarStoreName text-white"> 
                            Loja: Vmais Matriz
                        </div>
                        <Nav vertical className="text-white mx-auto ">
                            <SideItem href="/dashboard" leftIcon={<SpeedometerIcon />} text="Dashboard" counter={23} />
                            <SideItem href="/produtos" leftIcon={<CubeOutlineIcon />} text="Produtos" counter={200} />
                            <Route path='/produtos' render ={()=>(
                                <ul className="subMenu mb-1">
                                    <li className="mb-1">
                                        <NavLink exact to="/produtos" className="d-flex align-items-center py-1 w-100"><FormatListBulletedIcon/> Lista de Produtos</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink exact to="/produtos/cadastro" className="d-flex align-items-center py-1 w-100"><PlusBoxIcon/>Cadastro de Produtos</NavLink>
                                    </li>
                                </ul>
                            )} />
                            <SideItem href="/pedidos" leftIcon={<ClipboardTextOutlineIcon />} text="Pedidos" counter={18} />
                            <SideItem href="/envios" leftIcon={<TruckFastIcon />} text="Envios" counter={43} />
                            <Route path='/envios' render ={()=>(
                                <ul className="subMenu mb-1">
                                    <li className="mb-1">
                                        <NavLink exact to="/envios" className="d-flex align-items-center py-1 w-100"><FormatListBulletedIcon/> Lista de Envios</NavLink>
                                    </li>
                                    <li className="mb-1">
                                        <NavLink exact to="/envios/plps" className="d-flex align-items-center py-1 w-100"><FileMultipleIcon/>Lista de PLPS</NavLink>
                                    </li>
                                </ul>
                            )} />
                            <SideItem href="/vendas" leftIcon={<CoinIcon />} text="Vendas" counter={9} />
                            <SideItem href="/financeiro" leftIcon={<FinanceIcon />} text="Financeiro" counter={3} />
                        </Nav>
                        <hr />
                        <Switch>
                            <Route path='/' exact render={()=>null} />
                            <Route path='/envios' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersEnvios hash={props.location.hash}/></Suspense>}/>
                            <Route path='/produtos' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersProdutos hash={props.location.hash}/></Suspense>}/>
                            <Route path='/pedidos' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersPedidos hash={props.location.hash}/></Suspense>}/>
                            <Route path='/plps' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersPlps hash={props.location.hash}/></Suspense>}/>
                            <Route path='/financeiro' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersFinanceiro hash={props.location.hash}/></Suspense>}/>
                            <Route path='/vendas' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersVendas hash={props.location.hash}/></Suspense>}/>
                            <Route path='/conta' render = {props=><Suspense fallback={<div>Carregando..</div>}><SideFiltersMinhaConta pathname={props.location.pathname}/></Suspense>}/>
                            
                        </Switch>
                    </SimpleBar> 
                </div>
        );
                              
    }
}
const mapStateToProps = (state) => {
	return {
	    status:state.pg.status
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onChangeStatus: (status) => dispatch(actionCreators.changeStatus(status)),
	};
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sidebar))
		
		