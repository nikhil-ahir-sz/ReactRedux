/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import {localStorageConstants} from './../constants';
import {createRequest} from './../common/utils';

module.exports = {
    isUserLoggedIn : function () {
        return dispatch => {
            //User is not available
            dispatch(createRequest(localStorageConstants.USER_INFO_NA));
            //else User is available
            //dispatch(createRequest(localStorageConstants.USER_INFO_SUCCESS, userInfo));
        }
    },
    login : function (userName = "", password = "") {
        return dispatch => {
            dispatch(createRequest(localStorageConstants.USER_INFO_REQUEST));
            if (userName == "" || password == "") {
                dispatch(createRequest(localStorageConstants.USER_INFO_ERROR));
            }
            else {
                dispatch(createRequest(localStorageConstants.USER_INFO_SUCCESS, {
                    userName,
                    id: '007'
                }));
            }
        }
    }
};