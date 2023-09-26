class Temperature {
    celsius;
    constructor(celsius) {
        this.celsius = celsius;
    }
    celsiusToFahrenheit() {
        return this.celsius * 9/5 + 32;
    }
    celsiusToKelvins() {
        return this.celsius + 273.15;
    }
}
let temperature = new Temperature(37);
let Fahrenheit = temperature.celsiusToFahrenheit();
let Kelvins = temperature.celsiusToKelvins();
document.write("Nhiệt độ K: " + Kelvins + "<br>" + "Nhiệt độ F: " + Fahrenheit);