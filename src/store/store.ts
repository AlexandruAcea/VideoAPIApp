import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { apiFactory } from '../api';

import reducers from './root';
import { ThunkDispatch } from './types';

export const api = apiFactory();
const middlewares = [thunk.withExtraArgument({ api })];

export const store = createStore(reducers, applyMiddleware<ThunkDispatch>(...middlewares));
