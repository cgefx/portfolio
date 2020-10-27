import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
		:root {
		--gradient: linear-gradient(
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
	}
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
