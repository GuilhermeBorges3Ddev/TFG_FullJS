import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CoinIcon from 'mdi-react/CoinIcon';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';

const VendasLastMonthSellsStyled = styled.div`
  .iconResponsive24{
    height: 1.75vw;
    width: 1.75vw;
  }
  .flexCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .responsiveFont18{
    font-size: 1.32vw;
    line-height: 1.32vw;
  }
  .responsiveFont16{
    font-size: 1.17vw;
    line-height: 1.17vw;
  }
  .text-darkBlue{
    color: #014c74;
  }
  .text-solidGreen{
    color: #4CAF50;
  }
`;

export default class VendasLastMonthSells extends PureComponent {
  render() {
      return (
        <VendasLastMonthSellsStyled>
          <CollapseCard
            className="pedidosStatusNumbers"
            headerContent={
              <React.Fragment>
                <CoinIcon className="iconResponsive24"/>
                <div className="font-semibold flexCenter px-1 responsiveFont18">Vendas</div>
              </React.Fragment>
            }
          >
            <div className="flexCenter flex-wrap p-2 w-100 text-center">
              <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold responsiveFont16 w-100 text-darkBlue"> Hoje</span>
                <span className="font-semibold text-solidGreen responsiveFont18 w-100 pt-2"> 234</span>
              </div>
              <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold responsiveFont16 w-100 text-darkBlue"> Semana</span>
                <span className="font-semibold text-solidGreen responsiveFont18 w-100 pt-2"> 1329</span>
              </div>
              <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold responsiveFont16 w-100 text-darkBlue"> Mês</span>
                <span className="font-semibold text-solidGreen responsiveFont18 w-100 pt-2"> 5230</span>
              </div>
            </div>
          </CollapseCard>
        </VendasLastMonthSellsStyled>
    )
  }
}
