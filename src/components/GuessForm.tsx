import { useEffect, useState } from "react";

const GuessForm = () => {
	const minNum = 1;
	const maxNum = 100;
	const [randomNo, setRandomNo] = useState(0);

	useEffect(() => {
		const randomNumber =
			Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
		setRandomNo(randomNumber);
	}, []);

	console.log(randomNo);

	return (
		<div className="bg-[#FBDB93] h-auto w-[500px] rounded-xl px-5 py-8">
			<div className="">
				<h2 className="text-2xl font-semibold">Number Guesser 🚀</h2>
				<p className="text-lg">Guess a number between 1 and 100 </p>
			</div>
			<form className="mt-5">
				<input
					type="text"
					id="guess"
					className="h-[40px] w-full bg-white px-4 rounded-lg"
					placeholder="Enter a number between 1 and 100"
				/>
				<div className="mt-5">
					<button
						type="button"
						className="bg-[#3A0519] h-[45px] w-[150px] text-lg font-semibold text-white cursor-pointer rounded-lg hover:bg-[#BE5B50]"
					>
						Start here
					</button>
					{/* <button
						type="button"
						className="bg-[#3A0519] h-[50px] w-[180px] text-xl font-semibold text-white cursor-pointer rounded-lg hover:bg-[#BE5B50]"
					>
						Start here
					</button> */}
				</div>
			</form>
		</div>
	);
};

export default GuessForm;
