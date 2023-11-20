import {
  typeWriter,
  typeWriterPlayer,
  typeWriterLocation,
  inputChecker,
} from "./functions.js";
import { Server, SERVERLIST } from "./classes&objects.js";
document.addEventListener("DOMContentLoaded", async () => {
  await typeWriter("Welcome to Server Keeper.", 30);
  SERVERLIST["golf"].showServer();
  input.focus();
});

const locationName = document.getElementById("locationName");
const display = document.getElementById("display");
export const input = document.getElementById("displayInput");
export const locations = [
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
