import React, { PureComponent } from 'react';
import styled from 'styled-components';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';
import StoreIcon from 'mdi-react/StoreIcon';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';

const data = [
  {
    name: 'Netshoes', 'Faturamento': 2400
  },
  {
    name: 'Mercado Aventura', 'Faturamento': 1398
  },
  {
    name: 'Buscape', 'Faturamento': 9800
  },
  {
    name: 'Natura', 'Faturamento': 3908
  },
  {
    name: 'B2W', 'Faturamento': 4800
  },
  {
    name: 'Ypê', 'Faturamento': 3800
  },
  {
    name: 'Neofarma', 'Faturamento': 4300
  },
];

const FaturamentoBarChartStyled = styled.div`
  .faturamentoBarChart text{
    fill:var(--secondary)
  }
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
`;

export default class FaturamentoBarChart extends PureComponent {
  state={
    width:0
  }
  getWidth = () =>{
    this.setState({
      width:document.getElementsByClassName('faturamentoBarChart').length>0? document.getElementsByClassName('faturamentoBarChart')[0].offsetWidth : 0
    });
  }
  componentDidMount(){
    setTimeout(this.getWidth,0);
    window.addEventListener('resize',this.getWidth);
    window.addEventListener('orientationchange',this.getWidth);

  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.getWidth);
    window.removeEventListener('orientationchange',this.getWidth);
  }
  render() {
      
    return (
        <FaturamentoBarChartStyled className="d-flex w-100">
          <CollapseCard
            className="faturamentoBarChart"
            headerContent={
              <React.Fragment>
                <StoreIcon className="iconResponsive24"/>
                <div className="font-semibold flexCenter px-1 responsiveFont18">Faturamento - R$ x Marketplace</div>
              </React.Fragment>
            }
            collapseHeight={this.props.height}
          >
            <div className="d-flex w-100 p-2">
              <BarChart
                  width={this.state.width -16}
                  height={this.props.height -10}
                  data={data}
                  margin={{
                    left: 8, bottom: 18,
                  }}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name">
                      <Label value="Marketplaces" offset={0} position="bottom"  className="font-semibold"/>
                  </XAxis>
                  <YAxis >
                      <Label value="R$" offset={-10} position="left"  className="font-semibold"/>

                  </YAxis>
                  <Tooltip />
                  <Legend verticalAlign={'top'} height={20} />
                  <Bar dataKey="Faturamento" fill="#28a745" fillOpacity={.6}/>
              </BarChart>
            </div>
          </CollapseCard>
        </FaturamentoBarChartStyled>
    );
  }
}
