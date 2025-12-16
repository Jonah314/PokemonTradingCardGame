function textBoxUpdate(newText) {
    const consoleText = document.getElementById("consoleText");
    consoleText.textContent = "";

   
    let i = 0;
    const speed = 30; /* The speed/duration of the effect in milliseconds */    

    typeWriter(newText, i, speed);
}


function typeWriter(text, i, speed ) {
    if (i < text.length) {
      document.getElementById("consoleText").textContent += text.charAt(i);
      i++;

      setTimeout(() => {
      typeWriter(text, i, speed);
    }, speed);
    }
  }

  



export { textBoxUpdate };