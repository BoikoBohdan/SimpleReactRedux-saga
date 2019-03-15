import { TEST } from '../actionTypes'

const initialState = {
  test: []
}
function rootReducer (state = initialState, action) {
  if (action.type === TEST) {
    return Object.assign({}, state, {
      test: state.test.concat(action.payload)
    })
  }

  return state
}
export default rootReducer
