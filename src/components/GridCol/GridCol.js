import React from 'react';
import {StyledGridCol} from './GridCol.styles';
import PropTypes from 'prop-types';

const propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
};

export const GridCol = ({children, xs, sm, md, lg, xl, ...props}) => {
    return (
        <StyledGridCol xs={xs} sm={sm} md={md} lg={lg} xl={xl} {...props}>
            {children}
        </StyledGridCol>
    );
};

GridCol.propTypes = propTypes;
