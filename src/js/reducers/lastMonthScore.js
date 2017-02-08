export default function reducer(state={
  lastMonthScore: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {

  switch (action.type) {
    case "FETCH_LAST_PENDING":
      return {...state, fetching: true}
      break;

    case "FETCH_LAST_REJECTED":
      return {...state, fetching: false, error: action.payload}
      break;

    case "FETCH_LAST_FULFILLED":
      return {...state, fetching: false, fetched: true, lastMonthScore: action.payload.data}
      break;
  }

  return state
}
