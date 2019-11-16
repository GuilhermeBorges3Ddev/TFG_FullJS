import React from 'react'
import styled from 'styled-components';

const TagLightStyled = styled.div`
	.tagLight {
		border: 1px solid #6c757d;
		border-radius: 8px ;
		font-size: inherit; 
		line-height: inherit;
		padding: .35rem
	}
`;

export default class TagLight extends React.PureComponent{
	render(){
		return(
			<TagLightStyled>
				<span className={`tagLight font-weight-light  text-nowrap ${this.props.className ||''}`}>
					{this.props.children}
				</span>
			</TagLightStyled>
		);
	}
}
