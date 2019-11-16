import React, { Component } from "react";
import "./ConfiguracoesInputNumber.css";

class ConfiguracoesInputNumber extends Component {
  state = {
    value: 11
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
        <div className="configuracoesInput def-number-input number-input">    
          <input 
            className="quantity" 
            name="quantity" 
            value={this.state.value} 
            onChange={
                ()=> console.log('change')
            }
            type="number"
            onClick={this.increase}
            
           >
          </input>
        </div>
      );
  }
}

export default ConfiguracoesInputNumber;