🔢 Basic Calculator App
Welcome to Jawwad's Calculator, a simple, responsive, and user-friendly web-based calculator built using HTML, CSS, and Vanilla JavaScript. This project demonstrates fundamental concepts of DOM manipulation, event handling, and clean UI design—perfect for anyone looking to understand how a basic calculator works under the hood.

🚀 Features
✅ Basic arithmetic operations: Addition, Subtraction, Multiplication, and Division

💡 Clear and intuitive button layout

🧠 Maintains state and displays accurate results

📱 Responsive design for desktop and mobile

🧼 “Clear” functionality to reset calculations

🔁 Chained operations support (via internal state management)


🛠️ Tech Stack
HTML5 – Structured markup for calculator layout

CSS3 – Styled components with basic responsiveness

JavaScript (ES6) – Handles button logic, display updates, and calculation functionality

📂 Project Structure
bash
Copy
Edit
📦 Calculator-App
├── index.html        # Main structure of the calculator
├── style.css         # Styles for layout and design
├── script.js         # All logic for button events and calculations
└── README.md         # Project documentation (you are here)
🧠 How It Works
The calculator maintains a currentDisplay, firstNumber, and secondNumber.

Button clicks are detected with addEventListener, updating the display or performing operations.

When an operator is pressed, the first number is stored and the next input is awaited.

On pressing equals, the operation is calculated and displayed using the calculate() function.

The result persists to support chain calculations.

📌 What I Learned
This project helped solidify my understanding of:

DOM querying and manipulation

Event-driven programming

Managing application state without external libraries

Implementing clear UI logic and user feedback

👨‍💻 Author
Made with 💻 by Jawwad

📜 License
This project is licensed under the MIT License. Feel free to use, modify, and share it.