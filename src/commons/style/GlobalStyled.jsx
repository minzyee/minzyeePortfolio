import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import theme from "./themes/default";

const GlobalStyle = createGlobalStyle`
	
	${reset}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-color: ${theme.palette.ivory};
	}

	ul,
	li {
		list-style: none;
	}

	a {
		text-decoration: none;
		color: ${theme.palette.black};
	}
`;

export default GlobalStyle;
