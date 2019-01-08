/* Store configuration can be done in a separate file like this and then be exported from here */

import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = ()=>{
    const store = createStore(Reducer, initialState);
    return store;
}