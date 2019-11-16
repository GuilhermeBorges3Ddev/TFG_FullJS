import React from 'react';
import {Desktop, Mobile} from '../../../../Layout/ResponsiveRender';

import './Usuarios.css'

import UsuariosCard from './UsuariosCard/UsuariosCard';
import UsuariosCardMobile from './UsuariosCard/UsuariosCardMobile';
import UsuariosModalComBtn from './UsuariosModal/UsuariosModalComBtn';
import UsuariosModalMobileComBtn from './UsuariosModal/UsuariosModalMobileComBtn';

/*
UsuariosData = [
  [
    userName,
    userMail,
    userOcupation,
    userCPF,
    userAction
  ]
]
*/

const UsuariosData = [
  [
    'Tarsila Lichti',
    'tarsila@mercadoaventura.com.br',
    'Mercado Aventura',
    '375.697.468-56',
     1
  ],
  [
    'Guilherme Borges',
    'borges@vendemaisclub.com.br',
    'V-Mais',
    '070.799.016-50',
     2
  ],
  [
    'Raphael Ayres',
    'rafa@creativasolucoes.com.br',
    'Creativa Soluções',
    '130.244.111-88',
     2
  ],
  [
    'João Amoedo',
    'presidente@novo30.com.br',
    'Partido Novo',
    '270.999.116-10',
     1
  ],
  [
    'Flavio Rocha',
    'ceo@wiseup.com',
    'Wise Up',
    '220.721.131-62',
     2
  ]
]

export default class Usuarios extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Desktop>
          <div className="table-responsive responsiveFont14">
            <table className="table table-hover">
              <thead className="bg-white text-uppercase">
                <tr>
                  <th scope="col">nome</th>
                  <th scope="col">usuário</th>
                  <th scope="col">cargo</th>
                  <th scope="col">cpf</th>
                  <th scope="col">ações</th>
                </tr>
              </thead>
              <tbody>
                  {Array(10).fill('').map((el,i)=>(
                    <UsuariosCard
                      key={i} 
                      data={{
                        userName: UsuariosData[i%5][0],
                        userMail: UsuariosData[i%5][1],
                        userOcupation: UsuariosData[i%5][2],
                        userCPF: UsuariosData[i%5][3],
                        userAction: UsuariosData[i%5][4]
                        }
                      }
                      onActivate={this.handleActivate}
                      onInactivate={this.handleInactivate}
                    />
                  ))}
              </tbody>
            </table>
            <div className="btnCenter w-100 flexCenter mt-4">
                <UsuariosModalComBtn className="d-flex w-100 align-items-center justify-content-center"/>  
            </div>
          </div> 
        </Desktop>
        <Mobile>
          <div className="mainMobile">
            <div className="d-flex flex-wrap w-100 mt-2">
              {Array(5).fill('').map((el,i)=>(
                <UsuariosCardMobile
                  key={i} 
                  data={{
                    userName: UsuariosData[i%5][0],
                    userMail: UsuariosData[i%5][1],
                    userOcupation: UsuariosData[i%5][2],
                    userCPF: UsuariosData[i%5][3],
                    userAction: UsuariosData[i%5][4]
                    }
                  }
                  onActivate={this.handleActivate}
                  onInactivate={this.handleInactivate}
                />
              ))}
            </div>
            <div className="btnCenter w-100 flexCenter mt-2">
                  <UsuariosModalMobileComBtn className="d-flex w-100 align-items-center justify-content-center"/>  
            </div>
          </div>
        </Mobile>
      </React.Fragment>  
    );
  }
}