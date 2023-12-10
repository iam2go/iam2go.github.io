import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostBlock from "../components/Post/PostBlock"
import { FaTags, FaListUl } from "react-icons/fa6"
import Seo from "../components/seo"

const SearchTemplate = ({ data, location, pageContext }) => {
  const siteTitle = data?.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <h2 className="mt-10 mx-3">
        <FaTags size={18} className="inline-block mr-1  opacity-80" />
        <span className="font-extrabold mx-1">{pageContext.value}</span>
        <span className="text-base">({posts.length})</span>
      </h2>

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => (
          <PostBlock
            key={post.fields.slug}
            slug={post.fields.slug}
            post={post.frontmatter}
          />
        ))}
      </ol>
    </Layout>
  )
}
export default SearchTemplate

export const Head = ({ pageContext }) => <Seo title={pageContext.value} />

export const pageQuery = graphql`
  query ($value: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      filter: { frontmatter: { tags: { glob: $value } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
          tags
        }
      }
    }
  }
`
