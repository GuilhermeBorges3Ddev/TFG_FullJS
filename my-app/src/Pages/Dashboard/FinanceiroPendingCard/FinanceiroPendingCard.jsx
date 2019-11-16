import React, { PureComponent } from 'react';
import styled from 'styled-components';
import FinanceIcon from 'mdi-react/FinanceIcon';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';

const Item = (props) => (
    <li className="d-flex font-semibold align-items-center mt-1 justify-content-between responsiveFont18">
        <span className="text-truncate text-left text-darkBlue">{props.mp}</span>
        <span className=" text-nowrap text-mustard ml-2">R$ {props.value}</span>
    </li>
);

const mps = [
    ['B2W', '19000,00'],
    ['Novartis', '7123,32'],
    ['Zema', '1,99'],
    ['Netshoes', '5041,12'],
    ['Carrefour', '999,31'],
    ['Walmart', '32,01'],
    ['Viavarejo', '0,02'],
    ['Buscape', '39561,08'],
    ['Neofarma', '9912,30'],
    ['Ypê', '21,21'],
    ['Natura', '43976,80']
]

const FinanceiroPendingCardStyled = styled.div`
    .iconResponsive24{
        height: 1.75vw;
        width: 1.75vw;
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
    .responsiveFont16{
        font-size: 1.17vw;
        line-height: 1.17vw;
    }
    .text-mustard{
        color: hsla(45, 100%, 51%, 1);
    }
    .text-darkBlue{
        color: #014c74;
    }
`;

export default class FinanceiroPendingCard extends PureComponent {
    
    render() {
        return (
            <FinanceiroPendingCardStyled>
                <CollapseCard
                    headerContent={
                        <React.Fragment>
                            <FinanceIcon className="iconResponsive24"/>
                            <div className="font-semibold flexCenter px-1 responsiveFont18">Financeiro</div>
                        </React.Fragment>
                    }
                >
                    <div className="flexCenter flex-wrap p-2 text-center p-2">
                        <span className="font-semibold responsiveFont16 w-100"> A Receber:</span>
                        <span className="font-semibold text-mustard responsiveFont18 w-100 pt-2"> R$ 40000,00</span>
                        <div className="w-100 my-2" style={{height:'1px', backgroundColor:'hsla(208, 7%, 80%, .6)'}}/>
                        <span className="font-semibold responsiveFont16 w-100"> Por Marketplace:</span>
                        <ul className="p-0 m-0 w-100 pt-2">
                            {mps.map((el,i)=>(
                                <Item key={i} mp={el[0]} value={el[1]}/>
                            ))}
                        </ul>

                    </div>
                </CollapseCard>
            </FinanceiroPendingCardStyled>
        )
    }
}
