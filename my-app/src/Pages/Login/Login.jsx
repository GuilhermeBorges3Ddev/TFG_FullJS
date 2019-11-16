import React, { Component } from 'react'
import {Redirect,NavLink} from 'react-router-dom'
import './Login.css'
import AtIcon from 'mdi-react/AtIcon'
import LockIcon from 'mdi-react/LockIcon'
import logo from "../../img/vmais-novo-logo.png"


export default class Login extends Component {
  render() {
    return (
        this.props.logged?<Redirect exact to={new URLSearchParams(this.props.location.search).get('redir') || '/dashboard'}/>:

        <div className="flexCenter login bg-deepDarkBlue vh-100 vw-100 ">
            <div className="rounded-xl bg-deepDarkBlue loginContainer shadow flex-wrap p-4 text-light text-center ">
              <h1>Bom te ver novamente!</h1>
              <div className="d-flex justify-content-center align-items-end">
                <p className="m-0">Faça login na sua conta</p> 
                <div className="inline-flex w-min ml-2" style={{height:'1.75rem'}}>
                  <img alt="logo vende mais" className="h-100"src={logo}/>
                </div> 
              </div>
              
              
              
              <form action="">
                <div className="d-flex mt-3 position-relative  loginInputContainer font-semibold">
                  <input type="email" name="email" required className="form-control font-semibold" placeholder="Email" aria-label="Email"/>
                  <AtIcon/>
                </div>
                <div className="d-flex mt-3 position-relative loginInputContainer font-semibold">
                  <input type="password" required className="form-control font-semibold" placeholder="Senha" aria-label="Senha" />
                  <LockIcon/>
                </div>
                {/* <div className="d-flex justify-content-start align-items-end ">
                  <Checkbox nativeControlId='remember'/>
                  <label htmlFor='remember'>Lembar-me</label>
                </div> */}
                <div className="pt-3 flexCenter flex-wrap">
                  <button  type="submit" className=" w-50 hover-scale loginButton  button-hover-brighten py-1" onClick={this.props.onLogin}>
                      <div className="hover-scale-noscale font-semibold">Entrar</div>
                  </button>
                  <div className="flexCenter text-center w-100">
                    <NavLink to="forgot-password"className="text-light">
                      <small>Esqueceu a Senha?</small>
                    </NavLink>
                  </div>
                </div>
              </form>
              
            
            </div>
            
            
        </div>
    )
  }
}
