import React, { Component,Suspense } from 'react'
import styled from 'styled-components';
import {Desktop, Mobile} from '../../Layout/ResponsiveRender'
import SummaryThreeColors from '../../Components/SummaryThreeColors/SummaryThreeColors';

const VendasCard = React.lazy(()=>import('./VendasCard/VendasCard'));
const VendasCardMobile = React.lazy(()=>import('./VendasCard/VendasCardMobile'));

const cardData =[
  [
    'Shoptime-107029666802',
    'B2W',
    'R$ 666,00',
    'Rio de Janeiro / RJ',
    1,
    '13/03/2019'
  ],
  [ '987239666802',
    'MERCADO AVENTURA',
    'R$ 25,00',
    'Belo Horizonte / MG',
    1,
    '06/06/2018'
  ],
  [ 'Cadeira Madeira -987239666802',
    'WALMART',
    'R$ 32000,00',
    'São Paulo / SP',
    2,
    '12/12/2018',
  ]
]

const VendasStyled = styled.div`
  .vendas .chartResponsive{
    height: 200px;
  }
  #toggler .mdi-icon{
    transition: all 0.3s;
  }
  .collapseCharts.collapse.show + div #toggler .mdi-icon, .collapseCharts.collapsing + div #toggler .mdi-icon{
    transform: rotate(-180deg);
  }
  @media(min-width:992px) and (max-width:1366px){
    .vendas .chartResponsive{
        height: 14.7vw;
    }
  }
`;

export default class Vendas extends Component {
  render() {
    return (
      <VendasStyled>
        <div className={`vendas d-flex flex-wrap text-muted w-100 position-relative toolbarPaddingMobile responsiveFont14 ${this.props.loading ? 'loading' :''}`}>
          <div className="d-flex flex-wrap w-100 py-2 py-lg-0 ">
            
            <SummaryThreeColors
              title={'Resumo:'}
              greenStatusLabel={'Concluídas:'}
              greenStatus={'R$ 200000,00'}
              yellowStatusLabel={'Em Aberto:'}
              yellowStatus={'R$ 40000,00'}
              blueStatusLabel={'Total:'}
              blueStatus={'R$ 240000,00'}
          
            />
            <div className="col-12 p-0 d-flex flex-wrap">
              <Desktop>
                <Suspense fallback={<div>Carregando...</div>}>
                  <table className="w-100 table-separate"> 
                    <tbody>
                    
                        {Array(10).fill('').map((_,i)=>(
                          <VendasCard
                            key={i}
                            data={{
                              orderId:cardData[i%3][0],
                              mp:cardData[i%3][1],
                              totalPrice:cardData[i%3][2],
                              location:cardData[i%3][3],
                              status:cardData[i%3][4],
                              conclusion_date:cardData[i%3][5]
                            }}
                          />
                        ))}
                      </tbody>
                    </table>
                  </Suspense>
                  
              </Desktop>
              <Mobile>
                <Suspense fallback={<div>Carregando...</div>}>
                    {Array(10).fill('').map((_,i)=>(
                        <VendasCardMobile
                          key={i}
                          data={{
                            orderId:cardData[i%3][0],
                            mp:cardData[i%3][1],
                            totalPrice:cardData[i%3][2],
                            location:cardData[i%3][3],
                            status:cardData[i%3][4],
                            conclusion_date:cardData[i%3][5]
                          }}
                        />
                      ))}
                </Suspense>
              </Mobile>
            </div>
          </div>
        </div>
      </VendasStyled>
    )
  }
}