import { useEffect, useState, type FormEvent } from "react";
import { toast } from "react-toastify";

type GuessFormProps = {
	hasGameStarted?: boolean;
	setHasGameStarted: (value: boolean) => void;
};

const GuessForm = ({ setHasGameStarted }: GuessFormProps) => {
	const minNum = 1;
	const maxNum = 100;
	const maxAttempts = 5;

	const [randomNo, setRandomNo] = useState(0);
	const [attempts, setAttempts] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const [feedback, setFeedback] = useState("");
	const [gameIsRunning, setGameIsRunning] = useState(true);

	useEffect(() => {
		const randomNumber =
			Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
		setRandomNo(randomNumber);
	}, []);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!gameIsRunning) {
			toast.info("The game has ended. Refresh to play again!");
			return;
		}

		const guess = parseInt(inputValue.trim(), 10);

		if (isNaN(guess)) {
			toast.error("Please enter a valid number.");
			return;
		}

		if (guess < minNum || guess > maxNum) {
			toast.error(`Number must be between ${minNum} and ${maxNum}.`);
			return;
		}

		const newAttempts = attempts + 1;
		setAttempts(newAttempts);

		if (guess === randomNo) {
			setFeedback(`🎉 Correct! The number was ${randomNo}`);
			toast.success("You guessed it right!");
			setGameIsRunning(false);

			setTimeout(() => setHasGameStarted(false), 5000);
		} else if (newAttempts >= maxAttempts) {
			setFeedback(`❌ Game over! The number was ${randomNo}`);
			toast.error("Out of attempts. Try again!");
			setGameIsRunning(false);

			setTimeout(() => setHasGameStarted(false), 3000);
		} else if (guess < randomNo) {
			setFeedback("Too low! ⬇️");
		} else {
			setFeedback("Too high! ⬆️");
		}
	};

	return (
		<div className="bg-[#FBDB93] h-auto w-[500px] rounded-xl px-5 py-8">
			<div className="">
				<h2 className="text-2xl font-semibold">Number Guesser 🚀</h2>
				<p className="text-lg">Guess a number between 1 and 100 </p>
			</div>
			<form className="mt-5" onSubmit={handleSubmit}>
				<input
					type="text"
					id="guess"
					className="h-[40px] w-full bg-white px-4 rounded-lg"
					placeholder="Enter a number between 1 - 100"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<div className="mt-5">
					<button
						type="submit"
						disabled={!gameIsRunning}
						className="bg-[#3A0519] h-[45px] w-[150px] text-lg font-semibold text-white cursor-pointer rounded-lg hover:bg-[#BE5B50]"
					>
						Submit
					</button>
				</div>
			</form>
			<div className="mt-4 text-lg">
				<p>{feedback}</p>
				<p className="text-sm text-gray-700">
					Attempts left: {maxAttempts - attempts}
				</p>
			</div>
		</div>
	);
};

export default GuessForm;
