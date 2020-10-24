import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Layout } from "../components";
import { Hero, About, Portfolio, Contact } from "../sections";

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
