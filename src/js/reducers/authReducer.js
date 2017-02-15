export default function reducer(state={
  token: null,
  fetching: false,
  error: null
}, action) {

  switch (action.type) {
    case "FETCH_AUTH_PENDING":
      return {...state, fetching: true}
      break;

    case "FETCH_AUTH_REJECTED":
      return {...state, fetching: false, error: action.payload}
      break;

    case "FETCH_AUTH_FULFILLED":
      return {...state, token: action.payload.token }
      break;
  }

  return state
}
