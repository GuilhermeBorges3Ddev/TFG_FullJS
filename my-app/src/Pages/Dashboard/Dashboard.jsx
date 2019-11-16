import React, { Component } from 'react';

import styled from 'styled-components';

import VendasLineChart from './VendasLineChart/VendasLineChart';
import FaturamentoBarChart from './FaturamentoBarChart/FaturamentoBarChart';
import FinanceiroPendingCard from './FinanceiroPendingCard/FinanceiroPendingCard';
import PedidosStatusNumbers from './PedidosStatusNumbers/PedidosStatusNumbers';
import VendasLastMonthSells from './VendasLastMonthSells/VendasLastMonthSells';
import ProdutosNumbers from './ProdutosNumbers/ProdutosNumbers';
import VendasMarketPlaceDonutChart from './VendasMarketPlaceDonutChart/VendasMarketPlaceDonutChart';

const DashboardStyled = styled.div`
  .responsiveFont14{
    font-size: 1.02vw;
    line-height: 1.02vw;
  }
  .flexCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`; 

export default class Dashboard extends Component {
  render() {
    return (
      <DashboardStyled>
        <div className={`dashboard d-flex flex-wrap w-100 justify-content-center text-muted responsiveFont14 position-relative${this.props.loading ? 'loading' :''}`}>
          <div className="container d-flex align-items-start justify-content-center flex-wrap px-0">
            <div className="p-0  col-12">
              <div className="flexCenter mb-2">
                <PedidosStatusNumbers/>
              </div>
            </div>
            <div className="p-0  col-12 col-lg-9" >
              <div className="w-100 d-flex flex-wrap">
                <div className="p-0 col-12 col-lg-7 mb-2">
                    <ProdutosNumbers/>
                </div>
                <div className="p-0 col-12 col-lg-5 mb-2">
                  <div className="flexCenter pl-lg-2">
                    <VendasLastMonthSells/>
                  </div>
              </div>
              </div>  
              <div className="flexCenter mb-2">
                <VendasLineChart height={250}/>
              </div>
              <div className="flexCenter mb-2">
                <FaturamentoBarChart height={250}/>
              </div>
            </div>
            <div className="p-0 col-12 col-lg-3" >
              <div className=" ml-lg-2 flexCenter ">
                <FinanceiroPendingCard/>
              </div>
              <div className=" ml-lg-2 mt-2 flexCenter ">
                <VendasMarketPlaceDonutChart height={280}/>
              </div>
            </div>
          </div>
        </div>
      </DashboardStyled>
    )
  }
}
