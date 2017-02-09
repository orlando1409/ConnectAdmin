
export function fetchUser(data) {

  console.log('data', data);

  return {
      type: "FETCH_USER_FULFILLED",
      payload: {
        name: "Estefano"
      }
  }
}
