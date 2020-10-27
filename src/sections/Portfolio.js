import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";
import styled from "styled-components";
import { Col, Container } from "react-bootstrap";
import {
	AnimatedHeading,
	AnimationContainer,
	PortfolioItem
} from "../components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Section = styled.section`
	background-color: #050505;
	padding: 100px 0;
`;
const PortfolioContainer = styled.div`
	.slick-slide {
		display: block;
		margin: 0px 0 70px 0px;
	}
	.slick-dots {
		bottom: 0;
		li button:before,
		.slick-dots li.slick-active button:before {
			color: #04e5e5;
		}
	}
`;

const settings = {
	dots: true,
	swipe: true,
	infinite: true,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 2,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 10000,
	loop: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				initialSlide: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
	]
};

export default function Portfolio() {
	const { items } = useStaticQuery(
		graphql`
			query {
				items: allMarkdownRemark(
					filter: { fileAbsolutePath: { regex: "/(portfolio)/" } }
					sort: { fields: [frontmatter___id], order: ASC }
					limit: 9
				) {
					edges {
						content: node {
							frontmatter {
								id
								title
								category
								link
								image {
									childImageSharp {
										fluid(maxWidth: 1000) {
											src
										}
									}
								}
							}
						}
					}
				}
			}
		`
	);

	return (
		<Section id="portfolio">
			<Col md={12} style={{ padding: 0 }}>
				<Container>
					<AnimatedHeading text="Recent projects" />
				</Container>
				<PortfolioContainer>
					<AnimationContainer animation="fadeIn">
						<Slider {...settings}>
							{items.edges.map((value, index) => (
								<PortfolioItem
									key={index}
									index={index}
									image={
										value.content.frontmatter.image.childImageSharp.fluid.src
									}
									text={value.content.frontmatter.title}
									category={value.content.frontmatter.category}
									link={value.content.frontmatter.link}
									type="slider"
								/>
							))}
						</Slider>
					</AnimationContainer>
				</PortfolioContainer>
			</Col>
		</Section>
	);
}
