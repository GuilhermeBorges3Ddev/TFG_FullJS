import React, { PureComponent } from 'react'
import CatalogoProdutoCard from './CatalogoProdutoCard/CatalogoProdutoCard';
import fryerImg from '../../img/fryer.jpg'
export default class Catalogo extends PureComponent {
  render() {
    return (
      <div className="catalogo vw-100 vh-100">
        <div className="container d-flex flex-wrap justify-content-center p-4">
          {Array(20).fill('').map((el,i)=>(
            <div className="d-flex p-2">
              <CatalogoProdutoCard key={i} img={fryerImg}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
