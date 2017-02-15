import axios from "axios"

export function getAuth(user) {

  return function(dispatch) {
    axios.post("https://bxconnect.herokuapp.com:443/api/employee/authenticate/", {
      username: user.username,
      password: user.password
    })
    .then((response) => {
      dispatch({type: "FETCH_AUTH_FULFILLED", payload: response.data});
      //console.log('response', response.data.token);
      if(response.data.token){
        localStorage.setItem("token", response.data.token);
      }else{
        console.info('There is not token response')
      }
    }).catch((error) => {
      dispatch({type: "FETCH_AUTH_REJECTED", payload: error.data})
    })
  }

}
