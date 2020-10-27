import React from "react";
import styled, { keyframes } from "styled-components";
import { Row, Col, Container } from "react-bootstrap";
import { AnimationContainer, ContactForm } from "../components";

const Section = styled.section`
	position: relative;
	overflow: hidden;
	background-color: #000;
	padding: 100px 0;
`;

const FormRow = styled(Row)`
	background-color: #111;
`;

const ContactCol = styled(Col)`
	min-height: 600px;
	max-height: 600px;
	padding: 0;
	display: flex;
	align-items: center;
`;

const gradientAnimation = keyframes`
			0% {
					background-position: 15% 0%;
			}
			50% {
					background-position: 85% 100%;
			}
			100% {
					background-position: 15% 0%;
			}
	`;

const Gradient = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	clip-path: polygon(
		0% 100%,
		10px 100%,
		10px 10px,
		calc(100% - 10px) 10px,
		calc(100% - 10px) calc(100% - 10px),
		10px calc(100% - 10px),
		10px 100%,
		100% 100%,
		100% 0%,
		0% 0%
	);
	background: linear-gradient(
		120deg,
		#04e5e5,
		#f37055,
		#ef4e7b,
		#a166ab,
		#5073b8,
		#1098ad,
		#07b39b,
		#6fba82
	);
	background-size: 300% 300%;
	animation: ${gradientAnimation} 5s ease-in-out infinite;
`;

export default function Contact() {
	return (
		<Section id="contact">
			<Container>
				<AnimationContainer animation="fadeIn">
					<FormRow>
						<ContactCol md={12}>
							<ContactForm />
							<Gradient />
						</ContactCol>
					</FormRow>
				</AnimationContainer>
			</Container>
		</Section>
	);
}
