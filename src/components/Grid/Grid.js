import React from 'react';
import {StyledGrid} from './Grid.styles';
import PropTypes from 'prop-types';

const propTypes = {
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
    gap: PropTypes.number,
    rowGap: PropTypes.number,
    colGap: PropTypes.number,
    colWidth: PropTypes.number,
};

export const Grid = ({children, xs, sm, md, lg, xl, gap, rowGap, colGap, colWidth, ...props}) => {
    return (
        <StyledGrid
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
            gap={gap}
            rowGap={rowGap}
            colGap={colGap}
            colWidth={colWidth}
            {...props}>
            {children}
        </StyledGrid>
    );
};

Grid.propTypes = propTypes;
