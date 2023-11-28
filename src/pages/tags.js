import * as React from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import { Tag } from "../components/Tag"

const TagsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const tags = data.tags.distinct

  return (
    <Layout location={location} title={siteTitle}>
      <div className="w-2/3 flex gap-1.5 flex-wrap justify-center mx-auto my-40">
        {tags?.map(tag => (
          <Tag
            className="text-text-default px-4 bg-background-primary rounded-2xl text-sm  font-light leading-6"
            text={tag}
          />
        ))}
      </div>
    </Layout>
  )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tags: allMdx {
      distinct(field: { frontmatter: { tags: SELECT } })
    }
  }
`
