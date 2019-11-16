import React, { Component } from 'react';
import styled from 'styled-components';

import  Select  from 'antd/lib/select';
import 'antd/lib/select/style/index.css'
import  Input  from 'antd/lib/input';
import 'antd/lib/input/style/index.css'
import  InputNumber  from 'antd/lib/input-number';
import 'antd/lib/input-number/style/index.css'
import Button from 'antd/lib/button';
import 'antd/lib/button/style/index.css'
import Popover from 'antd/lib/popover';
import 'antd/lib/popover/style/index.css'
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/tooltip/style/index.css'
import Switch from 'antd/lib/switch';
import 'antd/lib/switch/style/index.css'
import Form from 'antd/lib/form';
import PlusBoxIcon from 'mdi-react/PlusBoxIcon';
import UploadIcon from 'mdi-react/UploadIcon';

import ActionButtons from '../../../Components/ActionButtons/ActionButtons';

import freteDimensoes1Img from '../../../img/frete_dimensoes_1.png'
import freteDimensoes2Img from '../../../img/frete_dimensoes_2.png'
import b2wImg from '../../../img/b2w.jpg'
import americanasImg from '../../../img/americanas.jpg'
import submarinoImg from '../../../img/submarino.jpg'
import shoptimeImg from '../../../img/shoptime.jpg'
import viavarejoImg from '../../../img/viavarejo.jpg'
import casasbahiaImg from '../../../img/casasbahia.jpg'
import extraImg from '../../../img/extra.jpg'
import pontofrioImg from '../../../img/pontofrio.png'
import buscapeImg from '../../../img/buscape.png'
import walmartImg from '../../../img/walmart.jpg'
import mercadoAventuraImg from '../../../img/mercadoaventura.jpg'
import netshoesImg from '../../../img/netshoes.png'
import carrefourImg from '../../../img/carrefour.png'
import easycompraImg from '../../../img/easycompra.png'

const channels=[
  {
    label:'B2W',
    field:'b2w',
    mainImg:{alt:'B2W',src:b2wImg},
    subImgs:[{alt:'Americanas',src:americanasImg},{ alt:'Submarino',src:submarinoImg},{alt:'Shoptime',src:shoptimeImg}]
  },
  {
    label:'Via Varejo',
    field:'viavarejo',
    mainImg:{alt:'Via Varejo',src:viavarejoImg},
    subImgs:[{alt:'Casas Bahia',src:casasbahiaImg},{ alt:'Extra',src:extraImg},{alt:'Ponto Frio',src:pontofrioImg}]
  },
  {
    label:"Buscapé",
    field:"buscape",
    mainImg:{alt:"Buscapé", src:buscapeImg}
  },
  {
    label:"Walmart",
    field:"walmart",
    mainImg:{alt:"Walmart", src:walmartImg}
  },
  {
    label:"Netshoes",
    field:"netshoes",
    mainImg:{alt:"Netshoes", src:netshoesImg}
  },
  {
    label:"Mercado Aventura",
    field:"mercadoaventura",
    mainImg:{alt:"Mercado Aventura", src:mercadoAventuraImg}
  },
  {
    label:"Easy Compra",
    field:"easycompra",
    mainImg:{alt:"Easy Compra", src:easycompraImg}
  },
  {
    label:"Carrefour",
    field:"carrefour",
    mainImg:{alt:"Carrefour", src:carrefourImg}
  },
]

const Attribute = (props) =>(
  <div className="w-100 d-flex p-2 p-lg-0 bg-veryLightGray rounded-lg m-1 position-relative">
    {props.requiredAttribute ? <div style={{width:'0',position:'absolute', top:'3px',left:'3px'}} className="font-semibold">*</div> :null}
    <div className="flex-grow-1 d-flex flex-wrap ">
      <div className="mb-0 col-12 col-lg-6 p-0 p-lg-2">
        <Form.Item 
          className="mb-1 mb-lg-0"
        >
          {props.getFieldDecorator(`attribute_selection_${props.id}`, {
            initialValue: props.requiredAttribute || undefined,
            rules: [{
              required: true, message: 'Campo Obrigatório',
            }]
          })(
            <Select placeholder="Selecione um Atributo" style={{width:'100%'}} disabled={props.requiredAttribute? true : false} >
              <Option value={'brand'} >Marca</Option>
              <Option value={'color'} >Cor</Option>
            </Select>
          )}
        </Form.Item>
      </div>
      <div className="mb-0 col-12 col-lg-6 p-0 p-lg-2">
        <Form.Item 
          className="mb-1 mb-lg-0 "
        >
          {props.getFieldDecorator(`attribute_text_${props.id}`, {
            rules: [{
              required: true, message: 'Campo Obrigatório',
            }]
          })(
            <Input placeholder="Descreva o atributo" />
          )}
        </Form.Item>
      </div>
    </div>
    {props.requiredAttribute ?  <span className="d-none d-lg-block pr-2"><ActionButtons spacement  /></span> : <ActionButtons delete onClickDelete={()=>props.onDelete(props.id)} className="pr-lg-2"/> }
  </div>
)

