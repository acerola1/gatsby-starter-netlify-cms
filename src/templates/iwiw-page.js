import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const IwiwPageTemplate = ({ title, persons }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
               {persons.map(p => (
                 <>
                  <div>name: {p.name}</div>
                  <div style={{ maxWidth: '200px'}}>
                    <PreviewCompatibleImage imageInfo={p.image} />
                  </div>
                 </>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const IwiwPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <IwiwPageTemplate
        title={post.frontmatter.title}
        persons={post.frontmatter.person}
        image={post.frontmatter.image}
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
        image {
          childImageSharp {
            fluid(maxWidth: 200, quality: 64) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
}
`
