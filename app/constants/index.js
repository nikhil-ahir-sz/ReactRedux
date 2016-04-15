/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import {createConstants} from './../common/utils';

export default createConstants(
    'NETWORK_STATUS_REQUEST',
    'NETWORK_STATUS_SUCCESS',

    'HTTP_REQUEST',
    'HTTP_ERROR',
    'LOGIN_SUCCESS',
    'SET_USER_INFO',
    'SET_APP_TYPE'
);

export const localStorageConstants = createConstants(
    'USER_INFO',
    'USER_INFO_REQUEST',
    'USER_INFO_SUCCESS',
    'USER_INFO_ERROR',
    'USER_INFO_NA',
    'USER_INFO_DELETING_REQUEST',
    'USER_INFO_DELETING_SUCCESS',
    'USER_INFO_DELETING_ERROR'
);