const Channel = (props) =>(
    <div className="d-flex channel border p-2 rounded-lg align-items-center position-relative w-min">
      <div className={`d-flex flex-wrap w-100 ${props.getFieldValue(`channel_${props.data.field}`) ? '' : 'disabled'}`}>
        <div className="w-100 mainImg d-flex justify-content-between align-items-center">
          <div className="h-min"><img alt={props.data.mainImg.alt}  src={props.data.mainImg.src}/></div>
          <label className="flexCenter h-min flex-wrap w-min p-1 bg-veryLightGray rounded-xl ml-2 mb-0" htmlFor={`cadastraProduto_channel_${props.data.field}`}>
            <label className="w-100 font-semibold text-center responsiveFont18 text-nowrap" htmlFor={`cadastraProduto_channel_${props.data.field}`}>{props.data.label}</label>
            {props.getFieldDecorator(`channel_${props.data.field}`, {
              initialValue:false
            })(<Switch/>)}
          </label>
        </div>
        <div className="w-100 d-flex subImg">
          {props.data.subImgs? props.data.subImgs.map((el,i)=>(
            <img alt={el.alt} src={el.src} key={i} />
          )):null}
        </div>
      </div>
    </div>
);

const { TextArea } = Input;
const Option = Select.Option;

const ProdutosCadastroStyled = styled.div`
  .produtosCadastro .mb-1p{
    margin-bottom: 1px
  }
  .ant-input-number-focused {
    border-color: #40a9ff;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  .ant-form-explain{
    color: #f5222d;
    font-weight: 600;
    line-height: 1.2em;
    white-space: nowrap;
  }
  .has-error [class|=ant-input], .has-error [class|=ant-input]:hover, .has-error .ant-input-number, .has-error .ant-select-selection {
    border-color: #f5222d;
  }
  .has-error [class|=ant-input]:focus {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }
  .has-error .ant-input-number-focused {
    border-color: #ff4d4f;
    border-right-width: 1px !important;
    outline: 0;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }
  [class|=ant]{
    font-size: inherit;
  }
  .produtosCadastro .input-with-prepend-group{
    position: relative;
  }
  .input-double .ant-select-selection__rendered{
    margin: 0 .25rem;
  }
  .produtosCadastro .input-with-prepend-group input[class|=ant-input]{
    padding-left: calc(11px + 2em);
  }
  .produtosCadastro .input-with-prepend-group .input-prepend{
    position: absolute;
    top:1px;
    height: calc(30px);
    left:1px;
    width: 2.25em;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .produtosCadastro .dadosBasicos .grid{
    display: grid;
    grid-template-columns: 20% 25% 15% 18% 22%;
    grid-template-rows: max-content auto;
    align-items: start;
  }
  .produtosCadastro .dadosBasicos .grid .imagens{
    grid-area: 1 / 1 / 3 / 2;
  }   
  .produtosCadastro .dadosBasicos .grid .desc{
    grid-area: 2 /2 / 3/6;
  }
  .produtosCadastro .dadosBasicos .imagesGrid{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
    grid-row-gap: .25rem;
    grid-column-gap: .25rem;
    justify-items: center;

  }
  .produtosCadastro .dadosBasicos .imagesGrid .imgMain, .produtosCadastro .dadosBasicos .imagesGrid .img {
    border: 3px solid var(--veryLightGray)
  }
  .produtosCadastro .dadosBasicos .imagesGrid .imgMain .mdi-icon{
    width: 4rem;
    height: 4rem;
    position: relative;

  }
  .produtosCadastro .dadosBasicos .imagesGrid input{
    opacity: 0;
    position: absolute;
    top:0;
    bottom: 0;
    left:0;
    right:0;
  }
  .produtosCadastro .dadosBasicos .imagesGrid .img .mdi-icon{
    width: 2rem;
    height: 2rem;
    position: relative;
  }
  .produtosCadastro .dadosBasicos .imagesGrid .imgMain{
    grid-area: 1 / 1 / 2 /3;
    height: 12vw;
    max-height: 200px;
    width:100%;
  }
  .produtosCadastro .dadosBasicos .imagesGrid .img{ 
    height: 6vw;
    max-height: 100px;
    width:100%;
  }
  .produtosCadastro  .ant-form label{
    font-size: inherit;
  }
  .produtosCadastro .channels .mainImg img{
    max-height: 60px;
    max-width:180px;
  }
  .produtosCadastro .channels .subImg img{
    max-height: 48px
  }
  .produtosCadastro .channels .disabled img{
    opacity: 0.3;
    filter:grayscale(1)
  }
  .produtosCadastro .channels .channel{
    width: 330px;
  }
  @media(min-width:992px) and (max-width:1366px){
    .produtosCadastro .channels .channel{
        width: 24.15vw;
    }
    .produtosCadastro  .channels .ant-switch::after {
        width: calc(1.5vw - 4px);
        height: calc(1.5vw - 4px);
    }
    .produtosCadastro  .channels .ant-switch{
        min-width: 3vw;
        height: 1.5vw;
    }
    .produtosCadastro .channels .mainImg img{
        max-height: 3.39vw;
    }
    .produtosCadastro .channels .subImg img{
        max-height: 3.52vw
    }
  }
  @media(max-width:991px){
    .produtosCadastro .dadosBasicos .grid{
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: auto;
        align-items: start;
        /* grid-row-gap: .5rem; */
    }
    .produtosCadastro .dadosBasicos .grid .imagens{
        grid-area: auto
    }   
    .produtosCadastro .dadosBasicos .grid .desc{
        grid-area: auto
    }
    .produtosCadastro .dadosBasicos .imagesGrid{
        grid-template-columns: 25% 25% 25% 25% ;
        grid-template-rows: auto auto;
        grid-row-gap: .25rem;
        grid-column-gap: .25rem;
        justify-items: center;
        justify-content: center;
    }
    .produtosCadastro .dadosBasicos .imagesGrid .imgMain{
        grid-area: 1 / 1 / 3 /3;
        height: 40vw;
        width:100%;
    }
    .produtosCadastro .dadosBasicos .imagesGrid .img{   
        height: 100%;
        width:100%;
    }
  }
  @media(min-width:992px){
    .produtosCadastro .nobg-lg{
        background-color: inherit;
    }
  }
`;

