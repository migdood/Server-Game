
//FIXME: 
// SUSPENDED

import { Server, SERVERLIST } from "./classes&objects.js";
import { locations } from "./script.js";
export async function typeWriter(text, speed) {
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

export async function typeWriterPlayer(text, speed) {
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

export async function typeWriterLocation(text, speed) {
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

export async function inputChecker(text) {
  const ResponseSpeed = 20;
  const command = text.trim().split(" ");
  if (command.length >= 2 && command[0] === "sv.ping") {
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
        locations.forEach(async (location) => {
          //await SERVERLIST[location.toLocaleLowerCase()].showServer();
          await typeWriter(location ,ResponseSpeed);
        });
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
      case "credit":
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
