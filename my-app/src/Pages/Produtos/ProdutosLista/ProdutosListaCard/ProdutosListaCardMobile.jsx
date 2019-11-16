import React from 'react';

import "./ProdutosListaCard.css";

import DateDisplay from '../../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../../Components/ActionButtons/ActionButtons';
import TagLight from '../../../../Components/TagLight/TagLight';
import MktPlcStatusesTags from './MktPlcStatusesTags/MktPlcStatusesTags';
import MktPlcStatusLabel from './MktPlcStatusLabel/MktPlcStatusLabel';


export default class ProdutosListaCardMobile extends React.PureComponent {
    
    render(){
        const reproved = this.props.data.status_column ==='Reprovados'
        const trashed = this.props.data.status_column ==='Lixeira';
        const draft = this.props.data.status_marketplaces===null && !trashed;
        const inactive = this.props.data.paused;
        const cataloguing = !(trashed || draft || inactive || reproved);
        return(
            
            <div className={`row prodCard prodCardMobile mx-1 p-2 mb-2 statusBorder-${inactive? 'inactive ' :trashed? 'dark ' :draft? 'secondary ' :cataloguing? 'mustard ' :reproved? 'oldRed ' :' '}`}>
                <div className="col-12">
                    <div className="row">
                        <div className="col-4 prodImgMobile" style={{backgroundImage:`url(${this.props.data.thumb_image})`}}>
                        </div>
                        <div className="col-8 text-muted">
                            <div className="row header">
                                <div className="col-12 px-2 ">
                                    <small className="prodSubtitleMobile "><strong>#{this.props.data.ean}</strong></small>
                                </div>
                                <div className="col-12 px-2 prodTitle d-flex text-truncate">
                                    {this.props.data.title}
                                </div>
                                <div className="col-12 px-2 py-1">
                                    <span className=" font-weight-light">
                                        {this.props.data.brand_name}
                                    </span>
                                </div>
                                <div className="col-12 px-2 ">
                                    <div className="" style={{display:"inline-flex", alignItems:"center"}} >
                                        <TagLight className="font-weight-bold">
                                        R$ {this.props.data.price2}
                                        </TagLight>
                                        <TagLight className="ml-2 font-weight-bold">
                                        {this.props.data.quantity} unidades
                                        </TagLight>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 px-0 pt-1">
                    <div  className="d-inline-flex align-items-center justify-content-start produtoCardMarketTags">
                        {this.props.data.status_marketplaces? <MktPlcStatusesTags status_marketplaces={this.props.data.status_marketplaces}/> : <MktPlcStatusLabel status={this.props.data.status_column} />} 
                                                       
                    </div>
                </div>
                <div className="col-12 px-0">
                    <div className="d-flex align-items-end justify-content-between">
                        
                        <DateDisplay dateLabel="Data de Cadastro" dateString={this.props.data.created_at2} className="position-relative" dateStringClassName="font-weight-bold"></DateDisplay>
                        <ActionButtons
                                delete={this.props.data.status_marketplaces===null && this.props.data.status_column !=='Lixeira'} 
                                restore={this.props.data.status_column ==='Lixeira'}
                                edit={this.props.data.status_column !=='Lixeira'}
                                pause={!trashed || !this.props.data.status_marketplaces===null}
                                expand
                        />
                    </div>
                    
                </div>
            </div>
                     
        );
    }
};

 

