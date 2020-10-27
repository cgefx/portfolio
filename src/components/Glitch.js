import React from "react";
import "./styles/glitch.scss";
//Styled Component does not support @for loops

export default function Glitch({ text }) {
	return (
		<p className="glitch" data-text={text}>
			{text}
		</p>
	);
}
