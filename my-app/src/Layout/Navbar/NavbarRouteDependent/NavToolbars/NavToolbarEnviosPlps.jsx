import React, { Component } from 'react'
import { connect } from 'react-redux';
import Toolbar from '../../../../Components/Toolbar/Toolbar';
import {withRouter} from 'react-router'
import * as actionCreators from '../../../../store/actions/index';

class NavToolbarEnviosPlps extends Component {
  render() {
    return (
        <Toolbar
            marketPlaceOptions={[{
                label:'B2W',
                value:'b2w'
            }]}
            onChangeMarketPlace={()=>null}
            onChangeItemsPerPage={this.props.onChangeItemsPerPage}
            onChangeOrderBy={this.props.onChangeOrderBy}
            onChangeSort={this.props.onChangeSort}
            onDatesChange={this.props.onChangeDates}
            onChangeSearch={this.props.onChangeSearch}
            itemsPerPage={this.props.itemsPerPage}
            actualPage={this.props.actualPage}
            total={this.props.total}
            sort={this.props.sort}
            dateFrom={this.props.dateFrom}
            dateTo={this.props.dateTo}
            search={this.props.search}
        />
    )
  }
}
const mapStateToProps = (state) => {
	return {
		...state.pg,
		total: state.prod.total
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onChangeItemsPerPage: (itemsPerPage) => dispatch(actionCreators.changeItemsPerPage(itemsPerPage)),
		onChangeBrand: (brand) => dispatch(actionCreators.changeBrand(brand)),
		onChangeOrderBy: (orderBy) => dispatch(actionCreators.changeOrderBy(orderBy)),
		onChangeSort: (sort) => dispatch(actionCreators.changeSort(sort)),
		onChangeSearch: (search) => dispatch(actionCreators.changeSearch(search)),
		onChangeDates: (dates) => dispatch(actionCreators.changeDates(dates)),
		onClearPagination :() =>dispatch(actionCreators.clearPagination()),
		
	};
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavToolbarEnviosPlps));
