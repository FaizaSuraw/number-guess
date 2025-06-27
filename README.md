# Number Guessing Game

A simple and interactive number guessing game built with **React + TypeScript**. The user tries to guess a randomly generated number between 1 and 100, with a maximum of 10 attempts.

## Features

- Input validation for numbers between 1 and 100
- Feedback on guesses: Too high / Too low
- Score calculation based on attempts
- Game state management with `useReducer`
- Fully responsive and clean UI
- Win and Loss messages with score display
- New Game button to reset the state
- Disabled input/guess button before game starts

## 🛠 Tech Stack

- **React** (with functional components)
- **TypeScript**
- **CSS** (custom styling)
- **Vite** (for fast development)

## 📸 Screenshots

| ![image](https://github.com/user-attachments/assets/a4c22631-ecc8-4a31-ac17-a5e9101a322c)
 | ![image](https://github.com/user-attachments/assets/ea13a0d3-1198-4f78-bbba-a47f68dfa54f)
| ![image](https://github.com/user-attachments/assets/72a938c7-cfcd-4aaf-94a3-ed07b3e8ae41)
|


## 📦 Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/number-guessing-game.git
cd number-guessing-game

## **Install dependencies**

npm install

Run the app

npm run dev

The app will open in http://localhost:5173/ by default.

🧠 Game Logic

1. Random number is generated between 1–100.

2. User has 10 attempts.

3. Each guess gives feedback: too high, too low, or correct.

4. Game ends on correct guess or after 10 tries.

5. Score = ((10 - attemptsUsed) / 10) * 100.

📂 Folder Structure
src/
│

├── components/

│   ├── Game.tsx

│   ├── InputSection.tsx

│   ├── Feedback.tsx

│
├── numberGuessGame.ts  # reducer + initial state

├── App.tsx

└── main.tsx
