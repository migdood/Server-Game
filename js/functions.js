export async function typeWriter(text, speed) {
  let i = 0;
  display.innerHTML += "<br>> ";
  const interval = setInterval(() => {
    if (i < text.length) {
      display.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
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
  if (text == "sv.ping") {
    await typeWriter("lorem you are <strong>gay</strong> ipsum", 30);
  }
}
