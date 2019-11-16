import React, { Component } from 'react'
import axios from 'axios'
import './Pedidos.css'
import PedidoCard from './PedidoCard/PedidoCard';
import {Mobile, Desktop} from '../../Layout/ResponsiveRender'
import PedidoCardMobile from './PedidoCard/PedidoCardMobile';
export default class Pedidos extends Component {
  state={
    orders:null
  }
  getOrders = async ()=>{
    // let orders= await axios.get('http://192.168.50.32:3001/pedidos?_limit=100&step=3&status.name_ne=Cancelado')
    let orders= await axios.get('http://localhost:3001/pedidos?_limit=10')

    this.setState({orders:orders.data})
  } 

  componentDidMount(){
    this.getOrders()
  }
  render() {
    return (
      <div className={`pedidos d-flex flex-wrap w-100 toolbarPaddingMobile ${this.props.loading ? 'loading' : ''}`}  >
        <div className="loadingDiv py-1">
            <div className="spinner-border"/>
            <span className="sr-only">Loading...</span>
        </div>
        <div className="w-100 d-lg-none align-items-center  produtosPagiantionLabel text-center my-1">
          <span> <strong>0 </strong> de <strong>0</strong></span> 
          {/* <span> <strong>{(this.props.itemsPerPage * this.props.actualPage < this.props.total) ?  (this.props.itemsPerPage * this.props.actualPage) : this.props.total  }</strong> de <strong> {this.props.total}</strong></span>  */}
        </div>
        
            <Desktop>
              <table className="w-100">
                <tbody>
                  {this.state.orders? this.state.orders.map((order,i)=>(
                    <PedidoCard data ={order} key={i}/>
                  )) : null}
                </tbody>
              </table>
            </Desktop>
            <Mobile>
              {this.state.orders? this.state.orders.map((order,i)=>(
                  <PedidoCardMobile data ={order} key={i}/>
                )) : null}
            </Mobile>
           
        
      </div>
    )
  }
}
