import {
  typeWriter,
  typeWriterPlayer,
  typeWriterLocation,
  inputChecker,
} from "./functions.js";

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
      await typeWriterPlayer(input.value, 0);
      console.log(input.value);
      await inputChecker(input.value);
      input.value = "";
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
  setInterval(() => {
    typeWriter(locations[Math.floor(Math.random() * locations.length)], 50);
  }, 2000);
}
// autoAdder();
switch (input.value) {
  case "sv.ping":
    typeWriter("Unknown", 50);
    break;

  default:
    break;
}
