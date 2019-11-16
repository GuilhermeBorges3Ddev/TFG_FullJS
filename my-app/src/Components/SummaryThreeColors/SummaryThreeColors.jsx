import React, { PureComponent } from 'react'
import styled from 'styled-components';

const SummaryThreeColorsStyled = styled.div`
    .summaryThreeColors h4{
        font-size: 150%;
    }
    .summaryThreeColors h4.header{
        font-size: 190%;
    }
    .summaryThreeColors p{
        font-size: 80%;
    }
    @media(min-width:992px) and (max-width:1366px){
        .summaryThreeColors p{
            font-size: 12px;
        }
    } 
    @media(max-width:991px){
        .summaryThreeColors h4{
            font-size: 110%;
        }
        .summaryThreeColors h4.header{
            font-size: 140%;
        }
    }
`;

export default class SummaryThreeColors extends PureComponent {
  render() {
    return (
        <SummaryThreeColorsStyled>
            <div className="summaryThreeColors d-flex flex-wrap align-items-center justify-content-between px-2 px-lg-3 py-1 w-100 rounded-xl bg-white overviewStatus mx-1 mb-2 m-lg-0 ">
                <div className="d-flex col-12 col-lg-auto p-0 align-items-center">
                    <h4 className="m-0 header">{this.props.title}</h4>
                </div>
                <div className="w-100 d-lg-none  mb-1" style={{height:'1px', backgroundColor:'hsla(208, 7%, 80%, .5)'}}/>
                <div className="flexCenter w-min flex-wrap ">
                    <p className="m-0 mr-2 w-100 font-weight-bold">{this.props.greenStatusLabel}</p>< h4 className="m-0 text-nowrap font-semibold text-success">{this.props.greenStatus}</h4>
                </div>
                <div className="flexCenter w-min flex-wrap">
                    <p className="m-0 mr-2 w-100 font-weight-bold">{this.props.yellowStatusLabel}</p>< h4 className="m-0 text-nowrap font-semibold text-warning">{this.props.yellowStatus}</h4>
                </div>
                <div className="flexCenter w-min flex-wrap">
                    <p className="m-0 mr-2 w-100 font-weight-bold">{this.props.blueStatusLabel}</p>< h4 className="m-0 text-nowrap font-semibold text-darkBlue">{this.props.blueStatus}</h4>
                </div>
            </div>
        </SummaryThreeColorsStyled>
    )
  }
}
