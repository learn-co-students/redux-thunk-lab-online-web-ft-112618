import { fetchCats } from '../actions/catActions'
import cuid from 'cuid';
export const cuidFn = cuid;

export default function catsReducer(state = {
  loading: false,
  pictures: []
}, action) {
  switch(action.type) {
    case 'LOADING_CATS':
    return {...state, loading: true}

    case 'FETCH_CATS':
    return {loading: false, pictures: action.payload}

  default:
    return state
  }
}
