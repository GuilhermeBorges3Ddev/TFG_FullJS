import React, { Component,Suspense } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
// import Produtos from '../Containers/Produtos/Produtos';
import Sidebar from './Sidebar/Sidebar';
import './Layout.css';
import Media from 'react-media';

const Dashboard = React.lazy(()=>import('../Pages/Dashboard/Dashboard'));
const Envios = React.lazy(()=>import('../Pages/Envios/Envios')); 
const Produtos = React.lazy(()=>import( '../Pages/Produtos/Produtos'));
const Pedidos = React.lazy(()=>import( '../Pages/Pedidos/Pedidos'));
const Financeiro = React.lazy(()=>import('../Pages/Financeiro/Financeiro'));
const Vendas = React.lazy(()=>import('../Pages/Vendas/Vendas'));
//Here is the pages inside 'Menu de Configurações'
const MinhaConta = React.lazy(()=>import('../Pages/MinhaConta/MinhaConta'));
const SubLojas = React.lazy(()=>import('../Pages/MinhaConta/MinhaContaPages/SubLojas/SubLojas'));
const Termos = React.lazy(()=>import('../Pages/Termos/Termos'));
const Canais = React.lazy(()=>import('../Pages/Canais/Canais'));
const Catalogo = React.lazy(()=>import('../Pages/Catalogo/Catalogo'));

