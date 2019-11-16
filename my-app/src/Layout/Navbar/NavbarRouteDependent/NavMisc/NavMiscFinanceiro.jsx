import React, { PureComponent } from 'react'
import FileDownloadIcon from 'mdi-react/FileDownloadIcon';
import {Desktop} from '../../../ResponsiveRender';

export default class NavMiscFinanceiro extends PureComponent {
  render() {
    return (
        <Desktop>
            <button type="button" className="p-05 px-1 mr-1 btn bg-darkBlue text-white flexCenter responsiveFont14">
                <FileDownloadIcon/>Extrato
            </button>
        </Desktop>
        
    )
  }
}
