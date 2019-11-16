import React from 'react';
import americanasImg from '../../../img/americanas.svg'
import submarinoImg from '../../../img/submarino.svg'
import shoptimeImg from '../../../img/shoptime.svg'
import b2wImg from '../../../img/b2w.png'

const b2w = {
    title:'B2W',
    image:b2wImg,
    subImages:[americanasImg, submarinoImg, shoptimeImg ],
    collapses:[{
        title:'Sobre',
        list:{
            header:'',
            items:[
                '21 milhões de visitantes únicos mensais.',
                '60 milhões de buscas realizadas por mês.',
                'Maior grupo de e-commerce da América Latina.',
                'Canais de Vendas inclusos: Submarino.com.br, Americanas.com.br, Shoptime.com.br',
                '2 lotes de pagamentos mensais.',
                'Obrigatória a emissão de Nota Fiscal Eletrônica com geração de DANFE e geração de arquivo com extensão .xml.'
            ],
            footer:''
        }
    },{
        title:'Trem',
        list:{
            header:<div className='px-3 pt-3'>TESTE</div>,
            items:[
                '21 milhões de visitantes únicos mensais.',
                '60 milhões de buscas realizadas por mês.',
                'Maior grupo de e-commerce da América Latina.',
                'Canais de Vendas inclusos: Submarino.com.br, Americanas.com.br, Shoptime.com.br',
                '2 lotes de pagamentos mensais.',
                'Obrigatória a emissão de Nota Fiscal Eletrônica com geração de DANFE e geração de arquivo com extensão .xml.'
            ],
            footer:''
        }
    }]
}
export default b2w;