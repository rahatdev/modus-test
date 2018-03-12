import { createStore, applyMiddleware, GenericStoreEnhancer, compose } from 'redux';
import { reducer } from './reducer';
import { IAppState } from './IAppState';
import freezeState from './freezeState';

declare var window: any;  // for debugging

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
    ? window.devToolsExtension() : (f) => f;  //apply dev tools or pass null function

export const store = createStore<IAppState>(reducer, 
    compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer);