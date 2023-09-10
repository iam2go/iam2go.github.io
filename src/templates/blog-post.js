import * as React from "react"
import { Link, graphql } from "gatsby"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Tag, TagBox } from "../components/Tag"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post px-8 pt-10"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header className="text-center py-14">
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p className="text-accent-default text-xs mt-8">
            {post.frontmatter.date}
          </p>
        </header>
        <section
          className="h-fit my-28 text-text-default"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <TagBox>
          {post.frontmatter.tag.map(tag => (
            <Tag key={tag} text={tag} />
          ))}
        </TagBox>
        <hr className="my-10" />
        <footer></footer>
      </article>
      <nav className="blog-post-nav px-8">
        <ul className="flex flex-wrap justify-between list-none p-0 text-text-default">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <li className="bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3">
                <FaAngleLeft size={22} className="text-accent-default" />
                <p className="max-w-[28rem]">{previous.frontmatter.title}</p>
              </li>
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              <li className="bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3">
                <p className="max-w-[28rem]">{next.frontmatter.title}</p>
                <FaAngleRight size={22} className="text-accent-default" />
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tag
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
