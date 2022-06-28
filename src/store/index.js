//创建store
import { legacy_createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer.js'

/**
 * 创建store时可以传两个参数
 * 应用中间件applyMiddleware(中间件1,中间件2,中间件3)
 */
const storeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const store = legacy_createStore(reducer, storeEnhancer)

export default store
