import React from 'react';

import "./ProdutosListaCard.css";

import DateDisplay from '../../../../Components/DateDisplay/DateDisplay';
import ActionButtons from '../../../../Components/ActionButtons/ActionButtons';
import TagLight from '../../../../Components/TagLight/TagLight';
import MktPlcStatusesTags from './MktPlcStatusesTags/MktPlcStatusesTags';
import MktPlcStatusLabel from './MktPlcStatusLabel/MktPlcStatusLabel';

export default class ProdutosListaCard extends React.PureComponent{

            render(){
                const reproved = this.props.data.status_column ==='Reprovados'
                const trashed = this.props.data.status_column ==='Lixeira';
                const draft = this.props.data.status_marketplaces===null && !trashed;
                const inactive = this.props.data.paused;
                const cataloguing = !(trashed || draft || inactive || reproved);
                return(
                    <tr className={`prodCard tr-card text-muted responsiveFont14 statusBorder-${inactive? 'inactive ' :trashed? 'dark ' :draft? 'secondary ' :cataloguing? 'mustard ' :reproved? 'oldRed ' :' '}`}>
                        <td >
                            <div className="d-flex align-items-center position-relative header w-max">
                                <img className="prodImg mr-2" src={this.props.data.thumb_image} alt="Imagem do Produto"/>
                                <div className="px-0 d-inline-flex align-items-center prodTitleDiv">
                                    <div className="d-inline-flex flex-wrap">
                                        <div className="d-inline-block text-truncate">
                                            {this.props.data.title}
                                        </div>
                                        
                                        <small className="prodSubtitle w-100"><strong>#{this.props.data.ean}</strong></small>
                                    </div>
                                </div>
                            </div>
                        </td> 
                        <td>   
                            <div className="flexCenter position-relative brand w-100" >
                                <span className="ml-2  font-weight-light">
                                    {this.props.data.brand_name}
                                </span>
                            </div>
                        </td>
                        <td>
                            <div className="flexCenter position-relative tags w-100"  >
                                <TagLight className="font-weight-bold">
                                    R$ {this.props.data.price2}
                                </TagLight>
                                <TagLight className="ml-2 font-weight-bold">
                                    {this.props.data.quantity} unidades
                                </TagLight>
                            </div>
                        </td>
                        <td>
                            <div className="flexCenter statusTags position-relative w-100">
                                {this.props.data.status_marketplaces? <MktPlcStatusesTags status_marketplaces={this.props.data.status_marketplaces}/> : <MktPlcStatusLabel status={this.props.data.status_column} />} 
                            </div>
                         </td>
                         <td>
                            <div className="flexCenter w-100">
                                <DateDisplay className="position-relative " dateLabel="Data de Cadastro" dateString={this.props.data.created_at2} dateStringClassName="font-weight-bold"/>
                            </div>
                        </td> 
                        <td >   
                            <ActionButtons
                                delete={this.props.data.status_marketplaces===null && !trashed} 
                                restore={trashed}
                                edit={!trashed}
                                pause={!trashed || !this.props.data.status_marketplaces===null}
                                expand
                                className="justify-content-end w-100"
                            />
                        </td>
                    </tr>     
                )
            }
            
                     
};


