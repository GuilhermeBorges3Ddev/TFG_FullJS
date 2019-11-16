import React, { PureComponent } from 'react'
import styled from 'styled-components';
import CoinIcon from 'mdi-react/CoinIcon';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';
import { PieChart, Pie, Cell, Tooltip, Legend} from 'recharts';

const data = [
  { name: 'B2W', value: 30122 },
  { name: 'Drogarias Pacheco', value: 7000 },
  { name: 'Buscape', value: 12333 },
  { name: 'Netshoes', value: 2000 },
  { name: 'Walmart', value: 133 },
  { name: 'Neofarma', value: 3200 }, 
];

const COLORS = ['#4CAF50', '#d2697e', '#ffc105', '#ff9705'];

const VendasMarketPlaceDonutChartStyled = styled.div`
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
  .vendasMarketPlaceDonutChart .recharts-legend-item{
    width: 100%;
    padding-top: .125rem
  }
`;

export default class VendasMarketPlaceDonutChart extends PureComponent {
  state={
    width:0
  }
  getWidth = () =>{
    this.setState({
      width:document.getElementsByClassName('vendasMarketPlaceDonutChart').length>0? document.getElementsByClassName('vendasMarketPlaceDonutChart')[0].offsetWidth : 0
    });
  }
  componentDidMount(){
    setTimeout(this.getWidth,0);
    window.addEventListener('resize',this.getWidth);
  }
  componentWillUnmount(){
    window.removeEventListener('resize',this.getWidth);
  }
  render() {
      return (
        <VendasMarketPlaceDonutChartStyled>
          <CollapseCard
            className="vendasMarketPlaceDonutChart"
            headerContent={
              <React.Fragment>
                <CoinIcon className="iconResponsive24"/>
                <div className="font-semibold flexCenter px-1 responsiveFont18">Fatias de Vendas</div>
              </React.Fragment>
            }
          >
            <div className="flexCenter flex-wrap p-2 w-100 text-center">
              <PieChart width={this.state.width} height={this.props.height} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                
                  innerRadius={40}
                  outerRadius={80}
                  // fill="#8884d8"
                  //paddingAngle={5}
                  dataKey="value"
                  
                >
                  {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
                <Legend verticalAlign={'bottom'} align={'left'} />
                <Tooltip />
              </PieChart>
            </div>
          </CollapseCard>
        </VendasMarketPlaceDonutChartStyled>
    )
  }
}