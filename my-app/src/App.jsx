import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Layout from './Layout/Layout';
import 'react-dates/initialize';
import 'moment/locale/pt-br';
import * as moment from 'moment';
import styled from 'styled-components';
import Login from './Pages/Login/Login';
import Logout from './Pages/Logout/Logout';
import Catalogo from './Pages/Catalogo/Catalogo';
moment.locale('pt-BR')

const AppStyle = styled.div`
    .App {
        text-align: center;
    }  
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
        height: 40vmin; 
    }  
    .App-header {
        background-color: #429b13;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: #bdc3c7; 
    }  
    .App-link {
        color: #61dafb; 
    }  
    .full-height {
        height: 1500px; 
    }  
    @keyframes App-logo-spin {
        from {
        transform: rotate(0deg); 
        }
        to {
        transform: rotate(360deg); 
        } 
    }  
`;

class App extends Component {
    state = {
        logged: null
    }
    login = () => {
        localStorage.setItem('logged', true)
        this.setState({ logged: true });

    }
    loggout = () => {
        localStorage.setItem('logged', false)
        this.setState({ logged: false });

    }
    componentDidMount() {
        if (JSON.parse(localStorage.getItem('logged'))) this.login();
        else this.loggout();
    }
    render() {

        return (
            this.state.logged === null ? null : (
                <Switch>
                    <AppStyle>
                        <Route path='/login' render={(props) => <Login onLogin={this.login} logged={this.state.logged} {...props} />} />
                        <Route path='/logout' render={(props) => <Logout onLoggout={this.loggout} logged={this.state.logged} {...props} />} />
                        <Route path='/catalogo' component={Catalogo} />
                        {/* Pleasse remove next line  this afer finishing Caalogo PAge */}
                        {/* <Redirect from='/' exact to='/catalogo' /> */}
                        {/* {!this.state.logged ? <Redirect to={`/login?redir=${this.props.location.pathname}`} /> : null} */}
                        <Route path="/" component={Layout} />
                    </AppStyle>
                </Switch>)
        );
    }
}

export default withRouter(App);
