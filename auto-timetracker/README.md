# 🔁 Timed Auto Clicker Chrome Extension

This Chrome Extension simulates **mouse clicks** and **random key presses** continuously for a specific number of minutes that the user provides.

---

## 🚀 Features

- ✅ Simulates mouse click at the center of the screen
- ✅ Presses random keys like `a`, `b`, `Enter`, `ArrowDown`, etc.
- ✅ Runs for a custom time (in minutes)
- ✅ Stops automatically after the set duration
- ✅ No manual stop/start needed

---

## 📦 Installation

1. Clone or download this repo.
2. Go to `chrome://extensions` in your Chrome browser.
3. Turn on **Developer mode** (top-right toggle).
4. Click on **Load unpacked**.
5. Select the extension folder.

---

## 🧪 How to Use

1. Visit any webpage (e.g., [https://jsbin.com](https://jsbin.com))
2. Click on the extension icon in the toolbar
3. Enter the number of minutes (e.g., `30`)
4. Click the **Start Automation** button
5. The extension will:
   - Auto-click at the center of the screen
   - Press random keys every 500ms
   - Stop automatically after the selected time

---

## 🛠 Files Overview

| File         | Description                              |
|--------------|------------------------------------------|
| `manifest.json` | Declares extension details and permissions |
| `popup.html` | Simple UI for time input                |
| `popup.js`   | Executes the automation script in active tab |
| `README.md`  | You're reading it!                       |

---

## 🧠 Notes

- Only works on **active tab** and websites that allow injected scripts
- Works best on user-interactive pages like test editors, games, or input fields

---

## ⚠️ Disclaimer

This extension is meant for educational or testing purposes only. Do not use it for unauthorized automation or violating site terms.

---

## 📧 Author

Made by [Your Name]  
💻 Frontend Developer | Automation Enthusiast  
