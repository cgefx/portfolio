import React from "react";
import Tilt from "react-tilt";
import styled, { keyframes } from "styled-components";
import { RevealContent } from ".";
import DesktopContent from "./PortfolioItemDesktop.js";

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	height: ${({ type }) => (type !== "slider" ? "100%" : "600px")};
	transition: 0.5s;
	height: 700px;
	@media (max-width: 1500px) {
		height: 600px;
	}
	@media (max-width: 1024px) {
		height: 400px;
	}
`;

const MoveUp = keyframes`
0% { transform: translateY(0); }
100% { transform: translateY(-20px); }
`;

const MoveDown = keyframes`
0% { transform: translateY(0); }
100% { transform: translateY(20px); }
`;

const Text = styled.div`
	transform: translateY(50px);
	transition: 0.5s;
	width: 100%;
	text-align: center;
`;
const Heading = styled.h4`
	color: #fff;
	font-weight: 600;
	font-size: 25px;
`;

const SubHeading = styled.h5`
	color: #fff;
	font-size: 20px;
	font-weight: 400;
	text-transform: uppercase;
`;

const MobileContent = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	opacity: 0 !important;
	transition: 0.5s;
	display: flex;
	align-items: flex-end;
	visibility: visible;
	background-image: linear-gradient(
		to top,
		rgba(4, 229, 229, 1),
		rgba(255, 255, 255, 0)
	);
	@media (min-width: 1025px) {
		display: none !important;
	}
`;
const Item = styled.div`
	position: relative;
	min-height: 700px;
	max-height: 700px;
	@media (max-width: 1500px) {
		min-height: 600px;
		max-height: 600px;
	}
	@media (max-width: 1024px) {
		min-height: 400px;
		max-height: 400px;
	}
	overflow: hidden;
	max-width: 95%;
	margin: 40px ${({ type }) => (type !== "slider" ? "0" : "auto")};
	border-radius: 10px;
	&.move-up {
		animation: ${MoveUp} 5s infinite alternate;
	}
	&.move-down {
		animation: ${MoveDown} 5s infinite alternate;
	}
	&:hover {
		${Text} {
			transform: translateY(-10px);
		}
		img {
			transform: scale(1.1);
		}
		${MobileContent} {
			opacity: 1 !important;
		}
	}
	&.blue-shadow {
		box-shadow: 0 28px 60px rgb(4, 229, 229, 0.2);
		transition: 0.5s;
		&:hover {
			box-shadow: 0 28px 60px rgb(4, 229, 229, 0.5);
		}
	}
`;

export default function PortfolioItem({
	image,
	link,
	index,
	text,
	type,
	category
}) {
	const showContent = () => {
		setTimeout(() => {
			// child.enable();
			document
				.getElementById(`portfolio-item-${index}`)
				.classList.add("blue-shadow");
		}, 800);
	};

	const showImage = () => {
		if (type === "slider") {
			return <Image src={image} alt={text} />;
		} else {
			return (
				<RevealContent callParentMethod={true} parentMethod={showContent}>
					<Image src={image} type={type} alt={text} />
				</RevealContent>
			);
		}
	};

	if (type === "slider") {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer">
				<Tilt options={{ scale: 1, max: 10 }}>
					<Item className="blue-shadow">
						{showImage()}
						<MobileContent>
							<Text>
								<Heading>{text}</Heading>
								<SubHeading>{category}</SubHeading>
							</Text>
						</MobileContent>
						<DesktopContent
							text={text}
							category={category}
							// ref={(cd) => (child = cd)}
							type={type}
						/>
					</Item>
				</Tilt>
			</a>
		);
	} else {
		return (
			<a href={link} target="_blank" rel="noopener noreferrer">
				<Tilt options={{ scale: 1, max: 10 }}>
					<Item
						type={type}
						className={`${index % 2 === 0 ? "move-up" : "move-down"}`}
						id={`portfolio-item-${index}`}
					>
						{showImage()}
						<MobileContent>
							<Text>
								<Heading>{text}</Heading>
								<SubHeading>{category}</SubHeading>
							</Text>
						</MobileContent>
						<DesktopContent
							text={text}
							category={category}
							// ref={(cd) => (child = cd)}
							type={type}
						/>
					</Item>
				</Tilt>
			</a>
		);
	}
}
