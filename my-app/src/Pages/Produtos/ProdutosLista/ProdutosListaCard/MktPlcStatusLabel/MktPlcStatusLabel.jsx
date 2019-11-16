import React, { PureComponent } from 'react'
export default class MktPlcStatusLabel extends PureComponent {
  render() {
    let statusClass= ((st) =>{
        switch(st){
            case "Rascunho": return 'bg-secondary';
            case "Lixeira": return 'bg-dark';
            case "Inativo" : return 'bg-inactive';
            default: return 'bg-oldRed'
        }
    })(this.props.status);
    return (
      <div className={`d-inline-flex text-light p-05 px-4 font-semibold rounded-lg MktPlcStatusLabel ${statusClass}`}>
        {this.props.status || '????????'}
      </div>
    )
  }
}
