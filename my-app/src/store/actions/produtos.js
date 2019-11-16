import * as actionTypes from './actionTypes';

export const fetchProdutosStart = () =>({
    type:actionTypes.FETCH_PRODUTOS_START,

});

export const fetchProdutosSuccess = (res,reset) =>({
    type:actionTypes.FETCH_PRODUTOS_SUCCESS,
    res,
    reset
});

export const fetchProdutosFail = (error) =>({
    type:actionTypes.FETCH_PRODUTOS_FAIL,
    error
});

export const fetchProdutos = (params, reset)=> ({
    type:actionTypes.FETCH_PRODUTOS,
    params:params,
    reset:reset
})

