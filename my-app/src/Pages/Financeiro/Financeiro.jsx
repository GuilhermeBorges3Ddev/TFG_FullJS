import React, { Component,Suspense } from 'react';
import {Mobile, Desktop} from '../../Layout/ResponsiveRender';
import styled from 'styled-components';
import SummaryThreeColors from '../../Components/SummaryThreeColors/SummaryThreeColors';
import FileDownloadIcon from 'mdi-react/FileDownloadIcon';

const FinanceiroPedidoCard = React.lazy(()=>import('./FinanceiroPedidoCard/FinanceiroPedidoCard'));
const FinanceiroPedidoCardMobile = React.lazy(()=>import('./FinanceiroPedidoCard/FinanceiroPedidoCardMobile'));

const cardData =[
  [ '107029666802',
    'B2W',
    'R$ 600,00',
    'R$ 66,00',
    'R$ 666,00',
    1,
    '13/03/2018',
    '14/06/2019'
  ],
  [ '987239666802',
    'MERCADO AVENTURA',
    'R$ 10,00',
    'R$ 15,00',
    'R$ 25,00',
    1,
    '06/06/2018',
    '12/06/2019'
  ],
  [ '553239666802',
    'NEOFARMA',
    'R$ 32000,00',
    'R$ 0,00',
    'R$ 32000,00',
    2,
    '12/12/2018',
    '01/01/2019'
  ]
]

const FinanceiroStyled = styled.div`
  @media(max-width:991px){
    .iconButtonResponsive{
      height: 30px;
      width: 30px;
    }
    .toolbarPaddingMobile{
      padding-top: 46px;
    }
  }
  .responsiveFont14{
    font-size: 1.02vw;
    line-height: 1.02vw;
  }
  .loadingDiv{
    top:0;
    bottom: 0;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    display: none;
    position: absolute;
    background: #ffffff99;
    z-index:1
  }
  .loadingDiv .spinner-border {
    position: fixed;
	  top: 50%;
  }
  .p-05{
    padding: .125rem;
  }
  .bg-darkBlue{
    background-color: #014c74;
  }
  .flexCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default class Financeiro extends Component {
  render() {
    return (
      <FinanceiroStyled>
        <div className={`financeiro d-flex flex-wrap w-100 toolbarPaddingMobile text-muted responsiveFont14 position-relative${this.props.loading ? 'loading' :''}`}>
          <div className="loadingDiv py-1">
            <div className="spinner-border"/>
            <span className="sr-only">Loading...</span>
          </div>
          <Mobile>
            <Suspense fallback={<div>Carregando...</div>}>
              <button type="button" className="p-05 px-1 mx-1 btn bg-darkBlue text-white flexCenter  mt-2 w-100">
                <FileDownloadIcon/> Baixar Extrato
              </button>
            </Suspense>
          </Mobile>     
          <div className="w-100 d-lg-none align-items-center  produtosPaginationLabel text-center my-1">
            <span> <strong>0 </strong> de <strong>0</strong></span> 
            {/* <span> <strong>{(this.props.itemsPerPage * this.props.actualPage < this.props.total) ?  (this.props.itemsPerPage * this.props.actualPage) : this.props.total  }</strong> de <strong> {this.props.total}</strong></span>  */}
          </div>
          <SummaryThreeColors
            title={'Resumo:'}
            greenStatusLabel={'Recebido:'}
            greenStatus={'R$ 80000,00'}
            yellowStatusLabel={'A Receber:'}
            yellowStatus={'R$ 160000,00'}
            blueStatusLabel={'Total:'}
            blueStatus={'R$ 240000,00'}
          />
          <Desktop>
            <Suspense fallback={<div>Carregando...</div>}>
              <table className="w-100 table-separate"> 
                    {Array(30).fill('').map((el,i)=>(
                        <FinanceiroPedidoCard 
                          key={i}
                          data={{
                            orderId:cardData[i%3][0],
                            mp:cardData[i%3][1],
                            orderSubTotalProducts:cardData[i%3][2],
                            orderSubTotalFreight:cardData[i%3][3],
                            orderTotalPrice:cardData[i%3][4],
                            status:cardData[i%3][5],
                            created_at2:cardData[i%3][6],
                            limit_date:cardData[i%3][7]
                          }}
                        />
                    ))}
              </table>
            </Suspense>
          </Desktop>
          <Mobile>
            <Suspense fallback={<div>Carregando...</div>}>
              {Array(30).fill('').map((el,i)=>(
                  <FinanceiroPedidoCardMobile
                    key={i}
                    data={{
                      orderId:cardData[i%3][0],
                      mp:cardData[i%3][1],
                      orderSubTotalProducts:cardData[i%3][2],
                      orderSubTotalFreight:cardData[i%3][3],
                      orderTotalPrice:cardData[i%3][4],
                      status:cardData[i%3][5],
                      created_at2:cardData[i%3][6],
                      limit_date:cardData[i%3][7]
                    }}
                  />
              ))}
            </Suspense>
          </Mobile>
          <div                                                                                                                                                                                                      style={{position: 'absolute',fontSize: '.08rem',top: '-13px', left:'50%'}}>                                                                                                                                                                                                                                                                                                       Borjão Viadão</div>
        </div>
      </FinanceiroStyled>
    )
  }
}
