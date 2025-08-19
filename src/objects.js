export {DayWeather};

class DayWeather {
    constructor(date, condition, icon, tempmax, tempmin){
        this.condition = condition;
        this.icon = icon;
        this.tempmax = Math.round(tempmax);
        this.tempmin = Math.round(tempmin);
        this.date = new Date(date);
    }
}