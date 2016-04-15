/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila on 19/02/16.
 */

'use strict';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

class Store {
    static instance;
    static getInstance() {
        if(!Store.instance) {
            Store.instance = new Store();
        }
        return Store.instance;
    }
    constructor() {
        const reducer = combineReducers(reducers);
        const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
        const store = createStoreWithMiddleware(reducer);
        if (module.hot) {
            module.hot
                .accept('../reducers', () => {
                    store.replaceReducer(require('../reducers/index'));
                });
        }
        return store;
    }
}

export default Store.getInstance();