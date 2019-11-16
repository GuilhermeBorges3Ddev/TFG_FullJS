import React, { PureComponent } from 'react'
import {Desktop} from '../../../ResponsiveRender';
import PrinterIcon from 'mdi-react/PrinterIcon';

export default class NavMiscEnvios extends PureComponent {
  render() {
    return (
        <Desktop>
            <button type = "button" className = "btn btn-sm bg-darkBlue text-white text-center">
                <PrinterIcon size={14}/> <small>Imprimir lista de pré postagem</small>
            </button> 
        </Desktop>
    )
  }
}
