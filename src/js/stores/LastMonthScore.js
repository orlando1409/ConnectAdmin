import { EventEmitter } from "events";

class LastMonthScore extends EventEmitter {
  constructor() {
    super();
    this.lastMonthScore = [
      {
        "pk": 27,
        "username": "wseminario",
        "email": "wseminario@belatrixsf.com",
        "first_name": "Willy",
        "last_name": "Seminario",
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

  getAll() {
    return this.lastMonthScore;
  }
}

const lastMonthScore = new LastMonthScore;

export default lastMonthScore;
