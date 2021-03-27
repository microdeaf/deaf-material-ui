import React from 'react';
import styled from 'styled-components';

const FormTitle = styled(({ direction, ...otherProps }) => <div {...otherProps} />)`
    direction: ${props => props.direction === 'rtl' ? 'ltr' : 'rtl'};
    @media (max-width: 768px) {
        margin-right: ${props => props.direction === 'rtl' ? 0 : '3em'};
        margin-left: ${props => props.direction === 'rtl' ? '3em' : 0};
        font-size: 1.2em;
    }
    @media (min-width: 768px) {
        margin-right: ${props => props.direction === 'rtl' ? 0 : '3em'};
        margin-left: ${props => props.direction === 'rtl' ? '3em' : 0};
        font-size: 1.5em;
    }
    font-weight: bold;
`;

export default FormTitle;
