import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
	const [isShowInfo, setShowInfo] = useState(false);
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!isShowInfo)}>
                    {isShowInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
			</header>
			{isShowInfo && <p>{info}</p>}
		</article>
	);
};

export default Question;
