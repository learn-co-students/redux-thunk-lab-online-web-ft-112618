import { combineReducers } from 'redux'
import catsReducer from './catsReducer'

import cuid from 'cuid';
export const cuidFn = cuid;

export default combineReducers({catsReducer})
