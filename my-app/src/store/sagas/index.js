import {takeLatest,all} from 'redux-saga/effects'
import {fetchProdutos} from './produtos'
import * as pagination from './pagination'
import * as actions from '../actions/actionTypes'


export function* watchFetchProdutos(){
    yield takeLatest(actions.FETCH_PRODUTOS, fetchProdutos)
}
export function* watchPaginationChanges(){
    yield takeLatest(actions.CHANGE_ACTUAL_PAGE, pagination.changeActualPage)
    yield takeLatest(actions.CHANGE_BRAND, pagination.changeBrand)
    yield takeLatest(actions.CHANGE_DATES, pagination.changeDates)
    yield takeLatest(actions.CHANGE_ITEMS_PER_PAGE, pagination.changeItemsPerPage)
    yield takeLatest(actions.CHANGE_ORDER_BY, pagination.changeOrderBy)
    yield takeLatest(actions.CHANGE_SEARCH, pagination.changeSearch)
    yield takeLatest(actions.CHANGE_SORT, pagination.changeSort)
    yield takeLatest(actions.CHANGE_SIDE_FILTER_PROD_STATUS,pagination.changeStatus)
    yield takeLatest(actions.CLEAR_PAGINATION,pagination.clearPagination)

}
export default function* rootSaga(){
    yield all([
        watchFetchProdutos(),
        watchPaginationChanges()
    ])
}