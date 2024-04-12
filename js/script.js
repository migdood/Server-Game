document.addEventListener("DOMContentLoaded", async () => {
  await typeWriter(
    "Welcome to Server Keeper\nInspired by the server maintenance in `Voices of the Void` by mrdrnose\nYour objective is to:\n1- Keep the servers running\n2- Perform maintenance on breaking servers\n3- Get a high-score.",
    30
  );
  input.focus();
});

const locationName = document.getElementById("locationName");
const display = document.getElementById("display");
const input = document.getElementById("displayInput");
const locations = [
  "Alfa",
  "Bravo",
  "Charlie",
  "Delta",
  "Echo",
  "Foxtrot",
  "Golf",
  "Hotel",
  "India",
  "Juliett",
  "Kilo",
  "Lima",
  "Mike",
  "November",
  "Oscar",
  "Papa",
  "Quebec",
  "Romeo",
  "Sierra",
  "Tango",
  "Uniform",
  "Victor",
  "Whiskey",
  "X-ray",
  "Yankee",
  "Zulu",
];
addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    if (input.value == "") {
      input.value = "";
    } else {
      const WriteThis = input.value;
      input.value = "";
      input.disabled = true;
      console.log((input.disabled = true));
      await typeWriterPlayer(WriteThis, 0);
      await inputChecker(WriteThis);
      input.disabled = false;
      input.focus();
    }
  }
});
function changeName() {
  return locations[Math.floor(Math.random() * locations.length)];
}
function autoAdder() {
  // Changes the name of the server
  setInterval(() => {
    typeWriterLocation(changeName(), 50);
  }, 2000);
  // Adds text to the display
  // setInterval(() => {
  //   typeWriter(locations[Math.floor(Math.random() * locations.length)], 50);
  // }, 2000);
}
autoAdder();

class Server {
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

document.addEventListener("DOMContentLoaded", () => {
  locations.forEach(async (location) => {
    SERVERLIST[location.toLowerCase()] = new Server(location, 100, "running");
  });
});
const SERVERLIST = [];

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

async function typeWriter(text, speed) {
  let i = 0;
  display.innerHTML += "<br>"; // Ensure a line break before typing starts
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (i < text.length) {
        if (text[i] === "\n") {
          display.innerHTML += "<br>"; // Insert line break if '\n' is encountered
        } else {
          display.innerHTML += text.charAt(i);
        }
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function typeWriterPlayer(text, speed) {
  let i = 0;
  display.innerHTML += "<br>< ";
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (i < text.length) {
        display.innerHTML += text.charAt(i);
        i++;
      } else {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function typeWriterLocation(text, speed) {
  let i = 0;
  locationName.innerHTML = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      locationName.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

async function inputChecker(text) {
  const ResponseSpeed = 20;
  const command = text.trim().split(" ");
  if (command.length >= 2 && command[0] == "sv.ping") {
    const serverName = command.slice(1).join(" ");

    switch (serverName) {
      case serverName:
        try {
          SERVERLIST[serverName].showServer();
        } catch (error) {
          typeWriter("Such a server doesn't exist", ResponseSpeed);
        }
        break;

      default:
        typeWriter("suck dick", ResponseSpeed);
        break;
    }
  } else {
    switch (text.toLowerCase()) {
      case "sv.ping":
        for (const location of locations) {
          await SERVERLIST[location.toLowerCase()].showServer();
        }
        break;

      case "clear":
        await typeWriter("clearing...", 100);
        await setTimeout(() => {
          display.innerHTML = "";
        }, 300);
        break;

      case "welcome me":
        await typeWriter(":( sorry sir...", 30);
        await typeWriter("Welcome to Server Keeper.", 30);
        break;

      case "inspiration":
      case "inspo":
      case "credit":
      case "credits":
        await typeWriter("Migdood on github: github.com/migdood", 30);
        await typeWriter(
          "Inspired by Voices of the Void: mrdrnose.itch.io/votv",
          30
        );
        break;

      default:
        await typeWriter("Command unknown :(", ResponseSpeed);
        break;
    }
  }
}
