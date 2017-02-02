import { EventEmitter } from "events";

import dispatcher from "../dispatcher"

class TotalScore extends EventEmitter {
  constructor() {
    super();
    this.totalScore = [
      {
        "pk": 27,
        "username": "ecastaneda",
        "email": "wseminario@belatrixsf.com",
        "first_name": "Estefano",
        "last_name": "Castañeda",
        "avatar": "https://allstarsbx.s3.amazonaws.com/media/avatar/wseminario1484663655.jpg",
        "current_month_score": 0,
        "current_year_score": 0,
        "last_month_score": 0,
        "last_year_score": 0,
        "total_score": 0,
        "level": 0
      },
      {
        "pk": 26,
        "username": "echuquilin",
        "email": "echuquilin@belatrixsf.com",
        "first_name": "Eduardo",
        "last_name": "Chuquilin",
        "avatar": "https://allstarsbx.s3.amazonaws.com/media/avatar/echuquilin1484670765.jpg",
        "current_month_score": 0,
        "current_year_score": 0,
        "last_month_score": 0,
        "last_year_score": 0,
        "total_score": 0,
        "level": 0
      }
    ];
  }

  createItem(item) {
    this.totalScore.push({
      "pk": Date.now(),
      "username": "ecastaneda",
      "email": "wseminario@belatrixsf.com",
      "first_name": item.first_name,
      "last_name": item.last_name,
      "avatar": "https://allstarsbx.s3.amazonaws.com/media/avatar/wseminario1484663655.jpg",
      "current_month_score": 0,
      "current_year_score": 0,
      "last_month_score": 0,
      "last_year_score": 0,
      "total_score": 0,
      "level": 0
    });

    this.emit("change");

  }

  getAll() {
    return this.totalScore;
  }

  handeleActions(action) {
      switch (action.type) {
        case 'CREATE_ITEM':
          this.createItem(action.text);
          break;
        case 'RECEIVE_ITEMS':
          //this.createItem(action.items);
          this.totalScore = action.items;
          this.emit("change");
          break;
      }
  }
}

const totalScore = new TotalScore;
dispatcher.register(totalScore.handeleActions.bind(totalScore));
window.dispatcher = dispatcher;

export default totalScore;
