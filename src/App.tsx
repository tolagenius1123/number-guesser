import { useState } from "react";
import GuessForm from "./components/GuessForm";

function App() {
	const [hasGameStarted, setHasGameStarted] = useState(false);

	return (
		<div className="h-screen w-full bg-[#3A0519] p-2 flex items-center justify-center text-center">
			{hasGameStarted ? (
				<GuessForm />
			) : (
				<div className="flex flex-col h-[300px] w-auto rounded-3xl text-white gap-5 items-center">
					<h1 className="text-4xl">Welcome to Number Guesser🚀</h1>
					<p className="text-2xl">
						Guess the correct number and win a prize🎉🎉🎉
					</p>
					<button
						type="button"
						className="bg-[#FBDB93] h-[50px] w-[180px] text-xl font-semibold text-[#3A0519] cursor-pointer rounded-lg hover:bg-[#BE5B50]"
						onClick={() => setHasGameStarted(true)}
					>
						Start here
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
