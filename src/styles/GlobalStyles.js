import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
	body {
		height: 100%;
		width: 100%;
		margin: 0;
		background-color: #000;
	}
	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family: Poppins;
	}
#___gatsby {
  overflow-x: hidden;
}
@media (max-width: 500px) {
  .slick-dots li {
    margin: 0 !important;
  }
}
`;

export default GlobalStyles;
