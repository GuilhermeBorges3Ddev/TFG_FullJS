import React from 'react';
import styled from 'styled-components';
import CollapseCard from '../../../../Components/CollapseCard/CollapseCard';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';

const CanalCollapseStyled = styled.div`
  .canalCollapse li{
    margin-bottom: .5rem;
  }
  .canalCollapse li:last-child{
    margin-bottom: 0;
  }
  .canalCollapse .mdi-icon.fix{
    margin-top: -4px;
    margin-left: -7px;
  }
  .flexCenter{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .responsiveFont18{
    font-size: 1.32vw;
    line-height: 1.32vw;
  }
`;

const CanalCollapse = (props) =>(
    <CanalCollapseStyled>
      <CollapseCard 
        headerContent={
            <div className="font-semibold px-1 responsiveFont18">{props.title}</div>
        }
        className="canalCollapse"
        startClosed={props.startClosed}
        >
          {props.list ?(
            <div>
              {props.list.header || null}
              <ul className="p-3 m-0">
                {props.list.items.map((el,i)=>(
                  <li key={i}>
                    <div className="d-flex align-items-start">
                      <div className="flexCenter"><ChevronRightIcon className="fix"/></div>
                      {el}
                    </div>
                  </li>
                ))}
              </ul>
              {props.list.footer || null}
            </div>
          ):null}
      </CollapseCard>
    </CanalCollapseStyled>
  );
  export default CanalCollapse;