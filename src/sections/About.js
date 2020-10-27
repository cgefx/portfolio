import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { RevealContent, AnimationContainer, Tabs } from "../components";
import {
	Section,
	AboutContainer,
	LeftCol,
	ImageContainer,
	Image,
	Separator,
	Heading,
	Text
} from "../styles/AboutStyles";

export default function About() {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "about-me.jpg" }) {
				childImageSharp {
					fluid(maxHeight: 2000) {
						src
					}
				}
			}
		}
	`);

	return (
		<Section id="about">
			<AboutContainer>
				<Row>
					<LeftCol md={6}>
						<AnimationContainer animation="fadeIn">
							<ImageContainer>
								<RevealContent delay={500}>
									<Image src={image.childImageSharp.fluid.src} alt="about" />
								</RevealContent>
							</ImageContainer>
						</AnimationContainer>
					</LeftCol>
					<Col md={6}>
						<AnimationContainer animation="fadeIn">
							<Heading>About Me</Heading>
							<Separator />
							<Text>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum.
							</Text>
							<Tabs />
						</AnimationContainer>
					</Col>
				</Row>
			</AboutContainer>
		</Section>
	);
}
