import styled from "styled-components";
import themColor from "../../commons/style/themes/default";

export const MainTextStyle = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: ${themColor.palette.red};

	font-size: 48px;
`;
