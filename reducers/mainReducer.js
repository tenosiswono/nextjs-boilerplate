import Immutable from 'seamless-immutable'

export const INITIAL_STATE = Immutable({
  data: null
})

function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