//VanillaJs throttle implementation
function throttle(fn, wait) {
    var time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
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


class Layout extends Component {
    constructor(props){
        super(props)
        //Creates a ref to be used to monitor layoutConainer scroll and so the navbar collapsing/expand logic on mobile
        this.layoutContainerRef = React.createRef();
    }
    state ={
        lastLayoutContainerScrollTop:null,
        navCollapsed:false,
        sideCollapsed:true,
        scrollbarWidth:null,
        mobile: true,
        logged:false
    }
    componentDidMount(){
        //Creates event listener to trigger the navbar collasping/expanding logic on scroll(with 100ms throttle(max 10 function calls per second))
        this.layoutContainerRef.current.addEventListener('scroll', this.throttledMobileNavbarCollapseOnScroll );
        window.addEventListener('resize', this.mobileNavbarCollapseOnScroll);

        //Checks the viewportWidth to set the state.mobile accordingly
        if(window.innerWidth > 991){
            this.setState({mobile:false});
        }
        //Gets the scrollbarWidth( to calculate the width of fixed position pagination/filter/search toolbar 
        //(to match layoutContentContainer(100vw) width subtracted the scrollWidth(?) = layoutContent width))
        //this aproach is much better and less expensive than monitoring LayoutContent width, since scrollbar width never changes per browser per device
        //comoponentDidMount is called when all child components are monted but parent is about to mount
        //(not mounted yet at execution time) using 0ms timeout ensure that all child and the parent element is munted and rendered (because of assincronous nature of js)

        setTimeout( ()=>{
            // Create the measurement node
            var scrollDiv = document.createElement("div");
            scrollDiv.className = "scrollbar-measure";
            document.body.appendChild(scrollDiv);
        
            // Get the scrollbar width
            var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    
            // Delete the DIV 
            document.body.removeChild(scrollDiv)

            this.setState({
                scrollbarWidth: scrollbarWidth
            })
        },0);
    }
    
    //Remove eventListener on component unmount
    componentWillUnmount(){
        this.layoutContainerRef.current.removeEventListener('scroll', this.throttledMobileNavbarCollapseOnScroll);
        window.removeEventListener('resize',this.mobileNavbarCollapseOnScroll);
    }
    
    //navbar collpase/expand logic (mobile only)
    mobileNavbarCollapseOnScroll = () =>{
        //if it's not a mobile, navbar never collapses
        if(!this.state.mobile){
            if(this.state.navCollapsed) this.setState({navCollapsed:false})
            return
        }
        this.setState(state =>{
            if(this.layoutContainerRef.current.scrollTop <50){
                return {navCollapsed:false}
            }
            //check if  an a previous scrollTop to calculate the delta with actual scrolltop (if it was scrolled down or up)
            if(state.lastLayoutContainerScrollTop !==null){
                //navbar will expand only if the user scrolled up and if he hist at least 50px up the scroll bottom
                if(state.lastLayoutContainerScrollTop > this.layoutContainerRef.current.scrollTop &&  this.layoutContainerRef.current.scrollHeight - this.layoutContainerRef.current.clientHeight - this.layoutContainerRef.current.scrollTop> 50 ){
                    return {navCollapsed:false, lastLayoutContainerScrollTop:this.layoutContainerRef.current.scrollTop}
                //if the user scrolled down the navbar and sidebar will collapse
                }else if(state.lastLayoutContainerScrollTop < this.layoutContainerRef.current.scrollTop  && this.layoutContainerRef.current.scrollTop >50){
                    return{navCollapsed:true, sideCollapsed:true, lastLayoutContainerScrollTop:this.layoutContainerRef.current.scrollTop}
                }            
            }
            
            //if there ir not an previous scrolltop the function will only save the scrolltop to the state 
            return {lastLayoutContainerScrollTop:this.layoutContainerRef.current.scrollTop};
        })
        
    }
    throttledMobileNavbarCollapseOnScroll = throttle(this.mobileNavbarCollapseOnScroll,100);

    handleSideTriggerClick = ()=>{
        this.setState(state =>{
            return {
                sideCollapsed:!state.sideCollapsed
            }
        })
    }
    render() {
        

        return (
            
            //if its on mobile the sidebar will colappse acording to state.sideCollapsed value, else it will be always expanded (achieved removing collapsed class independently of state.sideCollapsed)
            <div className={`homeLayout ${this.state.mobile ? (this.state.sideCollapsed ? "collapsed " :"") : ""} ${this.state.navCollapsed ? "navCollapsed " : ""}`}>
                {/* Monitor viewPort width changes to set state.mobile accordingly */}
                <Media 
                    query={{maxWidth:991}}
                    onChange={match=>{
                        if(!match && this.state.mobile) this.setState({mobile:false})
                        else if(match && !this.state.mobile) this.setState({mobile:true})
                        
                    }}
                />

                <div>
                    {/* Navbar needs sideCollapsed props to collapse/expand accordingly, it need the scrollbarWidth too, to manipulate the toolbar component width thats in it, and the mobile props to do some some responsiveness  */}
                    <Navbar onClickSideTrigger={this.handleSideTriggerClick} sideCollapsed={this.state.mobile ? this.state.sideCollapsed :false} scrollbarWidth ={this.state.scrollbarWidth} mobile={this.state.mobile}></Navbar>
                    <div className="layoutContentContainer" ref={this.layoutContainerRef}>
                        <div className="layoutContent p-2">
                            {/* the switch component only will consider the first matching route inside it */}
                            <Switch> 
                                <LazyRoute path='/produtos' lazyComponent={<Produtos/>} />
                                <LazyRoute path='/pedidos' lazyComponent={<Pedidos/>} />
                                <LazyRoute path='/envios' lazyComponent={<Envios/>} />
                                <LazyRoute path='/financeiro' lazyComponent={<Financeiro/>} />
                                <LazyRoute path='/vendas' lazyComponent={<Vendas/>} />
                                <LazyRoute path='/dashboard' lazyComponent={<Dashboard/>} />
                                <LazyRoute path='/conta' lazyComponent={<MinhaConta/>} />
                                <LazyRoute path='/sub-lojas' lazyComponent={<SubLojas/>} />
                                <LazyRoute path='/termos' lazyComponent={<Termos/>} />
                                <LazyRoute path='/canais' lazyComponent={<Canais/>} />
                                <LazyRoute path='/catalogo' lazyComponent={<Catalogo/>} />
                                <Route path='/404' render={()=>(
                                    <div className="jumbotron">
                                        <h1 className="display-4">404 Não Encotrado</h1>
                                        <p className="lead text-center">A Página a qual você tentou acessar não existe</p>
                                    </div>
                                )}/>       
                                <Redirect from='/' exact to='/dashboard'/>
                                <Redirect from='/' to='/404'/>
                            </Switch>
                            
                        </div>
                    </div>
                </div>
                <Sidebar ></Sidebar>
            </div>
            
        );
    }
}
export default Layout;