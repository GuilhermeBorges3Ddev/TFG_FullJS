import React, { Component } from 'react';
import styled from 'styled-components';
import EnviosCard from './EnviosListaCard/EnviosListaCard';
import EnviosCardMobile from './EnviosListaCard/EnviosListaCardMobile';
import {Desktop, Mobile} from '../../../Layout/ResponsiveRender';
import PrinterIcon from 'mdi-react/PrinterIcon';

const cardSend = [
    [
       0,
       1,
      'Lojas Americanas-269096918202',
      'B2W',
       5,
      '13/03/2019',
      '20/03/2019'
    ],
    [
       1,
       2,
      '16224925901',
      'VIAVAREJO',
       1,
      '12/03/2019',
      '18/03/2019'
    ],
    [
       0,
       3,
      '20350188',
      'NETSHOES',
       5,
      '13/03/2019',
      '05/04/2019'
    ],
    [
      1,
      4,
      'Shoptime-107258225001',
      'B2W',
      1,
      '06/03/2019',
      '19/03/2019'
    ],
    [
      1,
      5,
      '7346722122',
      'SHOPTIME',
      1,
      '06/03/2019',
      '19/03/2019'
    ]
]

const EnviosListaStyled = styled.div`
  .send table{
    border-collapse:separate; 
    border-spacing:0 8px;  
  }
  .responsiveFont16{
    font-size: 1.17vw;
    line-height: 1.17vw;
  }
  .responsiveFont14{
    font-size: 1.02vw;
    line-height: 1.02vw;
  }
  .bg-darkBlue{
    background-color: #014c74;
  }
`;

export default class EnviosLista extends Component {
  render() {
    return (
      <EnviosListaStyled className="w-100">
        <div className="d-flex w-100 px-1 send">
        <Desktop>        
            <table className="w-100 p-0">
              {Array(10).fill('').map((el,i)=>(
                <EnviosCard
                  key={i} 
                  data={{
                    printStatus: cardSend[i%5][0],
                    status: cardSend[i%5][1],
                    codeOfSale: cardSend[i%5][2],
                    channelSale: cardSend[i%5][3],
                    remainingDays: cardSend[i%5][4],
                    limit_date: cardSend[i%5][5],
                    deliveryLimit: cardSend[i%5][6]
                  }}
                />
              ))}
            </table>
        </Desktop>
        <Mobile>
          <div className="w-100 flex-wrap">
            <div className="d-flex pt-5 mt-2 justify-content-center align-items-center">
              <button className="btn bg-darkBlue btn-sm text-white text-center w-100 rounded-lg">
                <PrinterIcon size={18}></PrinterIcon>
                <span className="ml-2">Imprimir lista de pré postagem</span>
              </button>
            </div>
            {Array(10).fill('').map((el,i)=>(
                <EnviosCardMobile
                  className="responsiveFont16"
                  key={i} 
                  data={{
                    printStatus: cardSend[i%5][0],
                    status: cardSend[i%5][1],
                    codeOfSale: cardSend[i%5][2],
                    channelSale: cardSend[i%5][3],
                    remainingDays: cardSend[i%5][4],
                    limit_date: cardSend[i%5][5],
                    deliveryLimit: cardSend[i%5][6]
                  }}
                />
            ))}
          </div>
        </Mobile>
        </div>
      </EnviosListaStyled>
    );
  }
}
