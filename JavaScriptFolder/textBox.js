

class Typewriter {
  constructor(element, speed = 60) {
    this.element = element;
    this.speed = speed;
    this.queue = [];
    this.isTyping = false;
  }

  async type(text) {
    
    this.queue.push(text);
    if (!this.isTyping) {
      this.processQueue();
      
    }
    
  }

  async processQueue() {
    this.isTyping = true;
    
    while (this.queue.length > 0) {
      const text = this.queue.shift();
      
        document.getElementById("consoleText").textContent = "";
      
      
      await this.typeText(text);
    }
       this.isTyping = false;
    
  }

  typeText(text) {
    return new Promise(resolve => {
      let i = 0;

      const interval = setInterval(() => {
        this.element.textContent += text[i];
        i++;

        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.speed);
    });
  }
}

const writer = new Typewriter(document.getElementById("consoleText") );

function textBoxUpdate(newText) {
     writer.type(newText);

}
  



export { textBoxUpdate };