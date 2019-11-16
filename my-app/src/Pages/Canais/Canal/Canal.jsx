import React, { PureComponent } from 'react';
import styled from 'styled-components';
import CanalCollapse from './CanalCollapse/CanalCollapse';

const CanalStyled = styled.div`
  .canal .subMarketPlaceImages .imgContainer{
    padding: 0;
    padding-right: .5rem;
  }
  .canal .subMarketPlaceImages .imgContainer:last-child{
    padding: 0; 
  }
  .canal .subMarketPlaceImages{
    height: 3.66vw;
  }
  .canal .marketPlaceImage{
    height: 3.66vw;
  }
  .canal ul{
    list-style-type: none;
  }
  .canal .canalCollapse{
    margin-bottom: .5rem;
  }
  .canal .canalCollapse:last-child{
    margin-bottom: 0;
  }
  @media(max-width:991px), (min-width:1367px){
    .canal .subMarketPlaceImages{
        height: 50px;
    }
    .canal .marketPlaceImage{
        height: 50px;
    }  
  }
  .flexCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .responsiveFont16{
    font-size: 1.17vw;
    line-height: 1.17vw;
  }
  .rounded-xl{
    border-radius: .5rem;
  }
  .bg-darkBlue{
    background-color: #014c74;
  }
  .h4.relative{
    font-size: 1.5em;
  }
`;

export default class Canal extends PureComponent {
  render() {
    return (
      <CanalStyled>
        <div className="flexCenter flex-wrap w-100 responsiveFont16 rounded-xl bg-white overflow-hidden canal">
          <div className="bg-darkBlue w-100 text-white px-4 py-1 text-center"><h4 className="m-0 relative">{this.props.data.title}</h4></div>
          {this.props.data.subImages? (
            <div className="w-100  d-flex align-items-center justify-content-around bg-secondary p-2 subMarketPlaceImages">
              {this.props.data.subImages.map((el,i)=>(
                <div className="imgContainer flexCenter col h-100" key={i}><img className="mh-100 mw-100" alt="Americanas" src={el}/></div>
              ))}
            </div>
          ):null}
          {this.props.data.collapses?(
            <div className="w-100  flexCenter flex-wrap p-2" >
              {this.props.data.collapses.map((el,i)=>(
                <CanalCollapse {...el} startClosed={i!==0} key={i}/>
              ))}
            </div>
          ):null}
        </div>
      </CanalStyled>
    )
  }
}
