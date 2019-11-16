import React from 'react';
import styled from 'styled-components';
import {Desktop, Mobile} from '../../../../Layout/ResponsiveRender';

import DocumentosCollapseCard from './DocumentosCollapseCard/DocumentosCollapseCard';
import DocumentosCollapseMobileCard from './DocumentosCollapseCard/DocumentosCollapseMobileCard';

const DocumentsStyle = styled.div`
    display: flex;
    width: 100%;
`;

const DocumentosData = [
  [
    'Contrato Social (Última Atualização)',
     0,
     1,
     0,
    'Aprovado',
    'Envie para nós a última atualização do Contrato Social de sua empresa.',
    'reenviar documento'
  ],
  [
    'Alvará de Funcionamento',
     0,
     0,
     0,
    'Aguardando Envio',
    'Consulte o site da Prefeitura do seu Município para a consulta online deste documento.',
    'enviar documento'    
  ],
  [
    'Cartão de CNPJ (Atualizado)',
     1,
     1,
     1,
    'Aprovado',
    'Consulte online o Cartão CNPJ.',
    'reenviar documento'    
  ],
  [
    'Sintegra',
     0,
     0,
     0,
    'Aguardando Envio',
    'Consulte online os dados no SINTEGRA de seu Estado.',
    'enviar documento'    
  ],
  [
    'Inscrição Estadual',
     0,
     0,
     0,
    'Aguardando Envio',
    'Varifique no site da secretaria da fazenda de seu estado para saber se ocorre a emissão online do documento.',
    'enviar documento'    
  ],
  [
    'Certidão de Distribuição de Ações e Excecuções Cíveis e Criminais da Justiça Federal',
     0,
     0,
     0,
    'Aguardando Envio',
    'Consulte online os dados no Tribunal Federal de seu Estado.',
    'enviar documento'    
  ],
  [
    'Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União Certidão Negativa de Débitos Previdenciários',
     0,
     0,
     0,
    'Aguardando Envio',
    'A Certidão Conjunta Negativa de Débitos Relativos a Tributos Federais e à Dívida Ativa da União é emitida para comprovar que o cidadadão está em condição regular em relação à Secretaria da Receita Federal e à dívida ativa da União, administrada pela Procuradoria Geral da Fazenda. Isso significa que não há pendências cadastrais ou débitos no nome do cidadão nem omissão quanto á entrega da declaração do Imposto de Renda.',
    'enviar documento'    
  ],
  [
    'Certidão Negativa de Débitos Trabalhistas',
     0,
     0,
     0,
    'Aguardando Envio',
    'Certidão para as pessoas físicas e jurídicas que são devedoras inadimplentes em processo de execução trabalhista definitiva.',
    'enviar documento'    
  ],
  [
    'CND Tributos Federais',
     0,
     0,
     0,
    'Aguardando Envio',
    'Verifique no site da Receita Federal para a consulta online deste documento.',
    'enviar documento'    
  ],
  [
    'CND Tributos Estaduais',
     0,
     0,
     0,
    'Aguardando Envio',
    'Verifique no site da fazenda de seu Estado para saber se ocorre a emissão online do documento.',
    'enviar documento'    
  ],
  [
    'CND Tributos Municipais',
     0,
     0,
     0,
    'Aguardando Envio',
    'Consulte o site da Prefeitura de seu Município para a consulta online deste documento.',
    'enviar documento'    
  ],
  [
    'CND Falência e Concordata',
     0,
     0,
     0,
    'Aguardando Envio',
    'Consulte o site do Tribunal de Justiça de seu Estado para a consulta online deste documento.',
    'enviar documento'    
  ],
  [
    'Certidão Simplificada - SINREM',
     0,
     0,
     0,
    'Aguardando Envio',
    'Consulte o site do Tribunal de Justiça de seu Estado para a consulta online deste documento.',
    'enviar documento'    
  ],
  [
    'Declaração Regime Tributação',
     0,
     0,
     0,
    'Aguardando Envio',
    'Optantes pelo Simples Nacional ou verifique com o seu contador caso sua empresa utilize os regimes de Lucro Presumido ou Lucro Real.',
    'enviar documento'    
  ]
]

export default class Documentos extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <DocumentsStyle>
        <div className="d-flex flex-wrap w-100 text-muted">
          <Desktop>    
            <table className="w-100 p-0 table-separate">
              <tbody className="mt-1 responsiveFont14">
                {Array(14).fill('').map((el,i)=>(
                  <DocumentosCollapseCard
                    key={i} 
                    data={{
                          cardTitle: DocumentosData[i%14][0],
                          visualization: DocumentosData[i%14][1],
                          DocStatus: DocumentosData[i%14][2],
                          dataDoc: DocumentosData[i%14][3],
                          btnState: DocumentosData[i%14][4],
                          docDescription: DocumentosData[i%14][5],
                          docSendResentBtn: DocumentosData[i%14][6]
                    }}
                    onActivate={this.handleActivate}
                    onInactivate={this.handleInactivate}
                  />
                ))}
              </tbody>
            </table>  
          </Desktop>
          <Mobile>
            <div className="w-100 flex-wrap">
              {Array(14).fill('').map((el,i)=>(
                  <DocumentosCollapseMobileCard
                    key={i} 
                    data={{
                      cardTitle: DocumentosData[i%14][0],
                      visualization: DocumentosData[i%14][1],
                      DocStatus: DocumentosData[i%14][2],
                      dataDoc: DocumentosData[i%14][3],
                      btnState: DocumentosData[i%14][4],
                      docDescription: DocumentosData[i%14][5],
                      docSendResentBtn: DocumentosData[i%14][6]
                    }}
                    onActivate={this.handleActivate}
                    onInactivate={this.handleInactivate}
                  />
              ))}
            </div>
          </Mobile>
        </div>
      </DocumentsStyle>
    );
  }
}