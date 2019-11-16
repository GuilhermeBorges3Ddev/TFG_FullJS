import React from 'react';
import viavarejoImg from '../../../img/viavarejo.png'
import extraImg from '../../../img/extra.png'
import barateiroImg from '../../../img/barateiro.png'
import pontofrioImg from '../../../img/pontofrio.png'
const viavarejo = {
    title:'Viavarejo',
    image:viavarejoImg,
    subImages:[extraImg, barateiroImg, pontofrioImg ],
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
        title:'Negocio',
        list:{
            header:'',
            items:[
                (<small>Borjão</small>),
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
export default viavarejo;