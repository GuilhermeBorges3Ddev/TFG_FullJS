import * as actionTypes from './actionTypes';

export const changeOrderBy = (orderBy) =>({
    type:actionTypes.CHANGE_ORDER_BY,
    orderBy
});
export const changeItemsPerPage = (itemsPerPage) =>({
    type:actionTypes.CHANGE_ITEMS_PER_PAGE,
    itemsPerPage
});
export const changeBrand = (brand) =>({
    type:actionTypes.CHANGE_BRAND,
    brand
});

export const changeSort = (options) =>({
    type:actionTypes.CHANGE_SORT,
    options
});
export const changeDateFrom = (dateFrom) =>({
    type:actionTypes.CHANGE_DATE_FROM,
    dateFrom
});
export const changeDateTo = (dateTo) =>({
    type:actionTypes.CHANGE_DATE_TO,
    dateTo
});
export const changeDates = (dates)=>({
    type:actionTypes.CHANGE_DATES,
    dateTo:dates ? dates.endDate : null,
    dateFrom: dates?dates.startDate : null
    
})
export const changeSearch = (search) =>({
    type:actionTypes.CHANGE_SEARCH,
    search
});
export const changeActualPage = (actualPage) =>({
    type:actionTypes.CHANGE_ACTUAL_PAGE,
    actualPage
});
export const changeStatus = (status) =>({
    type:actionTypes.CHANGE_SIDE_FILTER_PROD_STATUS,
    status
})
export const clearPagination = () =>({
    type:actionTypes.CLEAR_PAGINATION
})
//---------------------------------------------------------------

// export const changeOrderBy =(orderBy) =>{
//     return async(dispatch)=>{
//         dispatch(setOrderBy(orderBy));
//         await dispatch(fetchProdutos({},true));
//     }
// }
// export const changeItemsPerPage =(itemsPerPage) =>{
//     return async (dispatch)=>{
//         dispatch(setItemsPerPage(itemsPerPage));
//         await dispatch(fetchProdutos({},true));
//     }
// }
// export const changeBrand =(brand) =>{
//     return async (dispatch)=>{
//         dispatch(setBrand(brand));
//         await dispatch(fetchProdutos({},true));
//     }
// }
// export const changeSort =(sort) =>{
//     return async (dispatch)=>{
//         dispatch(setSort(sort));
//         await dispatch(fetchProdutos({},true));
//     }
// }
// export const changeDates = (dates) =>{
//     return async (dispatch)=>{
//         dispatch(setDateFrom(dates?dates.startDate:null));
//         dispatch(setDateTo(dates?dates.endDate:null));
//        await  dispatch(fetchProdutos({},true));
//     }
// }

// export const changeSearch =(search) =>{
//     return async (dispatch)=>{
//         dispatch(setSearch(search));
//         await dispatch(fetchProdutos({},true));
//     }
// }
// export const changeActualPage = (actualPage) =>{
//     return async(dispacth) =>{
//         dispacth(setActualPage(actualPage));
//         await dispacth(fetchProdutos({},false))
//     }
// }