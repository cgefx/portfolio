import styled, { keyframes } from "styled-components";
import { Col, Container } from "react-bootstrap";

export const Section = styled.section`
	position: relative;
	overflow: hidden;
	background-color: #050505;
	padding-top: 50px;
	.particles {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	@media (max-width: 767px) {
		padding: 80px 20px;
	}
	@media (max-width: 500px) {
		padding: 0 20px;
	}
`;

export const AboutContainer = styled(Container)`
	padding: 100px 0;
	@media (max-width: 500px) {
		padding: 50px 0;
	}
`;

export const LeftCol = styled(Col)`
	display: flex;
	align-items: baseline;
	justify-content: center;
	@media (max-width: 500px) {
		margin-bottom: 50px;
	}
`;

const AnimatedShadow = keyframes`
			0%   {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
			10%  {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
			20%  {box-shadow: 0 28px 60px rgba(239, 78, 123, .5);}
			30%  {box-shadow: 0 28px 60px rgba(161, 102, 171, .5);}
			40% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
			50% {box-shadow: 0 28px 60px rgba(4, 229, 229, .5);}
			60% {box-shadow: 0 28px 60px rgba(7, 179, 155, .5);}
			70% {box-shadow: 0 28px 60px rgba(111, 186, 130, .5);}
			80% {box-shadow: 0 28px 60px rgba(80, 115, 184, .5);}
			90% {box-shadow: 0 28px 60px rgba(16, 152, 173, .5);}
			100% {box-shadow: 0 28px 60px rgba(243, 112, 85, .5);}
	`;
export const ImageContainer = styled.div`
	border-radius: 20px;
	overflow: hidden;
	animation: ${AnimatedShadow} 10s infinite alternate;
	@media (max-width: 767px) {
		margin-bottom: 50px;
	}
`;

export const Image = styled.img`
	max-width: 400px;
	@media (max-width: 767px) {
		max-width: 200px;
	}
	@media (max-width: 1400px) {
		max-width: 280px;
	}
`;

export const Separator = styled.div`
	height: 5px;
	width: 50px;
	background-color: #04e5e5;
	margin-bottom: 20px;
`;

export const Heading = styled.h2`
	font-size: 70px;
	font-family: Teko;
	color: #fff;
	line-height: 50px;
`;

export const Text = styled.p`
	font-size: 12px;
	font-weight: 300;
	color: #c5c5c5;
`;
