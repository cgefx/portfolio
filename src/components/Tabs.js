import React from "react";
import styled, { keyframes } from "styled-components";
import Progress from "./Progress";

const TabContainer = styled.div`
	min-height: 400px;
	margin-top: 20px;
	@media (max-width: 767px) {
		margin-top: 50px;
		padding: 0 20px;
	}
`;
const TabSelectors = styled.div`
	display: flex;
`;

const ColorAnimation = keyframes`
			0%  {border-color: #04e5e5;}
			10% {border-color: #f37055;}
			20% {border-color: #ef4e7b;}
			30% {border-color: #a166ab;}
			40% {border-color: #5073b8;}
			50% {border-color: #04e5e5;}
			60% {border-color: #07b39b;}
			70% {border-color: #6fba82;}
			80% {border-color: #5073b8;}
			90% {border-color: #1098ad;}
			100% {border-color: #f37055;}
	`;
const TabSelector = styled.button`
	color: #fff;
	font-size: 20px;
	font-weight: bold;
	background-color: transparent;
	border: none;
	margin: 0 10px 0 0;
	border-bottom: 2px solid #fff;
	transition: 0.5s;
	&:hover,
	&.active {
		animation: ${ColorAnimation} 10s infinite alternate;
	}
	&:focus {
		outline: none;
	}
	@media (max-width: 767px) {
		font-size: 18px;
	}
`;

const StyledTabs = styled.div`
	margin-top: 20px;
`;

const Fade = keyframes`
			0% {
					opacity: 0;
			}
			100% {
					opacity: 1;
			}
	`;

const Tab = styled.div`
	display: none;
	animation: ${Fade} 1s forwards;
`;

class Tabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tab: "skills"
		};
	}

	render() {
		return (
			<TabContainer>
				<TabSelectors>
					<TabSelector
						className={this.state.tab === "skills" ? "active" : ""}
						onClick={() => this.setState({ tab: "skills" })}
					>
						Skills
					</TabSelector>
					<TabSelector
						className={this.state.tab === "experience" ? "active" : ""}
						onClick={() => this.setState({ tab: "experience" })}
					>
						Experience
					</TabSelector>
					<TabSelector
						className={this.state.tab === "education" ? "active" : ""}
						onClick={() => this.setState({ tab: "education" })}
					>
						Education
					</TabSelector>
				</TabSelectors>
				<StyledTabs>
					<Tab
						style={{
							display: this.state.tab === "skills" ? "block" : "none"
						}}
					>
						<Progress value={90} text="React" />
						<Progress value={80} text="Angular" />
						<Progress value={10} text="MongoDB" />
						<Progress value={100} text="PHP" />
						<Progress value={80} text="MySQL" />
					</Tab>
				</StyledTabs>
			</TabContainer>
		);
	}
}

export default Tabs;
