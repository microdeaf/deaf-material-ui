import React from 'react';
import styled from 'styled-components';

const SwipeContainer = styled(({ direction, border, ...otherProps }) => <div {...otherProps} />)`
    direction: ${props => props.direction === 'rtl' ? 'ltr' : 'rtl'};

    display: grid;
    grid-template-columns: auto;
    grid-gap: 1em;

    border-width: ${props => props.border === undefined || props.border ? '' : '0.1em'};
    border-style: ${props => props.border === undefined || props.border ? '' : 'solid'};
    border-color: ${props => props.border === undefined || props.border ? '' : '#FAFAFA'};
    border-radius: ${props => props.border === undefined || props.border ? '' : '1em'};
`;

export default SwipeContainer;
