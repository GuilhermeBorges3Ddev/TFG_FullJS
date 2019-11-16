import React, {Suspense} from 'react';
import BellIcon from 'mdi-react/BellIcon';
import ArrowExpandRightIcon from 'mdi-react/ArrowExpandRightIcon';
import ArrowCollapseLeftIcon from 'mdi-react/ArrowCollapseLeftIcon';
import BallotRecountIcon from 'mdi-react/BallotRecountIcon';

import {withRouter} from 'react-router'
import {Route, Switch} from 'react-router-dom';
import './Navbar.css';
import Image from '../../img/profilePhoto.JPG';
// import Toolbar from '../Components/Toolbar/Toolbar';
import NavMenu from './NavMenu/NavMenu';
import {Desktop} from '../ResponsiveRender';
import CityVariantOutlineIcon from 'mdi-react/CityVariantOutlineIcon';
import LibraryBooksIcon from 'mdi-react/LibraryBooksIcon';
import ArrowExpandAllIcon from 'mdi-react/ArrowExpandAllIcon';
import AccountMultipleIcon from "mdi-react/AccountMultipleIcon";
import FolderIcon from 'mdi-react/FolderIcon';
import BankIcon from 'mdi-react/BankIcon';
import SettingsIcon from "mdi-react/SettingsIcon";

//NavToolBars (Route dependent)
const PlusBoxIcon = React.lazy(()=>import('mdi-react/PlusBoxIcon'));
const NavToolbarProdutos = React.lazy(()=>import('./NavbarRouteDependent/NavToolbars/NavToolbarProdutos'));
const NavToolbarPedidos = React.lazy(()=>import('./NavbarRouteDependent/NavToolbars/NavToolbarPedidos'));
const NavToolbarEnvios = React.lazy(()=>import('./NavbarRouteDependent/NavToolbars/NavToolbarEnvios'));
const NavToolbarEnviosPlps = React.lazy(()=>import('./NavbarRouteDependent/NavToolbars/NavToolbarEnviosPlps'));
const NavToolbarVendas = React.lazy(()=>import('./NavbarRouteDependent/NavToolbars/NavToolbarVendas'));
const NavToolbarFinanceiro = React.lazy(()=>import('./NavbarRouteDependent/NavToolbars/NavToolbarFinanceiro'));

//NavMisc, like buttons(Route Dependente)
const NavMiscEnvios = React.lazy(()=>import('./NavbarRouteDependent/NavMisc/NavMiscEnvios'));
const NavMiscFinanceiro = React.lazy(()=>import('./NavbarRouteDependent/NavMisc/NavMiscFinanceiro'));

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const LazyRoute = (props)=>(
    <Route 
        path={props.path} 
        exact={props.exact}
        render={(routeProps)=>(
            <Suspense fallback={<div>Carregando..</div>}>{React.cloneElement(props.lazyComponent,routeProps)}</Suspense>
        )} 
    />
);
const NavDesktopPageIndicator = (props)=>(
	<Route path={props.path} render ={() =>(
		<Suspense fallback={<div>Carregando...</div>}>
			<div className="inlineFlexCenter text-capitalize">
				{props.icon? <props.icon size={22} className="mr-2" /> :null}
				<h5 className="text-muted m-0">
					{props.title}
				</h5>
			</div>
		</Suspense>
	)}/>
);

class Navbar extends React.PureComponent {
	render() {
		return (
			<div className="navbar p-0 px-3 ">
				<div className="sideTrigger d-lg-none" onClick={this.props.onClickSideTrigger}>
					<div className="sideTLogo" />
					<div className="sideTIcon flexCenter">
						{this.props.sideCollapsed ? <ArrowExpandRightIcon /> : <ArrowCollapseLeftIcon />}{' '}
					</div>
				</div>
				{/* Mobile only current Page indicator  */}
				<span className="navCurrentPageTitle d-lg-none" onClick={this.props.onClickSideTrigger}>
					{capitalize(this.props.location.pathname.slice(1))}
				</span>
				{/* END - Mobile only current Page indicator */}

				{/* DESKTOP ONLY - NavBar Current Page Indicator() */}
				<Desktop>
					<Switch>
						<NavDesktopPageIndicator path='/conta/info-cadastrais' icon={BallotRecountIcon} title="informações cadastrais"/>
						<NavDesktopPageIndicator path='/conta/sub-lojas' icon={CityVariantOutlineIcon} title="sub lojas"/>
						<NavDesktopPageIndicator path='/conta/documentos' icon={FolderIcon} title="documentos"/>
						<NavDesktopPageIndicator path='/conta/dados-bancarios' icon={BankIcon} title="dados bancarios"/>
						<NavDesktopPageIndicator path='/conta/usuarios' icon={AccountMultipleIcon} title="usuários" />
						<NavDesktopPageIndicator path='/conta/configuracoes' icon={SettingsIcon} title="configurações" />
						<NavDesktopPageIndicator path='/termos' icon={LibraryBooksIcon} title="termos de uso"/>
						<NavDesktopPageIndicator path='/canais' icon={ArrowExpandAllIcon} title="canais de venda"/>
						<NavDesktopPageIndicator path='/produtos/cadastro' icon={PlusBoxIcon} title="Cadastro de produtos"/>

						
					</Switch>
				</Desktop>
				{/* END - DESKTOP ONLY  NavBar Current Page Indicator*/}

				{/* Navbar Toolbars Container (Route dependent) */}
				<div
					className="toolbarContainer flex-grow-1 "
					style={{ width: this.props.mobile ? 'calc(100% - ' + this.props.scrollbarWidth + 'px)' : 'unset' }}
				>	
					
					<Switch>
						<LazyRoute exact path="/produtos" lazyComponent={<NavToolbarProdutos/>}/>
						<LazyRoute  path="/pedidos" lazyComponent={<NavToolbarPedidos/>}/>
						<LazyRoute  exact path="/envios" lazyComponent={<NavToolbarEnvios/>}/>
						<LazyRoute  exact path="/envios/plps" lazyComponent={<NavToolbarEnviosPlps/>}/>
						<LazyRoute  exact path="/financeiro" lazyComponent={<NavToolbarFinanceiro/>}/>
						<LazyRoute  exact path="/vendas" lazyComponent={<NavToolbarVendas/>}/>
					</Switch>
					
				</div>
				{/* END -Navbar Toolbars Container (Route dependent) */}

				<div className="navMisc">
					<Switch>
						<LazyRoute exact path='/envios' lazyComponent={<NavMiscEnvios/>} />
						<LazyRoute exact path='/financeiro' lazyComponent={<NavMiscFinanceiro/>} />
					</Switch>
				</div>

				<div className="flexCenter navRight ml-auto">
					<div className="navRing mr-2">
						<BellIcon className="navRingIcon" />
						<div className="navRingCounter">29</div>
					</div>

					<div className="navAvatarDiv flexCenter mr-2">
						<img src={Image} className="navAvatarImg" alt="Avatar" />
					</div>
					<span className="mr-2 d-none d-lg-block">Usuário Teste</span>
					<NavMenu />
				</div>
				{/* Mobile Only, Clicking outside sidebar when its expanded will collapse it */}
				<div className="sideBackdropTrigger d-lg-none" onClick={this.props.onClickSideTrigger} />
			</div>
		);
	}
}
export default withRouter(Navbar);
