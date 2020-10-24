import React from "react";
import "../scss/styles.scss";
//Styled Component does not support @for loops

class Glitch extends React.Component {
	render() {
		const { text } = this.props;
		return (
			<p className="glitch" data-text={text}>
				{text}
			</p>
		);
	}
}
export default Glitch;
