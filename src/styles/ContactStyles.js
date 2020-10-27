import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import { gradientAnimation } from "../styles";

export const Section = styled.section`
	position: relative;
	overflow: hidden;
	background-color: #000;
	padding: 100px 0;
`;

export const FormRow = styled(Row)`
	background-color: #111;
`;

export const ContactCol = styled(Col)`
	min-height: 600px;
	max-height: 600px;
	padding: 0;
	display: flex;
	align-items: center;
`;

export const Gradient = styled.div`
	position: absolute;
	border-radius: 5px;
	height: 100%;
	width: 100%;
	top: 0;
	--width: 5px;
	clip-path: polygon(
		0% 100%,
		var(--width) 100%,
		var(--width) var(--width),
		calc(100% - var(--width)) var(--width),
		calc(100% - var(--width)) calc(100% - var(--width)),
		var(--width) calc(100% - var(--width)),
		var(--width) 100%,
		100% 100%,
		100% 0%,
		0% 0%
	);
	background: var(--gradient);
	background-size: 300% 300%;
	animation: ${gradientAnimation} 5s ease-in-out infinite;
`;
