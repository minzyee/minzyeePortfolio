import React from "react";
import { Round } from "./styled";
// import themeColor from "../../commons/style/themes/default";

function RoundFace() {
	return (
		<>
			<Round
				size="XXXL"
				bgColor="green"
				style={{ left: "-60px", top: "40px" }}
			></Round>
			<Round
				size="XS"
				bgColor="pink"
				style={{ left: "-10px", top: "360px" }}
			></Round>
			<Round
				size="XS"
				bgColor="blue"
				style={{ right: "200px", top: "-10px" }}
			></Round>
			<Round
				size="M"
				bgColor="red"
				style={{ right: "20px", top: "100px" }}
			></Round>
			<Round
				size="S"
				bgColor="yellow"
				style={{ left: "260px", bottom: "160px" }}
			></Round>
			<Round
				size="XL"
				bgColor="blue"
				style={{ left: "80px", bottom: "-50px" }}
			></Round>
			<Round
				size="XS"
				bgColor="red"
				style={{ left: "500px", bottom: "60px" }}
			></Round>
			<Round
				size="M"
				bgColor="orange"
				style={{ left: "280px", top: "150px" }}
			></Round>
			<Round
				size="S"
				bgColor="pink"
				style={{ left: "500px", top: "-20px" }}
			></Round>
			<Round
				size="XS"
				bgColor="green"
				style={{ right: "500px", top: "220px" }}
			></Round>
			<Round
				size="XS"
				bgColor="orange"
				style={{ right: "-5px", top: "320px" }}
			></Round>
			<Round
				size="M"
				bgColor="pink"
				style={{ right: "250px", top: "400px" }}
			></Round>
			<Round
				size="XL"
				bgColor="yellow"
				style={{ right: "-20px", bottom: "20px" }}
			></Round>
		</>
	);
}

export default RoundFace;
