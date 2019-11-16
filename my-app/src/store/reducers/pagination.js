import * as actionTypes from '../actions/actionTypes';
const initialState = {
    actualPage:1,
    itemsPerPage:10,
    showingFrom:null,
    showingTo:null,
    orderBy:'created_at',
    sort:'desc',
    dateFrom:null,
    dateTo:null,
    brand:null,
    search:'',
    status:null
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case actionTypes.CHANGE_ITEMS_PER_PAGE: return {...state, itemsPerPage: action.itemsPerPage, actualPage:1};
        case actionTypes.CHANGE_ORDER_BY: return{...state, orderBy:action.orderBy, sort: state.sort === 'asc' ? 'desc': 'asc', actualPage:1};
        case actionTypes.CHANGE_SORT: return {...state, sort:action.options.sort, orderBy:action.options.orderBy, actualPage:1};
        case actionTypes.CHANGE_DATE_FROM: return {...state, dateFrom:action.dateFrom, actualPage:1};
        case actionTypes.CHANGE_DATE_TO: return {...state, dateTo:action.dateTo, actualPage:1};
        case actionTypes.CHANGE_DATES: return {...state, dateTo:action.dateTo, dateFrom:action.dateFrom, actualPage:1};
        case actionTypes.CHANGE_BRAND: return {...state, brand:action.brand, actualPage:1};
        case actionTypes.CHANGE_SEARCH: return {...state, search:action.search, actualPage:1};
        case actionTypes.CHANGE_ACTUAL_PAGE: return {...state, actualPage: action.actualPage || (state.actualPage + 1)};
        case actionTypes.CHANGE_SIDE_FILTER_PROD_STATUS : return {...state, status:action.status, actualPage:1};
        case actionTypes.CLEAR_PAGINATION: return {...initialState};
        
        default:
            return state;
    }
    

   
};

export default reducer;