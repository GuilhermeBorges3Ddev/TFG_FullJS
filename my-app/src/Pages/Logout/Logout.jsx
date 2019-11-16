import React, { Component } from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import moment  from 'moment'
import './Logout.css'
import logo from "../../img/vmais-novo-logo.png"
import WhiteBalanceSunnyIcon from 'mdi-react/WhiteBalanceSunnyIcon'
import WeatherNightIcon from 'mdi-react/WeatherNightIcon'

class Logout extends Component {
  getLogoutMessage = () =>{
    let now = moment().get('hour');
    if(now >=6 && now < 12) return {txt:'Tenha um bom dia!',icon:<WhiteBalanceSunnyIcon/>};
    if(now >=12 && now < 18) return {txt:'Tenha uma boa tarde!',icon:<WhiteBalanceSunnyIcon/>};
    if(now >=18 || now < 6) return {txt:'Tenha uma boa noite!',icon:<WeatherNightIcon/>};

  }
  render() {
    return (

      <div className="flexCenter bg-dark vh-100 vw-100 logout text-white">
        <div className="rounded-xl bg-deepDarkBlue logoutContainer shadow flex-wrap p-4 text-light text-center w-min text-nowrap ">
          <div className="w-min logo" style={{height:'1.75rem'}}>
            <img alt="logo vende mais" className="h-100"src={logo}/>
          </div> 
          {!this.props.logged? (
            <React.Fragment>
              <h2 className="w-100 text-center header">Você saiu, esperamos te ver em breve.</h2> 
              <h1 className="w-100 text-center msg">{this.getLogoutMessage().txt}</h1>
              <div className="flexCenter icon mb-3 text-vmaisOrange">{this.getLogoutMessage().icon}</div>
              <NavLink to='/login' label='Go to Login Page'><button type="button" className="btn btn-sm btn-light"> Ir para tela de Login</button></NavLink>
            </React.Fragment>
                  
            
          ):(
            <div className=" d-flex align-items-center justify-content-end flex-wrap">
                <h1 className="w-100 d-none d-lg-block text-white">Tem certeza que deseja sair?</h1>
                <h5 className="w-100 d-lg-none mb-3 text-white">Tem certeza que deseja sair? </h5>
                <button type="button" className="btn btn-sm btn-secondary text-white  mr-3" onClick={this.props.history.goBack}>Voltar</button>
                <button type="button" className="btn btn-sm btn-danger text-white" onClick={this.props.onLoggout}>Sair</button>
                

            
            </div>
          )}
          
        </div>
        
      </div>
    )
  }
}
export default withRouter(Logout);