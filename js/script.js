const locationName = document.getElementById("locationName");
const display = document.getElementById("display");
const input = document.getElementById("displayInput");

addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    display.innerHTML += "<br>> " + input.value;
    input.value = "";
  }
});
function changeName() {
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
  const locationNumber = Math.floor(Math.random() * locations.length);
  return locations[locationNumber];
}
// Changes the name of the server
setInterval(() => {
  locationName.textContent = changeName();
}, 1000);
// Adds text to the display
setInterval(() => {
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
  const locationNumber = Math.floor(Math.random() * locations.length);
  display.innerHTML += "<br>> " + locations[locationNumber];
}, 2000);
