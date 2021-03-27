import React from 'react';
import styled from 'styled-components';

const Form = styled(({ direction, border, minmax, paddingTop, paddingBottom, gridGap, paddingRight, paddingLeft, marginBottom,  ...otherProps }) => <div {...otherProps} />)
`
    direction: ${props => props.direction === 'rtl' ? 'ltr' : 'rtl'};

    display: grid;
    @media (max-width: 768px) {
        grid-template-columns: auto;
        padding-top: 1em;
        padding-bottom: 1em;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(${props => props.minmax !== undefined ? props.minmax : '350px' }, 1fr));   
        padding-top: ${props => props.paddingTop ? props.paddingTop : '2em'};
        padding-bottom: ${props => props.paddingTop ? props.paddingTop : '2em'};
    }
    grid-auto-rows: minmax(50px, auto);
    grid-gap: ${props => props.gridGap ? props.gridGap : '.5em'};

    padding-right: ${props => props.paddingRight ? props.paddingRight : '.5em'};
    padding-left: ${props => props.paddingLeft ? props.paddingLeft : '.5em'};

    border-width: ${props => props.border === undefined || props.border ? '0.1em' : '0'};
    border-style: ${props => props.border === undefined || props.border ? 'solid' : ''};
    border-color: ${props => props.border === undefined || props.border ? 'rgb(214, 206, 206)' : ''};
    border-radius: ${props => props.border === undefined || props.border ? '1em' : '0'};
    margin-bottom: ${props => props.marginBottom ? props.marginBottom : '0'};
`
;

export default Form;