class ProdutosCadastro extends Component {
  state={
    brandOptions:[
      'Jack',
      'Lucy',
      'Tom'
    ],
    brandInputType:'select',
    weightUnit:'kg',
    shipmentWeightUnit:'kg',
    requiredAttibutes:['brand','color'],
    userAddedAttributes:[1],

  }
  handleAttributeAdd= async ()=>{
    let newUserAddedAttributes= await [...this.state.userAddedAttributes];
    newUserAddedAttributes.push(newUserAddedAttributes[newUserAddedAttributes.length -1] + 1 );
    this.setState({userAddedAttributes:newUserAddedAttributes});

  }
  handleAttributeDelete= async (id) =>{
    let newUserAddedAttributes= await this.state.userAddedAttributes.filter(el=>el!==id)
    this.setState({userAddedAttributes:newUserAddedAttributes});
  }
  handleBrandInputTypeChange = async () =>{
    await this.setState( state=>({brandInputType:state.brandInputType === 'select' ? 'input' : 'select'}) )
    this.props.form.resetFields('brand');
  }
  handleInputChange = (event) =>{
    this.setState({[event.target.getAttribute('statekey')]:event.target.value});
  }
  handleWeightUnitChange = async (unit) =>{
    let actualWeight =  this.props.form.getFieldValue('weight');
    if(unit==='kg'){
      if(actualWeight){
        await this.props.form.resetFields('weight')
        await this.props.form.setFieldsValue({weight:actualWeight/1000})
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('focus'))
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('blur'))
      }
      return;
    }else{
      if(actualWeight){
        await this.props.form.resetFields('weight')
        await this.props.form.setFieldsValue({weight:Number.parseInt(actualWeight*1000)})
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('focus'))
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('blur'))
      }
      return;
    }
  }
  handleShipmentWeightUnitChange = async (unit) =>{
    let actualWeight =  this.props.form.getFieldValue('shipment_weight');
    if(unit==='kg'){
      if(actualWeight){
        await this.props.form.resetFields( 'shipment_weight')
        await this.props.form.setFieldsValue({shipment_weight:actualWeight/1000})
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('focus'))
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('blur'))
      }
      return;
    }else{
      if(actualWeight){
        await this.props.form.resetFields('shipment_weight')
        await this.props.form.setFieldsValue({shipment_weight:Number.parseInt(actualWeight*1000)})
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('focus'))
        // this.props.form.getFieldInstance('weight').inputNumberRef.input.dispatchEvent(new Event('blur'))
      }
      return;
    }
  }
  getInputBindingProps = (key) =>(
    {
      onChange:this.handleInputChange,
      statekey:key,
      value:this.state[key]

    }
  )
  render() {
    const { getFieldDecorator } = this.props.form;
    const {brandInputType} =  this.state;
    console.log('Form',this.props.form);
    const priceFrom = this.props.form.getFieldValue('price_from');
    const priceFor = this.props.form.getFieldValue('price_for');
    let discount = priceFrom  && priceFor ? (priceFrom-priceFor)/priceFrom : 0;
    discount = discount > 0 ? discount : 0;
    let Attributes= [...this.state.requiredAttibutes,...this.state.userAddedAttributes];
   
    return (
      <ProdutosCadastroStyled>
      <Form>
        <div className="w-100 d-flex justify-content-center responsiveFont14  produtosCadastro text-muted">
          <div className="container">
            {/* INICIO - DADOS BASICOS ---------------------------------------------------------*/}
            <div className="w-100 bg-white rounded-lg overflow-hidden dadosBasicos mb-1p">
              <div className="responsiveFont18 w-100 bg-veryLightGray p-2">Dados Básicos</div>
              <div className="w-100  bg-white p-2 grid">

                <div className=" imagens px-2 pt-1">
                    <div className="w-100 text-center mb-2  font-semibold">
                      Imagens do Produto
                    </div>
                    <div className=" imagesGrid w-100">
                      
                          <div className="rounded-lg flexCenter flex-wrap imgMain text-center" >
                              <div className="flexCenter w-min flex-wrap font-semibold">
                                <UploadIcon/>
                                <div className="w-100 text-nowrap ">Fazer Upload </div>
                                <div>Da Imagem</div>
                              </div>
                              <input type="file"/>
                              
                          </div>
                      
                          <div className="rounded-lg flexCenter img text-center">
                            <UploadIcon/>
                          </div>
                          <div className="rounded-lg flexCenter img text-center" >
                            <UploadIcon/>
                          </div>
                          <div className="rounded-lg flexCenter img text-center " >
                            <UploadIcon/>
                          </div>
                          <div className="rounded-lg flexCenter img text-center" >
                            <UploadIcon/>
                          </div>                    
                    </div>
                </div>
                
                <div className=" titulo p-1">
                    <label className="w-100 mb-2 font-semibold"  htmlFor="cadastraProduto_title">
                      Título do Produto*
                    </label>
                    <Form.Item 
                      extra={<small>Máx. 50 caracteres. Dica de título: produto + marca + modelo + referência do fornecedor + característica + cor.</small>}
                    >
                      {getFieldDecorator('title', {
                        rules: [{
                          required: true, whitespace:true, message: 'Digite um Título',
                        }]
                      })(
                        <Input  id='prodTitle' placeholder="ex: Smartphone 4G, 16GB preto, Android 7" aria-label="ex: Smartphone 4G, 16GB preto, Android 7"/>
                      )}
                    </Form.Item>
                    {/* <Input className="responsiveFont14" id='prodTitle' placeholder="ex: Smartphone 4G, 16GB preto, Android 7" aria-label="ex: Smartphone 4G, 16GB preto, Android 7" {...this.getInputBindingProps('formTitle')}/> */}

                    
                </div>

                <div className=" marca p-1">
                    <label className="w-100 mb-2 font-semibold" htmlFor="cadastraProduto_brand">
                      Marca*
                    </label>
                    
                      <Form.Item 
                        extra={(
                          <div className="anchor" onClick={this.handleBrandInputTypeChange}> 
                            {this.state.brandInputType === 'select' ? 
                                <small ><PlusBoxIcon size={18}/>Ou crie uma marca </small>
                                : 
                                <small >Ou selecione uma marca</small>
                              }
                          </div>
                        )}
                      >
                        {getFieldDecorator('brand', {
                          rules: [{
                            required: true, whitespace:true, message: brandInputType === 'select' ? 'Selecione uma marca' : 'Insira o nome da Marca',
                          }]
                        })(
                          brandInputType === 'select' ?
                            <Select
                              showSearch
                              style={{ width: '100%'}}
                              placeholder={this.state.brandOptions ? "Sel. uma Marca" : 'Carregando...'}
                              optionFilterProp="children"
                              notFoundContent="Sem resultados"
                              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                            >
                              {this.state.brandOptions ? this.state.brandOptions.map((el,i)=>(
                                <Option value={el.toLowerCase()} key={i}>{el}</Option>
                              )) : null}
                            </Select>
                            :
                            <Input placeholder="Insira o nome da marca" /> 
                        )}
                      </Form.Item>
                    
                    
                    
                </div>
                <div className=" ean p-1">
                    <label className="w-100 mb-2 d-flex align-items-center font-semibold" style={{height:'1em'}} htmlFor="cadastraProduto_ean">
                      Cód. de barras EAN 
                      <Popover 
                        title="Código de barras EAN" 
                        trigger="click" 
                        content={(
                          <div style={{width:'250px'}}>
                            Este código não é obrigatório, mas fique atento que, se não for preenchido, seu produto poderá ser recusado em diversos marketplaces. O Código de Barras (EAN) pode ser localizado em seu produto ou na embalagem e é identificado por uma sequência numérica de 13 dígitos. Caso o seu produto não possua este Código, <a target="_blank" rel="noopener noreferrer" href="https://www.gs1br.org/codigos-e-padroes/entenda-como-funciona-o-codigo-de-barras">clique aqui</a> para maiores informações.
                          </div>
                        )}
                      >
                        <Button shape="circle" icon="question" size="small" className="ml-1" style={{fontSize:'1em',width:'1.75em', height:'1.75em'}}/>
                      </Popover>
                    </label>
                    <Form.Item>
                        {getFieldDecorator('ean', {
                          rules: [{
                            min:13, max:13, message:'EAN deve ter 13 caracteres'
                          }]
                        })(
                          <Input placeholder='ex:7893123123123'  />
                        )}
                    </Form.Item>
                </div>
                <div className=" cod p-1">
                    <label className="w-100 mb-2 d-flex align-items-center font-semibold" style={{height:'1em'}} htmlFor="cadastraProduto_code">
                      Cód. do Produto
                      <Popover 
                        title="Código do Produto" 
                        trigger="click" 
                        content={(
                          <div style={{width:'250px'}}>
                            <p>Este é o código do produto descrito na Nota Fiscal.</p>
                          </div>
                        )}
                      >
                        <Button shape="circle" icon="question" size="small" className="ml-1" style={{fontSize:'1em',width:'1.75em', height:'1.75em'}}/>
                      </Popover>
                    </label>
                    <div className="d-flex align-items-start">
                      
                      <Form.Item>
                        {getFieldDecorator('code', {
                          rules: [{
                             whitespace:true, message:'Código invalido'
                          }]
                        })(
                          <div className="d-flex align-items-center">
                            <Input placeholder='Digite o código' />
                            <div className="d-flex bg-veryLightGray rounded-xl p-05 py-1">
                              <Button type="primary" shape="circle" icon="redo" size="small" className="ml-1 flexCenter" style={{fontSize:'1em',width:'1.75em', height:'1.75em'}}/>
                              <Tooltip placement="bottom" title="Atualizar código do produto" className="d-flex">
                                <Button shape="circle" icon="question" size="small" className="ml-1 flexCenter" style={{fontSize:'1em',width:'1.75em', height:'1.75em'}}/>
                              </Tooltip>
                            </div>
                            
                          </div>
                          
                        )}
                      </Form.Item>
                      
                    </div>

                </div>
                <div className=" p-1 desc">
                    <label className="w-100 mb-2 mt-2 d-flex align-items-center font-semibold" style={{height:'1em'}} htmlFor="cadastraProduto_desc">
                      Descrição do produto*
                    </label>
                    <div className="p-2 p-lg-0">
                      <Form.Item
                        extra={(
                          <p className="m-0 mt-1 mb-2" >Caracteres: <strong>{this.props.form.getFieldValue('desc') ? this.props.form.getFieldValue('desc').length : '0' }</strong> de <strong>4000</strong></p>
                        )}
                      >
                        {getFieldDecorator('desc', {
                          rules: [{
                            max:4000, message:'A Descrição não pode ter mais que 4000 caracteres'
                          },{
                            required: true, whitespace:true, message: 'A Descrição não pode ficar em branco',
                          }]
                        })(
                          <TextArea autosize={{ minRows: 5}} placeholder="ex: Produto com muitas funciondades, que te ajudaram no dia dia, ampliando sua produtividade..." />
                        )}
                      </Form.Item>
                    
                      <div className="rounded bg-veryLightGray px-2 py-1">
                        <small className="">
                          <ul className="py-1 px-3 m-0 ">
                            <li>Não são permitidas tags HTML no conteúdo.</li>
                            <li>Fique atendo à ortografia, descrições com erros gramaticais são reprovadas;</li>
                            <li>Não são permitidos links externos;</li>
                            <li>Não é permitido o termo "Frete Grátis" ou qualquer informação sobre frete, prazos de entrega, políticas de venda e estoques ou inclusão de descrições de brindes nas ofertas;</li>
                            <li>Não é permitida a venda de itens sortidos. Enviar imagens e diferenciadores de cada cor e/ou variante quando houver oferta agrupada;</li>
                            <li>Não é permitida a comercialização de itens com condições de USADOS, REEMBALADOS ou RECONDICIONADOS.</li>
                          </ul>
                        </small>
                      </div>
                      
                    </div>
                </div>
                
                



              </div>
            </div>
            {/* FIM - DADOS BASICOS ---------------------------------------------------------*/}
            <div className="w-100 bg-white d-flex flex-wrap rounded-lg overflow-hidden estoque mb-1p align-items-center">
                <div className="responsiveFont18 flex-grow-1 nobg-lg bg-veryLightGray p-2">Estoque</div>
                <div className="d-flex align-items-center col-12 col-lg-auto p-3 p-lg-1">
                  <div className="d-flex align-items-center flex-wrap flex-lg-nowrap ">
                    <Form.Item className="mb-0 text-lg-right">
                          <label className="mb-2 m-lg-0 font-semibold col-12 col-lg-auto p-0" htmlFor="cadastraProduto_stock">Quantidade*</label>
                          {getFieldDecorator('stock', {
                            rules: [{
                              required: true, message: 'Campo Obrigatório',
                            }
                            // ,{
                            //   validator:(params,val,callback)=>{ if(val===0)callback('O Estoque não pode ser igual a 0'); else  callback()}
                            // }
                            ]
                          })(
                              <InputNumber
                                className="m-lg-1 text-center"
                                min={0}
                                precision={0}
                                // decimalSeparator={","}
                                // formatter={(value)=>`R$ ${value}`}
                                // parser={value=>value.replace(/R|\$|\s/g,'')}
                                style={{width:'130px'}}
                                // formatter={(value)=>`R$ ${value}`.replace(/\./g, ',')}
                                // parser={value=>value.replace(/R|\$|\s/g,'').replace(/,/,'.')}
                              />
                          )}
                      </Form.Item>
                    </div>
                  </div>
                </div>
              {/* FIM - ESTOQUE ---------------------------------------------------------*/}
              {/* INICIO - PREÇO ---------------------------------------------------------*/}
              <div className="w-100 bg-white d-flex flex-wrap rounded-lg overflow-hidden preco mb-1p align-items-center">
                <div className="responsiveFont18 flex-grow-1 nobg-lg bg-veryLightGray p-2">Preço do Produto</div>
                <div className="d-flex flex-wrap align-items-center col-12 col-lg-auto p-3 p-lg-1">
                  <div className="d-flex align-items-center flex-wrap col-12 col-lg-auto p-0 flex-lg-nowrap mr-2 mb-2 mb-lg-0">
                    <Form.Item className="mb-0 text-lg-right">
                          <label className="mb-2 m-lg-0 font-semibold col-12 col-lg-auto p-0" htmlFor="cadastraProduto_price_from">De*</label>
                          {getFieldDecorator('price_from', {
                            rules: [{
                              required: true, message: 'Campo Obrigatório',
                            },{
                              validator:(params,val,callback)=>{ if(val===0)callback('O Preço não pode ser igual a 0'); else  callback()}
                            }]
                          })(
                              <InputNumber
                                className="m-lg-1 text-center"
                                min={0}
                                precision={2}
                                decimalSeparator={","}
                                formatter={(value)=>`R$ ${value}`}
                                parser={value=>value.replace(/R|\$|\s/g,'')}
                                style={{width:'130px'}}
                                // formatter={(value)=>`R$ ${value}`.replace(/\./g, ',')}
                                // parser={value=>value.replace(/R|\$|\s/g,'').replace(/,/,'.')}
                              />
                          )}
                      </Form.Item>
                    </div>
                    <div className="d-flex align-items-center flex-wrap flex-lg-nowrap mr-2 mb-2 mb-lg-0 col-12 col-lg-auto p-0">
                      <Form.Item className="mb-0 text-lg-right">
                          <label className="mb-2 m-lg-0 font-semibold col-12 col-lg-auto p-0" htmlFor="cadastraProduto_price_for">Por*</label>
                          {getFieldDecorator('price_for', {
                            rules: [{
                              required: true, message: 'Campo Obrigatório',
                            },{
                              validator:(params,val,callback)=>{ if(val===0)callback('O Preço não pode ser igual a 0'); else  callback()}
                            }]
                          })(
                              <InputNumber
                                className="m-lg-1 text-center"
                                min={0}
                                precision={2}
                                decimalSeparator={","}
                                formatter={(value)=>`R$ ${value}`}
                                parser={value=>value.replace(/R|\$|\s/g,'')}
                                style={{width:'130px'}}
                                // formatter={(value)=>`R$ ${value}`.replace(/\./g, ',')}
                                // parser={value=>value.replace(/R|\$|\s/g,'').replace(/,/,'.')}
                              />
                          )}
                      </Form.Item>
                    </div>
                    <div className="d-flex align-items-center flex-wrap flex-lg-nowrap font-semibold  ">
                      <label className="mb-2 m-lg-0 font-semibold col-12 col-lg-auto p-0" >Desconto</label>
                      <Input
                        disabled
                        value={`${(discount*100).toFixed(2)}%`}
                        style={{width:'6em'}}
                        className={'ml-1'}
                      />
                    </div>
                  </div>
                </div>
                {/* FIM - ESTOQUE ---------------------------------------------------------*/}

                {/* INICIO - DIMENSÕES------------------------------------------------------------ */}
                <div className="w-100 bg-white rounded-lg overflow-hidden dadosBasicos mb-1">
                  <div className="responsiveFont18 w-100 bg-veryLightGray p-2">Dimensões e Peso</div>
              
                  <div className="d-flex flex-wrap w-100 bg-white p-3 p-lg-2">
      
                    <div className="col-lg-6 p-0 pr-lg-2">
                      
                      <div className="mb-3 font-semibold">Dimensões do produto (cm):</div>
                      
                      <div className="row">
                        
                        <div className="col-lg-4">
                          <img src={freteDimensoes1Img} alt=""/>
                        </div>
                        
                        <div className="boxLarge col-lg-8">
                          
                          <div className="row m-0">
                            
                            <div className="form-group col-6 px-1">
                              <label className="font-semibold" htmlFor="cadastraProduto_height">Altura*</label>
                                <div className="input-with-prepend-group">
                                  <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                    {getFieldDecorator('height', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{if(val===0)callback('Tam. Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100 h-100"
                                          min={0}
                                          precision={2}
                                          decimalSeparator={","}
                                        />
                                    )}
                                  </Form.Item>
                                  <span className="input-prepend flexCenter bg-veryLightGray">
                                    <svg className="mdi-icon" style={{height:'1.5em',width:'1.5em'}}viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M12,2L16,6H13V13.82L22.39,19.25L21.39,21L12,15.56L2.61,21L1.61,19.25L11,13.82V6H8L12,2Z" />
                                    </svg>
                                  </span>
                                </div>
                            </div>
                            
                            <div className="form-group col-6 px-1">
                              <label className="font-semibold" htmlFor="cadastraProduto_width">Largura*</label>
                              <div className="input-with-prepend-group">
                                  <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                    {getFieldDecorator('width', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{if(val===0)callback('Tam. Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100 h-100"
                                          min={0}
                                          precision={2}
                                          decimalSeparator={","}
                                        />
                                    )}
                                  </Form.Item>
                                  <span className="input-prepend flexCenter bg-veryLightGray">
                                    <svg className="mdi-icon" style={{height:'1.5em',width:'1.5em'}}viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M22.5,20.5L17,21.96L18.53,19.35L12,15.58L2.61,21L1.61,19.27L11,13.85V3H13V13.85L19.53,17.61L21,15.03L22.5,20.5Z"  />
                                    </svg>
                                    
                                  </span>
                                </div>
                            </div>
                            
                          </div>
                          
                          <div className="row m-0">
                            
                            <div className="form-group col-6 px-1">
                              <label className="font-semibold" htmlFor="cadastraProduto_length">Comprimento*</label>
                              <div className="input-with-prepend-group">
                                  <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                    {getFieldDecorator('length', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{ if(val===0)callback('Tam. Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100 h-100"
                                          min={0}
                                          precision={2}
                                          decimalSeparator={","}
                                        />
                                    )}
                                  </Form.Item>
                                  <span className="input-prepend flexCenter bg-veryLightGray">
                                    <svg className="mdi-icon" style={{height:'1.5em',width:'1.5em'}}viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M1.5,20.5L3,15.03L4.46,17.6L11,13.82V3H13V13.82L22.39,19.25L21.39,21L12,15.56L5.46,19.33L7,21.96L1.5,20.5Z" />
                                    </svg>
                                  </span>
                                </div>
                            </div>
                            
                            <div className="form-group col-6 px-1">
                              <label htmlFor="cadastraProduto_weight" className="d-flex justify-content-between font-semibold" style={{height:'1em'}}>
                                Peso* 
                                <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                  {getFieldDecorator('weight_unit', {
                                      initialValue:'kg'
                                    })(
                                      <Select size={'small'} className="float-right" onChange={this.handleWeightUnitChange }>
                                        <Option value={'kg'} >Kg</Option>
                                        <Option value={'g'} >g</Option>
                                      </Select>
                                  )}
                                </Form.Item>
                              
                                    
                              </label>
                              
                              <div className="input-double d-flex w-100">
                                  <Form.Item 
                                    className="mb-0 text-lg-right w-100 h-100"
                                    extra={<small>  Ex.: 1,5kg = 1500g </small>}
                                  >
                                    {getFieldDecorator('weight', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{ if(val===0)callback('Peso Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100"
                                          step={this.props.form.getFieldValue('weight_unit') === 'kg'? 0.01 : 1}
                                          min={0}
                                          precision={this.props.form.getFieldValue('weight_unit') === 'kg'? 3 : 0}
                                          decimalSeparator={this.props.form.getFieldValue('weight_unit') === 'kg'? "," :null}
                                        />
                                    )}
                                  </Form.Item>
                                  
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-lg-6 p-0">
                      
                      <div className="mb-3 font-semibold">Dimensões do produto + embalagem (cm):</div>
                      
                      <div className="row">
                        
                        <div className="col-lg-4">
                          <img src={freteDimensoes2Img} alt=""/>
                        </div>
                        
                        <div className="boxLarge col-lg-8">
                          
                          <div className="row m-0">
                            
                            <div className="form-group col-6 px-1">
                              <label className="font-semibold" htmlFor="cadastraProduto_shipment_height">Altura*</label>
                                <div className="input-with-prepend-group">
                                  <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                    {getFieldDecorator('shipment_height', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{ if(val===0)callback('Tam. Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100 h-100"
                                          min={0}
                                          precision={2}
                                          decimalSeparator={","}
                                        />
                                    )}
                                  </Form.Item>
                                  <span className="input-prepend flexCenter bg-veryLightGray">
                                    <svg className="mdi-icon" style={{height:'1.5em',width:'1.5em'}}viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M12,2L16,6H13V13.82L22.39,19.25L21.39,21L12,15.56L2.61,21L1.61,19.25L11,13.82V6H8L12,2Z" />
                                    </svg>
                                  </span>
                                </div>
                            </div>
                            
                            <div className="form-group col-6 px-1">
                              <label className="font-semibold" htmlFor="cadastraProduto_shipment_width">Largura*</label>
                              <div className="input-with-prepend-group">
                                  <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                    {getFieldDecorator('shipment_width', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{ if(val===0)callback('Tam. Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100 h-100"
                                          min={0}
                                          precision={2}
                                          decimalSeparator={","}
                                        />
                                    )}
                                  </Form.Item>
                                  <span className="input-prepend flexCenter bg-veryLightGray">
                                    <svg className="mdi-icon" style={{height:'1.5em',width:'1.5em'}}viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M22.5,20.5L17,21.96L18.53,19.35L12,15.58L2.61,21L1.61,19.27L11,13.85V3H13V13.85L19.53,17.61L21,15.03L22.5,20.5Z"  />
                                    </svg>
                                  </span>
                                </div>
                            </div>
                            
                          </div>
                          
                          <div className="row m-0">
                            
                            <div className="form-group col-6 px-1">
                              <label className="font-semibold" htmlFor="cadastraProduto_shipment_lenght">Comprimento*</label>
                              <div className="input-with-prepend-group">
                                  <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                    {getFieldDecorator('shipment_lenght', {
                                        rules: [{
                                          required: true, message: 'Campo Obrigatório',
                                        },{
                                          validator:(params,val,callback)=>{ if(val===0)callback('Tam. Inválido'); else  callback()}
                                        }]
                                      })(
                                        <InputNumber
                                          className="w-100 h-100"
                                          min={0}
                                          precision={2}
                                          decimalSeparator={","}
                                        />
                                    )}
                                  </Form.Item>
                                  <span className="input-prepend flexCenter bg-veryLightGray">
                                    <svg className="mdi-icon" style={{height:'1.5em',width:'1.5em'}}viewBox="0 0 24 24">
                                      <path fill="currentColor" d="M1.5,20.5L3,15.03L4.46,17.6L11,13.82V3H13V13.82L22.39,19.25L21.39,21L12,15.56L5.46,19.33L7,21.96L1.5,20.5Z" />
                                    </svg>
                                  </span>
                                </div>
                            </div>
                            
                            <div className="form-group col-6 px-1">
                              <label  htmlFor="cadastraProduto_shipment_weight" className="d-flex justify-content-between font-semibold" style={{height:'1em'}}>
                                Peso* 
                                <Form.Item className="mb-0 text-lg-right w-100 h-100">
                                  {getFieldDecorator('shipment_weight_unit', {
                                      initialValue:'kg'
                                    })(
                                      <Select size={'small'} className="float-right" onChange={this.handleShipmentWeightUnitChange }>
                                        <Option value={'kg'} >Kg</Option>
                                        <Option value={'g'} >g</Option>
                                      </Select>
                                  )}
                                </Form.Item>
                              
                                    
                              </label>
                              
                              <div className="input-double d-flex w-100">
                                  
                                  <Form.Item 
                                    className="mb-0 text-lg-right w-100 h-100"
                                    extra={<small>  Ex.: 1,5kg = 1500g</small>}
                                  >
                                    {getFieldDecorator('shipment_weight', {
                                      rules: [{
                                        required: true, message: 'Campo Obrigatório',
                                      },{
                                        validator:(params,val,callback)=>{ if(val===0)callback('Peso Inválido'); else  callback()}
                                      }]
                                    })(
                                        <InputNumber
                                          className="w-100"
                                          step={this.props.form.getFieldValue('shipment_weight_unit') === 'kg'? 0.01 : 1}
                                          min={0}
                                          precision={this.props.form.getFieldValue('shipment_weight_unit') === 'kg'? 3 : 0}
                                          decimalSeparator={this.props.form.getFieldValue('shipment_weight_unit') === 'kg'? "," :null}
                                        />
                                    )}
                                  </Form.Item>
                                  
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* FIM - DIMENSÕES------------------------------------------------------------ */}

                {/* INICIO - CLASSIFICAÇÃO ----------------------------------------------------------- */}
                <div className="w-100 bg-white rounded-lg overflow-hidden dadosBasicos mb-1">
                  <div className="responsiveFont18 w-100 bg-veryLightGray p-2">Classificação</div>
              
                  <div className="d-flex flex-wrap w-100 bg-white py-2">
                    <div className="col-lg-3 mb-3 mb-lg-0">
                      <label className="w-100 mb-2 font-semibold" htmlFor="cadastraProduto_classification_1">
                        Departamento*
                      </label>
                      <Form.Item 
                        className="mb-0 text-lg-right w-100 h-100"
                      >
                        {getFieldDecorator('classification_1', {
                          rules: [{
                            required: true, message: 'Campo Obrigatório',
                          }]
                        })(
                          <Select placeholder="Selecione um Departamento" style={{width:'100%'}} >
                            <Option value={'kg'} >Kg</Option>
                            <Option value={'g'} >g</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-lg-3 mb-3 mb-lg-0">
                      <label className="w-100 mb-2 font-semibold" htmlFor="cadastraProduto_classification_2">
                        Classificação*
                      </label>
                      <Form.Item 
                        className="mb-0 text-lg-right w-100 h-100"
                      >
                        {getFieldDecorator('classification_2', {
                          rules: [{
                            required: true, message: 'Campo Obrigatório',
                          }]
                        })(
                          <Select placeholder="Selecione uma Classificação" style={{width:'100%'}} >
                            <Option value={'kg'} >Kg</Option>
                            <Option value={'g'} >g</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-lg-3 mb-3 mb-lg-0">
                      <label className="w-100 mb-2 font-semibold" htmlFor="cadastraProduto_classification_3">
                        Sub Categoria*
                      </label>
                      <Form.Item 
                        className="mb-0 text-lg-right w-100 h-100"
                      >
                        {getFieldDecorator('classification_3', {
                          rules: [{
                            required: true, message: 'Campo Obrigatório',
                          }]
                        })(
                          <Select placeholder="Selecione uma Sub Categoria" style={{width:'100%'}} >
                            <Option value={'kg'} >Kg</Option>
                            <Option value={'g'} >g</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </div>
                    <div className="col-lg-3">
                      <label className="w-100 mb-2 font-semibold" htmlFor="cadastraProduto_classification_4">
                        Sub Categoria Nível 2*
                      </label>
                      <Form.Item 
                        className="mb-0 text-lg-right w-100 h-100"
                      >
                        {getFieldDecorator('classification_4', {
                          rules: [{
                            required: true, message: 'Campo Obrigatório',
                          }]
                        })(
                          <Select placeholder="Selecione uma Sub Categoria" style={{width:'100%'}} >
                            <Option value={'kg'} >Kg</Option>
                            <Option value={'g'} >g</Option>
                          </Select>
                        )}
                      </Form.Item>
                    </div>
                  </div>
                </div>
                {/* FIM - CLASSIFICAÇÃO ----------------------------------------------------------- */}

                {/* INICIO - ATRIBUTOS ----------------------------------------------------------- */}
                <div className="w-100 bg-white rounded-lg overflow-hidden dadosBasicos mb-1">
                  <div className="responsiveFont18 w-100 bg-veryLightGray p-2">Atributos</div>
                  <div className="d-flex flex-wrap w-100 bg-white p-2">
                    {/* <div className="d-flex flex-wrap w-100 bg-white py-2 border rounded-lg"> */}
                      {/* <div className="responsiveFont16 w-100 pl-2">Atributos Adicionais</div> */}
                        {Attributes.map((el,i)=>(
                          <Attribute id={el} requiredAttribute={isNaN(el) ? el : undefined } key={i} getFieldDecorator={getFieldDecorator} onDelete={this.handleAttributeDelete} />
                        ))}
                        <button type="button" className="btn btn-sm text-light rounded button-hover-brighten btn-sm bg-darkBlue m-1 "onClick={this.handleAttributeAdd}> Adicionar Atributo</button>
                    {/* </div> */}
                  </div>
                </div>
                {/* FIM - ATRIBUTOS ----------------------------------------------------------- */}

                {/* INICIO - CANAIS ----------------------------------------------------------- */}
                <div className="w-100 bg-white rounded-lg overflow-hidden channels mb-1">
                  <div className="responsiveFont18 w-100 bg-veryLightGray p-2">Canais de Venda</div>
                  <div className="d-flex flex-wrap w-100 bg-white p-2 ">

                    {channels.map((el,i)=>(
                      <div key={i} className="col-12 col-lg-4 flexCenter mb-2 p-0">
                        <Channel  getFieldDecorator={getFieldDecorator} getFieldValue ={this.props.form.getFieldValue} data={el}/>
                      </div>
                    ))}
                      
                  </div>
                </div>
                {/* FIM - CANAIS ----------------------------------------------------------- */}

            </div>
          </div>
        </Form>
        </ProdutosCadastroStyled>
      )
    }
  }
  export default Form.create({name:'cadastraProduto'})(ProdutosCadastro)
                    
                        
            