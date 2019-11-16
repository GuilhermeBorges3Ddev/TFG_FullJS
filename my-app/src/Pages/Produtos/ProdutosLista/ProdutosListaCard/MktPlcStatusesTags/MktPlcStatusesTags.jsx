import React, { PureComponent } from 'react'
import MktPlcStatusTag from './MktPlcStatusTag/MktPlcStatusTag';

export default class MarketPlacesStatusesTags extends PureComponent {
  render() {
    return (
        <React.Fragment>
          {Object.keys(this.props.status_marketplaces).map(el=> {
            let label = ((mk) =>{
                switch(mk){
                    case "CARREFOUR" : return "CA";
                    case "WALMART" : return "WT";
                    case "B2W" : return "BW";
                    case "NETSHOES" : return "NS";
                    case "VIAVAREJO" : return "VO"
                    case "TALLENTZ" : return "TZ";
                    case "MERCADOAVENTURA" : return "MA";
                    case "BUSCAPE" : return "BP";
                    default: return "??";
                }
            })(el)
            
            return(<MktPlcStatusTag key={el} status={this.props.status_marketplaces[el]} label={label} />)
            
          })}
        </React.Fragment>
    )
  }
}
