import React,{Suspense} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actionCreators from '../../../store/actions/index';

import PlusIcon from 'mdi-react/PlusIcon'
import {Mobile, Desktop} from '../../../Layout/ResponsiveRender'
const ProdutoCardMobile = React.lazy(()=>import('./ProdutosListaCard/ProdutosListaCardMobile'));
const ProdutoCard = React.lazy(()=>import('./ProdutosListaCard/ProdutosListaCard'));
const ProdutosListaStyled = styled.div`
    .produtos {
        position: relative;
    }
    .produtos table{
        border-collapse:separate; 
        border-spacing:0 8px; 
    }
    .produtos .produtosPagiantionLabel{
        color:#6c757d
    }
    .loadMore button{
        color:rgba(255, 255, 255, 0.911);
        background-color: #014c74;
        font-weight: 600;
        border-radius: 18px;
        padding: 2px 16px;
    }
    .loadMore button:hover{
        color:white;
        background-color: #024369;
        
    }
    .loadMore button .mdi-icon{
        height: 17px;
        stroke:white;
        stroke-width: 1.4px;
    }
`;

class ProdutosLista extends React.PureComponent{
    componentDidMount(){
        if(this.props.results.length === 0 && !this.props.loading) this.props.onLoadProdutos(null,true)
    }
    render(){  
        return (
            <ProdutosListaStyled>    
                <div className={`produtos d-flex flex-wrap w-100 toolbarPaddingMobile text-muted ${this.props.loading ? 'loading' : ''}`} >
                    <div className="loadingDiv py-1">
                        <div className="spinner-border"/>
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div className="w-100 d-lg-none align-items-center  produtosPaginationLabel text-center my-1">
                        <span> <strong>{(this.props.itemsPerPage * this.props.actualPage < this.props.total) ?  (this.props.itemsPerPage * this.props.actualPage) : this.props.total  }</strong> de <strong> {this.props.total}</strong></span> 
                    </div>
                    <Desktop>
                        <Suspense fallback={<div>Carregando..</div>}>
                            <table className="w-100">
                                <tbody>
                                    {this.props.results ? this.props.results.map((el,i)=>(
                                        <ProdutoCard key={i} data={el}/>
                                    )): null}
                                </tbody>
                            </table>
                        </Suspense>
                    </Desktop>
                    <Mobile>
                        <Suspense fallback={<div>Carregando..</div>}>
                            {this.props.results ? this.props.results.map((el,i)=>(
                                <ProdutoCardMobile key={i} data={el}/>
                            )): null}
                        </Suspense>
                    </Mobile>
                    <div className={`w-100 justify-content-center align-items-center loadMore mb-2   d-flex ${this.props.loading? 'invisible' :''}`}>
                        {((this.props.itemsPerPage * this.props.actualPage) < this.props.total) ? 
                            <button onClick={this.props.onChangeActualPage} type="button" className="btn justify-content-center align-items-center d-flex responsiveFont16 p-05 pr-4" > <PlusIcon/> CARREGAR MAIS </button>
                            : <div className="responsiveFont16">{this.props.total? 'Fim dos Resultados' : 'Sem resultados'}</div>}
                    </div>
                </div>
            </ProdutosListaStyled>
        );
    }
}
const mapStateToProps = state => {
    return {
        ...state.prod,
        ...state.pg

    }
};

const mapDispatchToProps = dispatch => {
    return {
        onLoadProdutos: (params,reset) => dispatch(actionCreators.fetchProdutos(params,reset)),
        onChangeActualPage: () => dispatch(actionCreators.changeActualPage()),
        onChangeItemsPerPage: (itemsPerPage) => dispatch(actionCreators.changeItemsPerPage(itemsPerPage)),
        onChangeBrand: (brand) => dispatch(actionCreators.changeBrand(brand)),
        onChangeOrderBy: (orderBy) => {dispatch(actionCreators.changeOrderBy(orderBy))},
        onChangeSort: (sort) => dispatch(actionCreators.changeSort(sort)),
        onChangeSearch: (search) => dispatch(actionCreators.changeSearch(search)),
        onChangeDates: (dates) => dispatch(actionCreators.changeDates(dates))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProdutosLista);
