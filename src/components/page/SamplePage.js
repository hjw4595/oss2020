// src/components/page/SamplePage.js

import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import PageBaseContainer from 'redux/containers/PageBaseContainer';

const styles = (theme) => ({
    root: {},
});

const initialLayout = {
    lg: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
    ],
    md: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
    ],
    sm: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 4, y: 0, w: 4, h: 6 },
    ],
    xs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 6, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 6, h: 7 },
    ],
    xxs: [
        { i: 'RechartsLineChart', x: 0, y: 0, w: 4, h: 6 },
        { i: 'RechartsMultiLineChart', x: 0, y: 6, w: 4, h: 6 },
    ],
};

//리스트 기본값 
const ChartList = [
    { i: 'RechartsLineChart'},
    { i: 'RechartsMultiLineChart'},
]
//리스트 변경시 새 리스트
const initialBlocks = ChartList.map((chartItem) => {
    return chartItem
});

class SamplePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, theme } = this.props;

        return (
            <PageBaseContainer
                initialLayout={initialLayout}
                initialBlocks={initialBlocks}
            />
        );
    }
}

SamplePage.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SamplePage);
