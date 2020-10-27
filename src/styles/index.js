import styled, { keyframes } from "styled-components";

export const StyledLink = styled.a`
	color: #fff;
	text-decoration: none;
	border-bottom: 2px solid;
	font-weight: 300;
	transition: 0.5s;
	margin-top: 40px;
	&:hover {
		color: #fff;
		text-decoration: none;
		border-color: #04e5e5;
	}
`;

export const gradientAnimation = keyframes`
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
