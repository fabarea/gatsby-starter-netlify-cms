import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: notes } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">
                My Notes along the day...
              </h1>
            </div>
            {notes.map(({ node: note }) => (
              <div
                className="content"
                style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                key={note.id}
              >
                <p>
                  <Link className="has-text-primary" to={note.fields.slug}>
                    {note.frontmatter.title}
                  </Link>
                  {note.frontmatter.date && <span> &bull; </span>}
                  <small>{note.frontmatter.date}</small>
                </p>
                <p>{note.excerpt}</p>
                <p>
                  {/*{post.excerpt}*/}
                  <br />
                  <Link className="button is-small" to={note.fields.slug}>
                    Keep Reading →
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { public: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
