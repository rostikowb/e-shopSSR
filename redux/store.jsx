// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./rootReducer";
//
// export function initializeStore(initialState = {}) {
//     return createStore(
//         rootReducer,
//         initialState,
//         composeWithDevTools(applyMiddleware(thunk))
//     );
// }

// import {createStore} from 'redux';
// import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import rootReducer from "./rootReducer";
//
// // create your reducer
//
// // create a makeStore function
// const makeStore = context => createStore(rootReducer);
//
// // export an assembled wrapper
// export const wrapper = createWrapper(makeStore, {debug: true});

import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";

let store;

function initStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        // applyMiddleware(thunk),
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    // console.log(_store);
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined;
        // console.log(store);
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store
};

export function useStore(initialState) {
    return useMemo(() => initializeStore(initialState), [initialState])
}

