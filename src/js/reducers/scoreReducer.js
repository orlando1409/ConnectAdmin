export default function reducer(state={
  lastMonth: [],
  currentMonth: [],
  total: []
}, action) {

  switch (action.type) {
    case "FETCH_LAST_PENDING":
      return {...state, fetching: true}
      break;

    case "FETCH_LAST_REJECTED":
      return {...state, fetching: false, error: action.payload}
      break;

    case "FETCH_LAST_FULFILLED":
      return {...state, fetching: false, fetched: true, lastMonth: action.payload}
      break;

    case "FETCH_CURRENT_PENDING":
      return {...state, fetching: true}
      break;

    case "FETCH_CURRENT_REJECTED":
      return {...state, fetching: false, error: action.payload}
      break;

    case "FETCH_CURRENT_FULFILLED":
      return {...state, fetching: false, fetched: true, currentMonth: action.payload}
      break;

    case "FETCH_TOTAL_PENDING":
      return {...state, fetching: true}
      break;

    case "FETCH_TOTAL_REJECTED":
      return {...state, fetching: false, error: action.payload}
      break;

    case "FETCH_TOTAL_FULFILLED":
      return {...state, fetching: false, fetched: true, total: action.payload}
      break;

  }

  return state
}
