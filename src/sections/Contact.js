import React from "react";
import { Container } from "react-bootstrap";
import {
	Section,
	FormRow,
	ContactCol,
	Gradient
} from "../styles/ContactStyles";
import { AnimationContainer, ContactForm } from "../components";

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
