import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          readTime
          slug
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
        body
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  console.log(data)
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export default IndexPage
