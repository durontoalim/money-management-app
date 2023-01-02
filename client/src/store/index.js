import { createStore , applayMiddleware, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReaucer'
import thunk from 'redux-thunk'

const middleware = [thunk]


const store = createStore(rootReducer (
    applyMiddleware(...middleware)
))

export default store
