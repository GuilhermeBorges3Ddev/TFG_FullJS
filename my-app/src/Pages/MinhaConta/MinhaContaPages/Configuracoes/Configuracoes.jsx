import React from 'react';
import {Card,Container,Row} from 'reactstrap';
import ConfiguracoesCollapseCard from './ConfiguracoesCollapseCard/ConfiguracoesCollapseCard';
import ConfiguracoesInputNumber from './ConfiguracoesInputNumber/ConfiguracoesInputNumber';

import VanUtilityIcon from 'mdi-react/VanUtilityIcon';
import CogsIcon from "mdi-react/CogsIcon";
import HomeCurrencyUsdIcon from "mdi-react/HomeCurrencyUsdIcon"

import './Configuracoes.css'

/*
const ConfiguracoesData = [
  [ 
    'title',
     base,
     'baseDescription',
     frete,
     'freteDescription',
     callback,
     'callbackDescription',
     estoque,
     'estoqueDescription'
  ]
]
*/

const ConfiguracoesData = [
  [
    'Walmart',
    1,
    'https://app.api-connect.top/walmart/',
    1,
    'https://app.api-connect.top/walmart/vende-mais/fulfillment-preview',
    1,
    '',
    1,
    ''
  ],
  [
    'Buscapé',
    0,
    '',
    1,
    'https://app.api-connect.top/buscape/orders/callback',
    1,
    'https://app.api-connect.top/buscape/orders/stockAvailable',
    1,
    'https://app.api-connect.top/buscape/quote/seller'    
  ],
  [
    'Via Varejo',
    1,
    'http://h.api-connect.top/v1/cnova/',
    0,
    '',
    1,
    '',
    1,
    '' 
  ],
  [
    'B2W / SKYHUB',
    0,    
    'A B2W não utiliza URLs de configuração'  
  ],
  [
    'Netshoes',
    1,
    'https://app.api-connect.top/netshoes/',
    0,
    '',
    1,
    '',
    1,
    ''
  ],
  [
    'Carrefour',
    1,
    'https://app.api-connect.top/carrefour/',
    0,
    '',
    1,
    '',
    1,
    ''
  ]
]

export default class Configuracoes extends React.Component {
  render() {
    return (
      <div className="d-flex w-100 responsiveFont14 configuracoes">
        <Container className="d-flex w-100 px-0">
            <Card className="d-flex w-100"> 
                <Row>
                  <div className="py-4 px-4">
                    <h6 className="text-dark font-weight-bold">
                        <VanUtilityIcon className="mr-2" /> 
                        Logística
                    </h6>
                  </div>
                </Row>
                <Row>
                  <div className="py-4 px-4">
                    <h6 className="text-dark font-weight-bold">
                        <CogsIcon className="mr-2" /> 
                        ""Botoes com switch""
                    </h6>
                  </div>
                </Row>
                <Row>
                  <div className="pt-4 px-4">
                    <h6 className="text-dark font-weight-bold">
                        <VanUtilityIcon className="mr-2" /> 
                        Dias necessários para despachar um pedido:
                    </h6>
                    <div className="row m-0 my-4">
                      <div className="mx-4 mt-1 p-0 border-0">
                        <ConfiguracoesInputNumber />
                      </div>
                      <div className="text-white ml-3">
                        <button type="button" class="btn btn-sm bg-darkBlue text-white text-center btn btn-secondary mx-2">
                          Atualizar  
                        </button>
                      </div>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="pt-2 px-4">
                    <h6 className="text-dark font-weight-bold">
                        <HomeCurrencyUsdIcon className="mr-2" /> 
                        Marketplaces
                    </h6>
                  </div>
                </Row>
                <Row>
                  <div className="pb-4 px-3">
                    {Array(6).fill('').map((el,i)=>(
                      <ConfiguracoesCollapseCard
                         key={i} 
                         data={{
                            cardTitle: ConfiguracoesData[i%6][0],
                            base: ConfiguracoesData[i%6][1],
                            baseDescription: ConfiguracoesData[i%6][2],
                            callback: ConfiguracoesData[1%6][3],
                            callbackDescription: ConfiguracoesData[1%6][4],
                            estoque: ConfiguracoesData[1%6][5],
                            estoqueDescription: ConfiguracoesData[1%6][6],
                            frete: ConfiguracoesData[1%6][7],
                            freteDescription: ConfiguracoesData[1%6][8]
                          }}
                            onActivate={this.handleActivate}
                            onInactivate={this.handleInactivate}
                       />
                      ))}
                  </div>
                </Row>
            </Card>
        </Container>
      </div>
    );
  }
}