/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import React, {Component, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import Main from './Main';
import store from '../common/store';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}

