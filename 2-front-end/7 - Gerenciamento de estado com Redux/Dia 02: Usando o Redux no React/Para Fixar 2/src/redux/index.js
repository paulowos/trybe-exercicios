// Ops! A aplicação está quebrada!!
// Implemente a Store nesse arquivo e o Provider no arquivo ./src/index.js
// para a aplicação voltar a funcionar!

import { legacy_createStore as createStore } from 'redux';

import cosmosReducer from './reducers/cosmoReducer';

const store = createStore(cosmosReducer);

export default store;
