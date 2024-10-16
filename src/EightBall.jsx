import React, { useState } from "react";
import "./EightBall.css";

function EightBall({ answers }) {
	// state to manage current message and color
	const [msg, setMsg] = useState("Think of a Question");
	const [color, setColor] = useState("black");

	// Function to choose random answer when clicked
	const handleClick = () => {
		const randomIndex = Math.floor(
			Math.random() * answers.length
		);
		const { msg, color } = answers[randomIndex];
		setMsg(msg);
		setColor(color);
	};

	return (
		<div
			className='EightBall'
			onClick={handleClick}
			style={{ backgroundColor: color }}
		>
			<p>{msg}</p>
		</div>
	);
}

export default EightBall;
