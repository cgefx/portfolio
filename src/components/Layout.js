import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import PageRevealer from "./PageRevealer";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class Layout extends React.Component {
	componentDidUpdate() {
		window.location.reload(false);
	}

	render() {
		const { children } = this.props;

		return (
			<>
				<GlobalStyles />
				<Navbar
					scroll={this.props.isHome ? true : false}
					sections={this.props.sections}
				/>
				<PageRevealer />
				<div>{children}</div>
				<Footer />
			</>
		);
	}
}

export default Layout;
