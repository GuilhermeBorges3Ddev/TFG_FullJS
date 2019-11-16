import React from 'react';
import styled from 'styled-components';

const DocumentosAuxStyled = styled.div`
    .btn-darkGreen {
        color: #fff;
        background-color: green !important;
        border-color: green;
    }
    .dataBtn {
        cursor: auto !important;
    }   
`;

/* 'hasVisualizationStatus' retorna o botão "Visualizar" verde escuro quando necessário */
export const  hasVisualization = (hasVisualizationStatus) => {
    if ((hasVisualizationStatus) === 1){
        return( 
            <a 
                href="https://apiconnect.s3.amazonaws.com/users/documents/727ef480-f25f-11e7-9782-f1e6393590f5/8fb2fd89-8c66-4139-a153-b32073bdc64a"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="btn btn-sm btn-darkGreen text-nowrap mr-md-4 mr-2">Visualizar</button>
            </a>
        );
    } 
}

/* 'hasDataStatus' retorna o botão "data" cinza escuro quando necessário */
export const  hasData = (hasDataStatus) => {
    if ((hasDataStatus) === 1){
        return(
            <DocumentosAuxStyled> 
                <button className="btn btn-sm btn-secondary text-nowrap dataBtn ml-2">
                    29/11/2018
                </button>
            </DocumentosAuxStyled>
        );
    } 
}