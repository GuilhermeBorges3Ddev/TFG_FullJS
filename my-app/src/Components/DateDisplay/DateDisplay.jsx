import React from 'react'
import styled from 'styled-components';

const DateDisplayStyled = styled.div`
	.dateDisplay{
		width: min-content;
	}
	.dateDisplay .dateLabel{
		font-size: .7rem;
		line-height: .65rem;
	}
	.dateDisplay .date{
		font-size: inherit;
		line-height: inherit;
	}
`;

export default class DateDisplay extends React.PureComponent{
	render(){
		return(
			<DateDisplayStyled>
				<div className={`d-flex align-items-center flex-wrap dateDisplay ${this.props.className ||''}`}>
					{this.props.dateLabel ? <div className={`dateLabel w-100 align-self-end text-nowrap ${this.props.dateLabelClassName || ''}`}>{this.props.dateLabel}</div> : null}
					{ this.props.children ? this.props.children : <div className={`date align-self-start text-nowrap font-semibold font-weight-bold ${this.props.dateStringClassName || ''}`}>{this.props.dateString}</div>}
				</div>
			</DateDisplayStyled>	
		);
	}
}
