import * as actionTypes from '../actions/actionTypes';
const initialState = {
    userId:56,
    results:[],
    loading:false,
    error:null,
    total:0

    
}
const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.FETCH_PRODUTOS_SUCCESS: return {...state, results: action.reset? action.res.data : state.results.concat(action.res.data), loading:false, total: Number(action.res.headers['x-total-count'])};
        case actionTypes.FETCH_PRODUTOS_START:return { ...state, loading:true};
        case actionTypes.FETCH_PRODUTOS_FAIL: return {...state, error:action.error, loading:false};
        default:
            return state;
    }
    

   
};

export default reducer;