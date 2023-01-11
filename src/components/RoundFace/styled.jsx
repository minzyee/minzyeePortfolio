import styled, { css } from "styled-components";
import themeColor from "../../commons/style/themes/default";

export const Round = styled.div`
	/* 이거 안적어줘도 되네,,? */
	/* width: ${(props) => props.width}; */
	/* height: ${(props) => props.height}; */

	position: absolute;
	border-radius: 50%;

	// XS: 20px
	${(props) =>
		props.size === "XS" &&
		css`
			width: 40px;
			height: 40px;
		`}

	// S: 60px
	${(props) =>
		props.size === "S" &&
		css`
			width: 60px;
			height: 60px;
		`}

	// M: 80px
	${(props) =>
		props.size === "M" &&
		css`
			width: 80px;
			height: 80px;
		`}

	// L: 100px
	${(props) =>
		props.size === "L" &&
		css`
			width: 100px;
			height: 100px;
		`}

	// XL: 140px
	${(props) =>
		props.size === "XL" &&
		css`
			width: 140px;
			height: 140px;
		`}

	// XXL: 160px
	${(props) =>
		props.size === "XXL" &&
		css`
			width: 160px;
			height: 160px;
		`}

	// XXXL: 180px
	${(props) =>
		props.size === "XXXL" &&
		css`
			width: 180px;
			height: 180px;
		`}


	// bgColor: red
	${(props) =>
		props.bgColor === "red" &&
		css`
			background-color: ${themeColor.palette.red};
		`}

	// bgColor: orange
	${(props) =>
		props.bgColor === "orange" &&
		css`
			background-color: ${themeColor.palette.orange};
		`}

	// bgColor: yellow
		${(props) =>
		props.bgColor === "yellow" &&
		css`
			background-color: ${themeColor.palette.yellow};
		`}

	// bgColor: green
		${(props) =>
		props.bgColor === "green" &&
		css`
			background-color: ${themeColor.palette.green};
		`}

	// bgColor: blue
	${(props) =>
		props.bgColor === "blue" &&
		css`
			background-color: ${themeColor.palette.blue};
		`}

	// bgColor: pink
	${(props) =>
		props.bgColor === "pink" &&
		css`
			background-color: ${themeColor.palette.pink};
		`}
`;
