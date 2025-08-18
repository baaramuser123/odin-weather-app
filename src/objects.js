export {DayWeather};

class DayWeather {
    constructor(date, condition, tempmax, tempmin){
        this.condition = condition;
        this.tempmax = Math.round(tempmax);
        this.tempmin = Math.round(tempmin);
        this.date = new Date(date);
    }
}