import React, { PureComponent } from 'react'
import styled from 'styled-components';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,Label,Legend } from 'recharts'; 
import ClipboardTextOutlineIcon from 'mdi-react/ClipboardTextOutlineIcon';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';

const data = [
    {
      name:'JAN', "Em Aberto": 4000, "Concluídos": 2400
    },
    {
      name:'FEV', "Em Aberto": 3000, "Concluídos": 1398
    },
    {
      name:'MAR', "Em Aberto": 2000, "Concluídos": 9800
    },
    {
      name:'ABR', "Em Aberto": 2780, "Concluídos": 3908
    },
    {
      name:'MAI', "Em Aberto": 1890, "Concluídos": 4800
    },
    {
      name:'JUN', "Em Aberto": 2390, "Concluídos": 3800
    },
    {
      name:'JUL', "Em Aberto": 4000, "Concluídos": 2400
    },
    {
      name:'AGO', "Em Aberto": 3000, "Concluídos": 1398
    },
    {
      name:'SET', "Em Aberto": 2000, "Concluídos": 9800
    },
    {
      name: 'OUT', "Em Aberto": 2780, "Concluídos": 3908
    },
    {
      name: 'NOV', "Em Aberto": 1890, "Concluídos": 4800
    },
    {
      name: 'DEZ', "Em Aberto": 2390, "Concluídos": 3800
    }
  ];

const VendasLineChartStyled = styled.div`
  .vendasLineChart text{
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

export default class VendasLineChart extends PureComponent {
  state={
    width:0
  }
  getWidth = () =>{
    this.setState({
      width:document.getElementsByClassName('vendasLineChart').length>0? document.getElementsByClassName('vendasLineChart')[0].offsetWidth : 0
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
      <VendasLineChartStyled className="d-flex w-100">
        <CollapseCard 
          className="vendasLineChart"
          headerContent={
            <React.Fragment>
              <ClipboardTextOutlineIcon className="iconResponsive24"/>
              <div className="font-semibold flexCenter px-1 responsiveFont18">Pedidos - R$ x Mês</div>
            </React.Fragment>
          }
          collapseHeight={this.props.height}
        >
          <div className="d-flex w-100 p-2">
            <AreaChart
                data={data}
                margin={{left:8, bottom:18}}
                height={this.props.height-10}
                width={this.state.width -16}
            >
                <CartesianGrid strokeDasharray="3 3"  />
                <XAxis dataKey="name"  >
                  <Label value="Mês" offset={0} position="bottom"  className="font-semibold"/>
                </XAxis>
                <YAxis>
                  <Label value="R$" offset={-10} position="left"  className="font-semibold"/>   
                </YAxis>
                <Tooltip />
                <Legend verticalAlign={'top'} height={20}/>
                <Area type="monotone" dataKey="Em Aberto" stroke="#ffc107"  fill="#ffc107" stackId={1}  />
                <Area type="monotone" dataKey="Concluídos" stroke="#28a745" fill="#28a745" stackId={1}   />
            </AreaChart>
          </div>
        </CollapseCard>
      </VendasLineChartStyled>
    )
  }
}
