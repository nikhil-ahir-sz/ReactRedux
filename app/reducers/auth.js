/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import {localStorageConstants} from './../constants';
import {createReducers} from './../common/utils';

const initialState = {
    isAuthenticated: false,
    userInfo: null,
    authenticationStatus: null,
    loggingOutStatus: null,
    appType: null
};

export default createReducers(initialState, {
    [localStorageConstants.USER_INFO_REQUEST] : (state) => {
        return {
            ...state,
            authenticationStatus: 'authenticating'
        }
    },
    [localStorageConstants.USER_INFO_ERROR] : (state) => {
        return {
            ...state,
            isAuthenticated: false,
            userInfo: null,
            authenticationStatus: 'failed'
        }
    },
    [localStorageConstants.USER_INFO_SUCCESS] : (state, data) => {
        return {
            ...state,
            isAuthenticated: true,
            userInfo: data.payload,
            authenticationStatus: 'valid'
        }
    },
    [localStorageConstants.USER_INFO_NA] : (state) => {
        return {
            ...state,
            authenticationStatus: 'NA'
        }
    }
});
