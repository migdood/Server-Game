import {
  typeWriter,
  typeWriterPlayer,
  Server,
  Global_Console_Response_Speed,
  Global_Repeat_Response_Speed,
} from "./core func.js";

document.addEventListener("DOMContentLoaded", async () => {
  input.disabled = true;
  await typeWriter(
    "Welcome to Server Keeper\nInspired by the server maintenance in `Voices of the Void` by mrdrnose\nmrdrnose.itch.io/votv\nYour objective is to:\n1- Keep the servers running\n2- Perform maintenance on breaking servers\n3- Get a high-score.",
    1
  );
  input.disabled = false;

  // Creates the serverlist
  locations.map(async (location) => {
    SERVERLIST[location.toLowerCase()] = new Server(
      location,
      20 + Math.floor(Math.random() * 5),
      "online"
    );
  });

  // Object.keys(SERVERLIST).forEach((element) => {
  //   const server = SERVERLIST[element];
  //   console.log(
  //     `Object name: ${element} | maintenance level: ${server.maintenance}`
  //   );
  // });

  BreakServers();

  input.focus();
  autoConsoleNameChanger();
});

const SERVERLIST = {};
const OnlineServersList = {};
const OfflineServersList = {};
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
      display.scrollTop = display.scrollHeight;
      await typeWriterPlayer(WriteThis, 0);
      await inputChecker(WriteThis);
      input.disabled = false;
      input.focus();
      display.scroll;
    }
  }
});

/**
 * Changes the server name randomly in the top right.
 */
function autoConsoleNameChanger() {
  setInterval(() => {
    typeWriterLocation(changeName(), 50);
  }, 2000);
}
function changeName() {
  return locations[Math.floor(Math.random() * locations.length)];
}

function MoveToOnlineServersList() {
  Object.keys(SERVERLIST).forEach((serverKey) => {
    const Server = SERVERLIST[serverKey];
    if (
      Server &&
      Server.maintenance != "offline" &&
      !OnlineServersList[Server.name]
    ) {
      OnlineServersList[Server.name] = Server;
    }
  });
}

function BreakServers() {
  setInterval(() => {
    const Damage = 5;
    const DamagePerTick = Math.floor(Math.random() * Damage);

    const SelectedLocation =
      locations[Math.floor(Math.random() * locations.length)].toLowerCase();

    const Server = OnlineServersList[SelectedLocation];

    if (Server.maintenance >= 1 && Server.status !== "offline") {
      Server.maintenance -= DamagePerTick;
      if (Server.maintenance <= 0) {
        Server.maintenance = 0;
        Server.status = "offline";
        MoveToOnlineServersList();
        console.log(`Server ${Server.name} is now offline.`);
        console.log(
          `List of all offline servers: ${Object.keys(BrokenServersList)}`
        );
      }

      ShowLowServers(Server);
    } else {
      Server.maintenance = 0;
      Server.status = "offline";
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
  const command = text.toLowerCase().trim().split(" ");
  let singleCommand = "";

  if (command.length == 1) {
    singleCommand = command.toString();
  } else {
    singleCommand = null;
  }

  // Display 1 server
  if (command.length >= 2 && command[0] == "sv.ping") {
    const serverName = command.slice(1).join(" ");

    if (SERVERLIST[serverName]) {
      SERVERLIST[serverName].showServer();
    } else {
      await typeWriter("Server not found", Global_Console_Response_Speed);
    }
  }

  async function RepairServer(serverName) {
    const Server = SERVERLIST[serverName];

    if (!Server) {
      await typeWriter(
        "This server doesn't exist.",
        Global_Console_Response_Speed
      );
      return;
    }

    if (OfflineServersList[serverName]) {
      await typeWriter(
        `Repairing ${serverName}...`,
        Global_Console_Response_Speed
      );
      Server.maintenance(100);
      Server.status("online");

      await SERVERLIST[serverName].showServer();
      delete OfflineServersList[serverName];
      OnlineServersList[serverName] = Server;
    } else {
      await typeWriter("Server is not offline.", Global_Console_Response_Speed);
    }
  }
  // Repair
  if (command.length >= 2 && command[0] == "repair") {
    const serverName = command.slice(1).join(" ");
    RepairServer(serverName);
  }

  switch (singleCommand) {
    case "sv.ping":
      for (const location of locations) {
        await SERVERLIST[location.toLowerCase()].showServer();
      }
      break;

    case "clear":
      await typeWriter("clearing...", 100);
      setTimeout(() => {
        display.innerHTML = "";
      }, 300);
      break;

    case "inspiration":
    case "inspo":
    case "credit":
    case "credits":
      await typeWriter("Made by Migdood on github: github.com/migdood", 30);
      await typeWriter(
        "Inspired by Voices of the <span style='font-color:purple'> Void: mrdrnose.itch.io/votv</span>",
        30
      );
      break;
    case null:
      break;

    default:
      await typeWriter("Command unknown :(", Global_Console_Response_Speed);
      break;
  }
}
