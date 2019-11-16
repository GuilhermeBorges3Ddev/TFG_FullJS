import React from 'react'
import Media from 'react-media'

const Desktop = props =>(
    <Media query={{minWidth:992}}>
        <React.Fragment>
            {props.children}    
        </React.Fragment>
    </Media>)
;
const Mobile = props =>(
    <Media query={{maxWidth:991}}>
        <React.Fragment>
            {props.children}    
        </React.Fragment>
    </Media>)
;

export {
    Desktop,
    Mobile
}