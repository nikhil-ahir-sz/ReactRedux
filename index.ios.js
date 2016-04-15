/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import { registerComponents } from './app/common/utils';
import app from './app/container/app';

registerComponents(
    {
        name: 'ReactRedux',
        component: app
    }
);