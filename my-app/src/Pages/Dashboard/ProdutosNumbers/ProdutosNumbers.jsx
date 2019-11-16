import React, { PureComponent } from 'react'
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';
import CollapseCard from '../../../Components/CollapseCard/CollapseCard';

export default class ProdutosNumbers extends PureComponent {

  render() {
    return (
        <CollapseCard
            headerContent={
                <React.Fragment>
                    <CubeOutlineIcon className="iconResponsive24"/>
                    <div className="font-semibold flexCenter px-1 responsiveFont18">Produtos</div>
                </React.Fragment>
            }
            fullHeight

        >
            <div className="flexCenter flex-wrap  text-center p-2 " >
                <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold w-100 text-darkBlue"> Cadastrados</span>
                <span className="font-semibold text-solidGreen responsiveFont18 w-100 pt-2"> 234</span>
                </div>
                <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold  w-100 text-darkBlue"> A Venda</span>
                <span className="font-semibold text-solidGreen responsiveFont18 w-100 pt-2"> 1329</span>
                </div>
                <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold w-100 text-darkBlue"> s/ Estoque</span>
                <span className="font-semibold text-oldRed responsiveFont18 w-100 pt-2"> 5230</span>
                </div>
                <div className="col p-0 flexCenter flex-wrap">
                <span className="font-semibold w-100 text-darkBlue"> Estq. min.</span>
                <sub className="font-semibold text-darkBlue">(10 unidades)</sub>
                <span className="font-semibold text-mustard responsiveFont18 w-100 pt-2"> 5230</span>
                </div>
            </div>
        </CollapseCard>
    )
  }
}
