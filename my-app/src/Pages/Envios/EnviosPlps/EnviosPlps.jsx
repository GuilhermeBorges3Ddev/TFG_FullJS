import React, { Component } from 'react';
import styled from 'styled-components';
import PlpsCard from './EnviosPlpsCard/EnviosPlpsCard';
import {Desktop, Mobile} from '../../../Layout/ResponsiveRender';
import PlpsCardMobile from './EnviosPlpsCard/EnviosPlpsCardMobile';

const cardData = [
  [
    'Lojas Americanas-268710472801',
    '180123196',
    '01423000',
    'Aguardando Envio',
     3,
    '13/01/2019',
     1
  ],
  [
    '18219931',
    '179863932',
    '01423000',
    'Enviado',
     4,
    '11/01/2019',
     2
  ],
  [
    'Lojas Americanas-268691232001',
    '179793598',
    '01423000',
    'Enviado',
     4,
    '11/01/2019',
     2
  ]
]

const EnviosPlpsStyled = styled.div`
  .prodCard {
    border-radius: 8px;
    margin-bottom: 0;
  }
  .prodCardMobile{
    background-color:white;
    font-size: 16px;
    line-height: 16px;
  }
  .prodCard td{
    background-color: white;
    padding: .25rem;
  }
  div.prodCard.draft, tr.prodCard.draft td:first-child {
    border-left: 3px solid #6c757d;
  }
  div.prodCard.inactive,tr.prodCard.inactive td:first-child {
    border-left: 3px solid #00000055;
  }
  div.prodCard.trashed, tr.prodCard.trashed td:first-child{
    border-left: 3px solid #343a40;
  }
  div.prodCard.cataloguing, tr.prodCard.cataloguing td:first-child{
    border-left: 3px solid #fec107;
  }
  div.prodCard.reproved, tr.prodCard.reproved td:first-child{
    border-left: 3px solid #f36b7c;
  }
  .prodCard.inactive .header:after, .prodCard.inactive .brand:after, .prodCard.inactive .tags:after, .prodCard.inactive .dateDisplay:after{
    content: '';
    background-color: #ffffff88;
    top:0;
    bottom: 0;
    position: absolute;
    left: 0;
    right: 0;
  }
  .prodCard .mdi-icon{
    height: 1.75vw;
  }
  .prodTitle{
    font-weight: 400;
  }
  .prodImg {
    width: 2.9vw;
    height: 2.9vw;
    overflow: hidden;
  }
  .prodTitleDiv,  .prodTitleDiv .text-truncate{
    width: 17vw;
  }
  .prodImgMobile{
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius:8px;
  }
  .prodSubtitle {
    font-size: 0.8vw;
  }
  .prodSubtitleMobile {
    font-size: 16px;
  }
  .produtoCardDateDiv{
    display: inline-flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    font-weight: 500;
  }
  @media(max-width:991px), (min-width:1367px){
    .plpsCard .mdi-icon{
      
        height: 24px;
    }
    .plpsCard.plpsCardMobile .actionButtons .mdi-icon{
        height:30px;
        width:30px;
    }
    
    .plpsImg {
        width: 40px;
        height: 40px;
    }
    .plpsTitleDiv,  .plpsTitleDiv .text-truncate{
        width: 270px;
    }
  }
  @media(min-width:992px){
    .plps tr{
        height: 44px;
    }
  }
  .responsiveFont14{
    font-size: 1.02vw;
    line-height: 1.02vw;
  }
`;

  export default class EnviosPlps extends Component {
    render() {
      return (
          <EnviosPlpsStyled className="w-100">
            <div className="d-flex plps w-100 text-muted">
              <Desktop>    
                <table className="w-100 p-0 table-separate">
                    {Array(10).fill('').map((el,i)=>(
                      <PlpsCard
                        key={i} 
                        data={{
                          orderId: cardData[i%3][0],
                          plpId: cardData[i%3][1],
                          cepRemetente: cardData[i%3][2],
                          plpStatus: cardData[i%3][3],
                          statusSend: cardData[i%3][4],
                          plpDate: cardData[i%3][5],
                          status: cardData[i%3][6]
                        }
                      }/>
                    ))}
                </table>  
              </Desktop> 
              <Mobile>
                <div className="container mt-5 px-0 ">
                  {Array(10).fill('').map((el,i)=>(
                    <PlpsCardMobile
                      key={i} 
                      data={{
                        orderId: cardData[i%3][0],
                        plpId: cardData[i%3][1],
                        cepRemetente: cardData[i%3][2],
                        plpStatus: cardData[i%3][3],
                        statusSend: cardData[i%3][4],
                        plpDate: cardData[i%3][5],
                        status: cardData[i%3][6]
                      }
                    }/>
                  ))}
                </div>
              </Mobile>
            </div>
          </EnviosPlpsStyled>
        );
      }
    }
