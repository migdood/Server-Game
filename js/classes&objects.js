import { typeWriter } from "./functions.js";
import { input, locations } from "./script.js";
export class Server {
  constructor(name, calibration, status) {
    this.name = name;
    this.calibration = calibration;
    this.status = status;
  }
  async showServer() {
    await typeWriter(
      `${this.name} | calibration: ${this.calibration} | status: ${this.status}`,
      30
    );
    input.focus();
  }
  calibrate(newcalibration) {
    this.calibration = newcalibration;
  }
  statusUpdate(newstatus) {
    this.status = newstatus;
  }
}
export const SERVERLIST = [];
document.addEventListener("DOMContentLoaded", () => {
  locations.forEach(async (location) => {
    SERVERLIST[location.toLowerCase()] = new Server(location, 100, "running");
  });
});

// const Alfa = new Server('Alfa', 100, 'running');
// const Bravo = new Server('Bravo', 11, 'running');
// const Charlie = new Server('Charlie', 100, 'running');
// const Delta = new Server('Delta', 99, 'running');
// const Echo = new Server('Echo', 99, 'running');
// const Foxtrot = new Server('Foxtrot', 58, 'running');
// const Golf = new Server('Golf', 22, 'running');
// const Hotel = new Server('Hotel', 52, 'running');
// const India = new Server('India', 100, 'running');
// const Juliett = new Server('Juliett', 76, 'running');
// const Kilo = new Server('Kilo', 54, 'running');
// const Lima = new Server('Lima', 86, 'running');
// const Mike = new Server('Mike', 20, 'running');
// const November = new Server('November', 95, 'running');
// const Oscar = new Server('Oscar', 100, 'running');
// const Papa = new Server('Papa', 100, 'running');
// const Quebec = new Server('Quebec', 100, 'running');
// const Romeo = new Server('Romeo', 100, 'running');
// const Sierra = new Server('Sierra', 100, 'running');
// const Tango = new Server('Tango', 100, 'running');
// const Uniform = new Server('Uniform', 100, 'running');
// const Victor = new Server('Victor', 100, 'running');
// const Whiskey = new Server('Whiskey', 100, 'running');
// const Xray = new Server('X-ray', 100, 'running');
// const Yankee = new Server('Yankee', 100, 'running');
// const Zulu = new Server('Zulu', 100, 'running');
