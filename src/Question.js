import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
	const [isShowInfo, setShowInfo] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				<button className="btn">btn</button>
			</header>
			{isShowInfo && <p>{info}</p>}
		</article>
	);
};

export default Question;
