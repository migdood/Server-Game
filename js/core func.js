export const Global_Repeat_Response_Speed = 10;
export const Global_Console_Response_Speed = 5;
const input = document.getElementById("displayInput");


export async function typeWriter(text, speed) {
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

export async function typeWriterPlayer(text, speed) {
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

export class Server {
  constructor(name, maintenance, status) {
    this.name = name;
    this.maintenance = maintenance;
    this.status = status;
  }
  async showServer() {
    await typeWriter(
      `${this.name} | maintenance: ${this.maintenance} | status: ${this.status}`,
      Global_Repeat_Response_Speed
    );
    input.focus();
  }
  maintain(newMaintenance) {
    this.maintenance = newMaintenance;
  }
  statusUpdate(newStatus) {
    this.status = newStatus;
  }
}
