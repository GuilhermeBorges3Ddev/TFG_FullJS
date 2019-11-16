import React from 'react';

export const  hasBase = (hasBaseStatus) => {
    if ((hasBaseStatus) === 1){
        return( 
            <span className="text-nowrap mr-2">URL Base:</span>
        );
    } 
}

export const  hasFrete = (hasFreteStatus) => {
    if ((hasFreteStatus) === 1){
        return( 
            <span className="text-nowrap mr-2"><br />URL Frete:</span>
        );
    } 
}

export const  hasCallback = (hasCallBackStatus) => {
    if ((hasCallBackStatus) === 1){
        return( 
            <span className="text-nowrap mr-2"><br />URL Callback:</span>
        );
    } 
}

export const  hasEstoque = (hasEstoqueStatus) => {
    if ((hasEstoqueStatus) === 1){
        return( 
            <span className="text-nowrap mr-2"><br />URL Estoque:</span>
        );
    } 
}