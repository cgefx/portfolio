import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Heading1, Heading2 } from "../styles/Typography";
import { Container } from "react-bootstrap";

const Main = styled.div`
	width: 100%;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	background-color: #000;
`;

const Content = styled.div`
	position: relative;
	z-index: 10;
`;

export default function Error404() {
	return (
		<div>
			<Helmet>
				<title>Error 404</title>
				<meta name="description" content="Page not found" />
			</Helmet>
			<Main>
				<Container>
					<Content>
						<Heading1>Error 404</Heading1>
						<Heading2>Page Not Found</Heading2>
					</Content>
				</Container>
			</Main>
		</div>
	);
}
