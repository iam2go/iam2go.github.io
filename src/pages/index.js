import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/global.css"
import "../styles/posting.css"
import { Tag, TagBox } from "../components/Tag"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li
              key={post.fields.slug}
              className="bg-background-sub min-h-[12rem] rounded-xl p-8 my-8"
            >
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <h2>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h2>
                <TagBox>
                  {post.frontmatter.tag?.map(tag => (
                    <Tag
                      className="text-text-default px-4 bg-background-primary rounded-2xl text-sm  font-light leading-6"
                      text={tag}
                    />
                  ))}
                </TagBox>
                <div className="text-text-default text-sm  font-light my-5  line-clamp-2">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </div>
                <div className="text-accent-default text-xs">
                  {post.frontmatter.date}
                </div>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tag
        }
      }
    }
  }
`
