/**
 * Copyright (c) 2016-present, SYNERZIP SOFTECH PVT, LTD.
 * All rights reserved.
 *
 * Created by nikhila.
 */

'use strict';

import {
    AppRegistry,
} from 'react-native';

/**
 * Returns a list of constants that are passed as parameters.
 * @param constants
 * @returns {*}
 */
export function createConstants(...constants) {
    return constants.reduce((list, constant) => {
        list[constant] = constant;
        return list;
    }, {});
}

/**
 * Creates reducers using the reducers object.
 * @param initialState - Initial state of reducer
 * @param reducers - event: function object
 * @returns {Function}
 */
export function createReducers(initialState, reducers = {}) {
    return (state = initialState, action = {}) => {
        let reducer = reducers[action.type];
        return reducer ? reducer(state, action) : state;
    };
}

/**
 * Returns a request object using the parameters passed.
 * @param type
 * @param payload
 * @returns {{type: String, payload: *}}
 */
export function createRequest(type: String, data) {
    return {
        type: type,
        payload: data
    }
}

/**
 * Parses JSON and returns javascript array
 * @param data - json string
 */
export function parseJSON(data) {
    return data? JSON.parse(data) : data;
}

/**
 * Returns JSON
 * @param data
 */
export function getJSON(data) {
    return data ? data.json() : data;
}

/**
 * Register components
 * @param unregisterdComponents
 */
export function registerComponents(...unregisterdComponents) {
    unregisterdComponents.forEach(({name, component}) => {
        AppRegistry.registerComponent(name, () => component);
    });
}

function request(URL, type, data) {
    let request = {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if(data) {
        request.body = JSON.stringify(data);
    }
    return fetch(URL, request)
        .then(getJSON)
        .then(response => {
            return {
                data: response
            };
        })
        .catch((error)=> {
            console.log('ERROR:-', error);
            throw error;
        });
}

export function get(URL, data) {
    return request(URL, 'GET', data);
}

export function post(URL, data) {
    return request(URL, 'POST', data);
}
