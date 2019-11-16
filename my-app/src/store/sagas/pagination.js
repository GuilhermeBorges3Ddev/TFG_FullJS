import {put} from 'redux-saga/effects'
import * as  actions from '../actions'

export function* changeOrderBy(){
    yield put(actions.fetchProdutos({},true));
}
export function* changeItemsPerPage(){
    yield put(actions.fetchProdutos({},true));
}
export function* changeBrand(){
    yield put(actions.fetchProdutos({},true));
}
export function* changeSort(){
    yield put(actions.fetchProdutos({},true));
}
export function* changeDates(){
    yield put(actions.fetchProdutos({},true));
}
export function* changeSearch(){
    yield put(actions.fetchProdutos({},true));
}
export function* changeActualPage(){
    yield put(actions.fetchProdutos({},false))
}
export function* changeStatus(){
    yield put(actions.fetchProdutos({},true))
}
export function* clearPagination(){
    yield put(actions.fetchProdutos({},true))
}