/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import React, {Component, View, Text, StyleSheet, Navigator, ActivityIndicatorIOS} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as auth from './../actions/AuthAction';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            checkedAuth: false
        };
    }
    componentDidMount() {
        this.props.authAction.isUserLoggedIn();
    }

    validateUser(userName, password) {
        this.props.authAction.login(userName, password);
    }

    logOut() {
        this.props.authAction.logOut();
    }

    render() {
        let { isAuthenticated, authenticationStatus, userInfo } = this.props.auth;
        let showLoader = false;
        if(authenticationStatus === 'authenticating') {
            showLoader = true;
        }
        return (
            <View style={[styles.container, styles.vCenter, styles.hCenter]}>
                {
                    (isAuthenticated) ?
                        <View><Text>Welcome user</Text></View> :
                        <View><Text>Login screen</Text></View>
                }
            </View>
        );
    }
}

export default connect(state => ({
    auth: state.auth
}), (dispatch) => ({
    authAction: bindActionCreators(auth, dispatch)
}))(Main);

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eceff1'
    },
    vCenter: {
        justifyContent: 'center'
    },
    hCenter: {
        alignItems: 'center'
    }
});