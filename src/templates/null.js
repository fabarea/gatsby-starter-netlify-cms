import React from "react";
import PropTypes from "prop-types";
// import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
import { graphql, Link } from "gatsby";
// import { graphql, Link } from 'gatsby'
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { BlogPostTemplate } from "./blog-post";
// import Content, { HTMLContent } from '../components/Content'

export const NoteTemplate = ({
  content,
  contentComponent,
  title,
  tags,
  helmet
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-1" >
            <Link className="button is-small" to="/" style={{float: 'right', position: 'relative', top: '0.7em'}}>
              Back
            </Link>
          </div>
          <div className="column is-10">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

NoteTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
};

const Null = ({ data }) => {
  const { markdownRemark: note } = data

  return <Layout>
    <NoteTemplate
      content={note.html}
      contentComponent={HTMLContent}
      description={note.frontmatter.description}
      helmet={<Helmet title={`${note.frontmatter.title} | Note`} />}
      tags={note.frontmatter.tags}
      title={note.frontmatter.title}
    />
  </Layout>;
};

Null.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default Null;

export const pageQuery = graphql`
  query Null($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
      }
    }
  }
`;
