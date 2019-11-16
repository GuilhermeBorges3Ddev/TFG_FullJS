import React, { Component } from 'react';
import {Desktop, Mobile} from '../../../../Layout/ResponsiveRender';
import './SubLojas.css';

import SubLojasCard from './SubLojasCard/SubLojasCard';
import SubLojasCardMobile from './SubLojasCard/SubLojasCardMobile';
import SubLojaModalComBtn from './SubLojaModal/SubLojaModalComBtn';
import SubLojaModalMobileComBtn from './SubLojaModal/SubLojaModalMobileComBtn';

/*
SubLojasData = [
  [
     company,
     mail,
     cnpj,
     statusSend,
     status
  ]
]
*/

const SubLojasData = [
  [
    'Igor Ramon Alves Do Nascimento ME',
    'ola@vmaisclub.com',
    '23.620.199/0001-56',
     1,
     1
  ],
  [
    'LP Farmaceutica Ltda Me',
    'roberta.zambelli@vmaisclub.com',
    '04.824.461/0002-10',
     1,
     1
  ],
  [
    'Cooperativa Aecia de Agricultores Ecologistas ltda',
    'financeiro@aecia.com.br',
    '01.526.764/0001-88',
     1,
     1
  ],
  [
    'Criativa Solucoes',
    'raphaeldefalcoayres@gmail.com',
    '12.312.312/3123-12',
     2,
     2
  ],
  [
    'Pousade Distribuidora de Cosméticos Eireli Me',
    'newharmony@vmais.club',
    '02.429.358/0001-60',
     1,
     1
  ]
]

export default class SubLojas extends Component {

  handleActivate = () => {
    return new Promise((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    })
  }

  handleInactivate = () => {
    return new Promise((resolve, reject) => {
      setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
    })
  }

  render() {
    return (
            <div className="d-flex flex-wrap w-100 text-muted">
              <Desktop>    
                <table className="w-100 p-0 table-separate">
                  <tbody className="mt-1 responsiveFont14">
                    {Array(10).fill('').map((el,i)=>(
                      <SubLojasCard
                        key={i} 
                        data={{
                            company: SubLojasData[i%5][0],
                            mail: SubLojasData[i%5][1],
                            cnpj: SubLojasData[i%5][2],
                            status: SubLojasData[i%5][3]
                          }
                        }
                        onActivate={this.handleActivate}
                        onInactivate={this.handleInactivate}
                      />
                    ))}
                  </tbody>
                </table>  
                <div className="btnCenter w-100 flexCenter my-2">
                  <SubLojaModalComBtn />  
                </div>
              </Desktop> 
              <Mobile>
                <div className="w-100 px-0">
                  {Array(10).fill('').map((el,i)=>(
                    <SubLojasCardMobile
                      key={{i}} 
                      data={{
                        company: SubLojasData[i%5][0],
                        mail: SubLojasData[i%5][1],
                        cnpj: SubLojasData[i%5][2],
                        statusSend: SubLojasData[i%5][3],
                        status: SubLojasData[i%5][4]
                      }
                    }
                    onActivate={this.handleActivate}
                    onInactivate={this.handleInactivate}
                    />
                  ))}
                </div>
                <div className="btnCenter w-100 flexCenter my-2">
                  <SubLojaModalMobileComBtn />  
                </div>
              </Mobile>
            </div>

    );
  }
}
