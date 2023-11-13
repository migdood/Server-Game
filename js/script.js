document.getElementById("displayInput").addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    // Get the text that the user typed in the input element.
    let text = this.textContent;

    // Append the text to the output element.
    document.getElementById("display").innerHTML += text + "<br>";

    // Clear the input element.
    this.textContent = "";
  }
});
