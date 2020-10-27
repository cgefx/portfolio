import React from "react";

export default function HTML({ headComponents, postBodyComponents, body }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{headComponents}
				<link href="/img/favicon.ico" rel="icon" />
			</head>
			<body style={{ backgroundColor: "#000" }}>
				<div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
				{postBodyComponents}
			</body>
		</html>
	);
}
