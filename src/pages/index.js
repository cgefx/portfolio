import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "components/layout";
import Hero from "sections/hero";
import About from "sections/about";
import Portfolio from "sections/portfolio";
import Contact from "sections/contact";

class Index extends React.Component {
	render() {
		const { site } = this.props.data;

		return (
			<div>
				<Helmet>
					<title>{site.meta.title}</title>
					<meta name="description" content={site.meta.description} />
				</Helmet>
				<Layout
					isHome={true}
					sections={["home", "about", "portfolio", "contact"]}
				>
					<Hero />
					<About />
					<Portfolio />
					<Contact />
				</Layout>
			</div>
		);
	}
}

export default Index;

export const personalQuery = graphql`
	query {
		site {
			meta: siteMetadata {
				title
				description
			}
		}
	}
`;
