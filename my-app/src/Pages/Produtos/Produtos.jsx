import {Route, Switch} from 'react-router-dom';
import React, { Component } from 'react'
import Cadastro from './ProdutosCadastro/ProdutosCadastro'
import Lista from './ProdutosLista/ProdutosLista'

export default class Produtos extends Component {
  render() {
    return (
        <Switch>
            <Route path="/produtos/cadastro" component={Cadastro} />
            <Route exacts path="/produtos" component={Lista} />
        </Switch>
    )
  }
}
