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

export default function Tabs() {
	const [activeTab, setActiveTab] = React.useState("skills");

	return (
		<TabContainer>
			<TabSelectors>
				<TabSelector
					className={activeTab === "skills" ? "active" : ""}
					onClick={() => setActiveTab("skills")}
				>
					Skills
				</TabSelector>
				<TabSelector
					className={activeTab === "experience" ? "active" : ""}
					onClick={() => setActiveTab("experience")}
				>
					Experience
				</TabSelector>
				<TabSelector
					className={activeTab === "education" ? "active" : ""}
					onClick={() => setActiveTab("education")}
				>
					Education
				</TabSelector>
			</TabSelectors>
			<StyledTabs>
				<Tab
					style={{
						display: activeTab === "skills" ? "block" : "none"
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
