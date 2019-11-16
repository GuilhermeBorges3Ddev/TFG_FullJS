import * as actions from '../actions';
import {select,put,call } from 'redux-saga/effects';
import axios from 'axios';



export function* fetchProdutos(action){
  
    let options =  {...yield select(state=>state.pg), ...action.params}
    // let userId = yield select(state=>state.prod.userId);
    let brand = options.brand ? `&brand_name=${options.brand}` :'';
    let search = options.search ? `&q=${options.search}` :'';
    let dateFrom = options.dateFrom ? `&created_at_gte=${options.dateFrom}` :'';
    let dateTo = options.dateTo ? `&created_at_lte=${options.dateTo}` :'';
    let status = options.status ? `&status_column=${options.status}` :'';

    yield put(actions.fetchProdutosStart());
    try{
        let res= yield call(axios.get, (`http://localhost:3001/produtos?_sort=${options.orderBy}&_order=${options.sort}&_limit=${options.itemsPerPage}&_page=${options.actualPage}${brand}${search}${dateFrom}${dateTo}${status}`));

        // let res= yield call(axios.get, (`http://192.168.50.32:3001/produtos?user_id=${userId}&_sort=${options.OrderBy}&_order=${options.Sort}&_limit=${options.ItemsPerPage}&_page=${options.ActualPage}${brand}${search}${dateFrom}${dateTo}`));
        yield put(actions.fetchProdutosSuccess(res,(action.reset || false)));
        console.log(res)
        
    }catch(error){
        yield put(actions.fetchProdutosFail(error));
    }
        
    
};

