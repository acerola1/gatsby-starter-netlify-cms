import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'

export const IwiwPageTemplate = ({ title, person, contentComponent }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title + '%%%%'}
              </h2>
               {person.map(p => (
                   <div>name: {p.name}</div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

IwiwPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const IwiwPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IwiwPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

IwiwPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IwiwPage

export const aboutPageQuery = graphql`
query IwiwPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    frontmatter {
      title
      person {
        fields
        name
        position
      }
    }
  }
}
`