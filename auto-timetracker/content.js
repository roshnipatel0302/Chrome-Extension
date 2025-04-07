chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "start") {
      const keys = ['a', 'b', 'c', 'd', 'Enter', 'Escape', 'ArrowUp', 'ArrowDown'];
      const startTime = Date.now();
      const duration = message.minutes * 60 * 1000;
  
      console.log(`Automation started for ${message.minutes} minute(s)`);
  
      const interval = setInterval(() => {
        const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
  
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        el?.dispatchEvent(clickEvent);
        console.log("Mouse clicked");
  
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const keyEvent = new KeyboardEvent('keydown', {
          key: randomKey,
          bubbles: true,
          cancelable: true
        });
        document.dispatchEvent(keyEvent);
        console.log("Key pressed:", randomKey);
  
        if (Date.now() - startTime > duration) {
          clearInterval(interval);
          console.log("Automation ended after given duration");
        }
      }, 500);
    }
  });
  