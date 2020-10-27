import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
	NavbarWrapper,
	NavbarContainer,
	Nav,
	StyledNavItem,
	LogoWrapper,
	Logo,
	NavInner,
	Toggler
} from "./styles/NavbarStyles";
var scrollToElement = require("scroll-to-element");

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapse: false,
			sticky: false,
			sections: this.props.sections
				? this.props.sections
				: ["home", "about", "portfolio", "contact"]
		};
	}

	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll, { passive: true });
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}

	shouldComponentUpdate(nextProps, nextState) {
		if (window.pageYOffset >= 50 && this.state.sticky) {
			if (this.state.collapse !== nextState.collapse) {
				return true;
			}
			return false;
		} else {
			return true;
		}
	}

	handleScroll = (event) => {
		if (window.pageYOffset >= 50) {
			this.setState({ sticky: true });
		} else {
			this.setState({ sticky: false });
		}
	};

	collapseNav() {
		console.log(this.state, "col");
		if (!this.state.collapse) {
			this.setState({ collapse: true });
		} else {
			this.setState({ collapse: false });
		}
	}

	navItems() {
		return this.state.sections.map((value, index) => {
			return (
				<StyledNavItem key={index} onClick={() => this.navigate(value)}>
					{value}
				</StyledNavItem>
			);
		});
	}

	navigate(id) {
		if (this.props.scroll) {
			const el = document.getElementById(id);
			scrollToElement(el, {
				offset: 0,
				ease: "in-out-expo",
				duration: 2000
			});
		} else {
			window.location.href = `./#${id}`;
		}
	}

	render() {
		return (
			<NavbarWrapper
				className={`header${this.state.sticky === true ? " sticky" : ""}`}
			>
				<NavbarContainer>
					<LogoWrapper className="logo">
						<Logo>gibson.codes</Logo>
					</LogoWrapper>
					<Toggler
						onClick={() => this.collapseNav()}
						className="navbar-toggler navbar-toggler-right"
					>
						<FontAwesomeIcon icon={faBars} className="bars" />
					</Toggler>
					<Nav
						className={`navbar navbar-expand-sm ${
							this.state.collapse === true ? "expand" : "hidden_mobile"
						}`}
					>
						<NavInner
							className={`navbar-collapse collapse ${
								this.state.collapse === true ? "show" : ""
							}`}
						>
							<div className="navbar-nav">{this.navItems()}</div>
						</NavInner>
					</Nav>
				</NavbarContainer>
			</NavbarWrapper>
		);
	}
}

export default Navbar;
