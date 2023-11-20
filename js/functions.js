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
  const ResponseSpeed = 10;
  switch (text.toLowerCase()) {
    case "sv.ping":
      await typeWriter("not today bich boy", ResponseSpeed);
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
