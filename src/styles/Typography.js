import styled from "styled-components";

export const Heading1 = styled.h1`
	font-size: 80px;
	font-family: Teko;
	line-height: 40px;
	color: #fff;
	font-weight: 400;
	text-transform: uppercase;
	text-align: center;
	@media (min-width: 768px) {
		margin-left: 4px;
	}
	@media (max-width: 767px) {
		margin-left: 2px;
	}
	@media (min-width: 768px) and (max-width: 1500px) {
		font-size: 40px;
	}
	@media (max-width: 767px) {
		font-size: 20px;
		line-height: 20px;
	}
`;

export const Heading2 = styled.h2`
	font-size: 120px;
	color: #fff;
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	background: -webkit-linear-gradient(left, #00ffff, #007a7a);
	background: -o-linear-gradient(right, #00ffff, #007a7a);
	background: -moz-linear-gradient(right, #00ffff, #007a7a);
	background: linear-gradient(to right, #00ffff, #007a7a);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	@media (max-width: 767px) {
		font-size: 40px;
		line-height: 40px;
	}
	@media (min-width: 768px) and (max-width: 1500px) {
		font-size: 70px;
	}
`;
