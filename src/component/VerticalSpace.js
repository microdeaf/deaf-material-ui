import React from 'react';
import styled from 'styled-components';

const VerticalSpace = styled(({ ...otherProps }) => <div {...otherProps} />)`
    margin: 2rem
`;

export default VerticalSpace;
