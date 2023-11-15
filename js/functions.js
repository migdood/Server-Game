export function typeWriter(text, speed) {
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
export function typeWriterPlayer(text, speed) {
  let i = 0;
  display.innerHTML += "<br>< ";
  const interval = setInterval(() => {
    if (i < text.length) {
      display.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
export function typeWriterLocation(text, speed) {
  let i = 0;
  locationName.textContent = "";
  const interval = setInterval(() => {
    if (i < text.length) {
      locationName.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}
