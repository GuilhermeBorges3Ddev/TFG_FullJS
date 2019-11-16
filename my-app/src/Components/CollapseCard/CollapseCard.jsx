import React, { PureComponent } from 'react';
import {Collapse} from 'reactstrap';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';

export default class CollapseCard extends PureComponent {
  state={
    isOpen:!this.props.startClosed
  }
 
  render() {
      
    return (
        <div className={`d-flex flex-wrap w-100 overflow-hidden bg-white rounded-xl ${this.props.fullHeight && this.state.isOpen? 'h-100 ':''} ${this.props.className}`}>
            <div className={`d-flex align-items-center w-100 px-2 py-1 bg-veryLightGray ${this.props.headerContentClassName || ''}`}>
                <div className="d-flex flex-grow-1">
                    {this.props.headerContent}
                </div> 
                <div>
                  <button 
                      type="button" 
                      className="btn flexCenter m-0 rounded-circle p-0 iconButtonResponsive" 
                      onClick={()=>{window.dispatchEvent(new Event('resize')); this.setState(state=>({isOpen:!state.isOpen})); }}
                      style={{
                      transform:this.state.isOpen? 'rotate(-180deg)' : 'none',
                      transition: 'all .3s ease'
                      }}
                  >
                      <ChevronDownIcon/>
                  </button>
                </div>
            </div>
            <Collapse isOpen={this.state.isOpen} style={{height:this.props.collapseHeight || 'unset'}} className={`w-100 ${this.props.collapseClassName || ''}`}>
               {this.props.children}
            </Collapse>
        </div>
    );
  }
}
