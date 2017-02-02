import dispatcher from "../dispatcher";

export function createItem(text) {
  dispatcher.dispatch({
    type: 'CREATE_ITEM',
    text: text,
  });
}

export function deleteItem(id) {
  dispatcher.dispatch({
    type: 'DELETE_ITEM',
    id,
  });
}

export function loadItems() {

  //add some sjax component here

  //dispatcher.dispatch({type: 'FETCH_ITEMS'});

    dispatcher.dispatch({type: 'RECEIVE_ITEMS', items: [
      {
        "pk": 1,
        "username": "ecastaneda",
        "email": "snoopy@dog.com",
        "first_name": "Snoop",
        "last_name": "Dog 1",
        "avatar": "http://strmstr.com/images/snoop-dogg-photo-bomb.jpg",
        "current_month_score": 0,
        "current_year_score": 0,
        "last_month_score": 0,
        "last_year_score": 0,
        "total_score": 0,
        "level": 0
      },
      {
        "pk": 2,
        "username": "echuquilin",
        "email": "snoopy@dog.com",
        "first_name": "Snoop",
        "last_name": "Dog 2",
        "avatar": "http://strmstr.com/images/snoop-dogg-photo-bomb.jpg",
        "current_month_score": 0,
        "current_year_score": 0,
        "last_month_score": 0,
        "last_year_score": 0,
        "total_score": 0,
        "level": 0
      }
    ]});
}
