document.addEventListener("DOMContentLoaded", async () => {
  input.disabled = true;
  await typeWriter(
    "Welcome to Server Keeper\nInspired by the server maintenance in `Voices of the Void` by mrdrnose\nYour objective is to:\n1- Keep the servers running\n2- Perform maintenance on breaking servers\n3- Get a high-score.",
    1
  );
  input.disabled = false;

  locations.map(async (location) => {
    SERVERLIST[location.toLowerCase()] = new Server(
      location,
      20 + Math.floor(Math.random() * 5),
      "running"
    );
  });

  BreakServers();

  input.focus();
  autoConsoleNameChanger();
});

const SERVERLIST = {};
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
      display.scrollTop = display.scrollHeight;
      await typeWriterPlayer(WriteThis, 0);
      await inputChecker(WriteThis);
      input.disabled = false;
      input.focus();
      display.scroll;
    }
  }
});

function changeName() {
  return locations[Math.floor(Math.random() * locations.length)];
}

function autoConsoleNameChanger() {
  // Changes the name of the server in the top right
  setInterval(() => {
    typeWriterLocation(changeName(), 50);
  }, 2000);
}

function BreakServers() {
  setInterval(() => {
    const Damage = 15;
    const DamagePerTick = Math.floor(Math.random() * Damage);

    const SelectedLocation =
      locations[Math.floor(Math.random() * locations.length)].toLowerCase();

    let Server = SERVERLIST[SelectedLocation];

    if (Server.maintenance >= 1 && Server.status !== "upkeep") {
      Server.maintenance -= DamagePerTick;
      if (Server.maintenance <= 0) {
        Server.maintenance = 0;
      }
      ShowLowServers(Server);
    } else {
      Server.maintenance = 0;
    }
  }, 500);
}

async function ShowLowServers(server) {
  const aside = document.getElementById("tutorial");
  const p = document.createElement("p");
  const hr = document.createElement("hr");
  const lowMaintenanceServers = [];

  // Check if the server already exists in lowMaintenanceServers
  //TODO: Create 26 letters in the aside html and a big dot next to it, it will change color (green, red) when it's bellow 30
  // This will eliminate the headache of updating html elements which are created through JS 
  
  // console.log(lowMaintenanceServers);
}

class Server {
  constructor(name, maintenance, status) {
    this.name = name;
    this.maintenance = maintenance;
    this.status = status;
  }
  async showServer() {
    await typeWriter(
      `${this.name} | maintenance: ${this.maintenance} | status: ${this.status}`,
      30
    );
    input.focus();
  }
  maintain(newMaintenance) {
    this.calibration = newMaintenance;
  }
  statusUpdate(newstatus) {
    this.status = newstatus;
  }
}

async function typeWriter(text, speed) {
  let i = 0;
  display.innerHTML += "<br>";
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (i < text.length) {
        if (text[i] === "\n") {
          display.innerHTML += "<br>";
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
  display.innerHTML += "<br>> ";
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
        typeWriter("Could not process your request.", ResponseSpeed);
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

      case "greet me":
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
