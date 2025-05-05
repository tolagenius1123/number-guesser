# Number Guesser Game 🎯

This is a simple number guessing game built with **React + TypeScript + Vite**. The player has a limited number of attempts to guess a secret number between 1 and 100.

## 🎮 How to Play

1. **Start the Game:**  
   Click the **"Start here"** button to begin a new game.

2. **Guess the Number:**  
   Enter a number between **1 and 100** into the input field and click **Submit**.

3. **Get Feedback:**  
   After each guess, you'll get a hint telling you if the number is:
   - Too high 🔺
   - Too low 🔻
   - Correct 🎉

4. **Limited Attempts:**  
   You only have a limited number of tries to guess the correct number (e.g. 5 attempts). Each incorrect guess reduces your remaining attempts.

5. **Winning or Losing:**  
   - If you guess the number correctly, you'll see a **success message**.
   - If you run out of attempts without guessing the number, the game ends and reveals the correct number.

6. **Restarting the Game:**  
   After a few seconds, the game automatically resets to the welcome screen so you can try again.

⚠️ **Input Validation:**
- Only numbers between 1 and 100 are accepted.
- Invalid inputs are handled gracefully with helpful error messages (powered by `react-toastify`).

---

## 🔧 Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS** (for styling)
- **React Toastify** (for error and feedback messages)

## 🚀 Getting Started

Clone the repo and run it locally:

```bash
npm install
npm run dev
