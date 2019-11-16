import React, { Component, Suspense } from 'react'
import {Route, Switch} from 'react-router-dom'
import Lista from './EnviosLista/EnviosLista'
const Plps = React.lazy(()=>import('./EnviosPlps/EnviosPlps'));

const LazyRoute = (props)=>(
  <Route 
      path={props.path} 
      exact={props.exact}
      render={(routeProps)=>(
          <Suspense fallback={<div>Carregando..</div>}>{React.cloneElement(props.lazyComponent,routeProps)}</Suspense>
      )} 
  />
);

export default class Envios extends Component {
  render() {
    return (
        <Switch>
            <LazyRoute path="/envios/plps" lazyComponent={<Plps/>} />
            <Route exact path="/envios" component={Lista} />
        </Switch>
    )
  }
}
