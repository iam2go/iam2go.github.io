import * as React from "react"
import { Link, graphql } from "gatsby"
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight"
import { HiChevronLeft } from "@react-icons/all-files/hi/HiChevronLeft"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Tag, TagBox } from "../components/Tag"
import { CodeBlock } from "../components/Block/CodeBlock"
import TableOfContents from "../components/TableOfContents/TableOfContents"

const components = {
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="m-auto md:w-3/4" />
  ),
  pre: CodeBlock,
  code: props => (
    <code
      {...props}
      className="bg-background-primary text-accent-default bg-opacity-70"
    />
  ),
}

const BlogPostTemplate = ({
  data: { previous, next, site, mdx: post },
  location,
  children,
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
          itemProp="articleBody"
        >
          <MDXProvider components={components}>{children}</MDXProvider>
        </section>
        <TagBox>
          {post.frontmatter.tags.map(tag => (
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
                <HiChevronLeft size={22} className="text-accent-default" />
                <p className="max-w-[28rem]">{previous.frontmatter.title}</p>
              </li>
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              <li className="bg-background-primary/50 text-sm p-3 rounded-xl h-fit flex items-center gap-3">
                <p className="max-w-[28rem]">{next.frontmatter.title}</p>
                <HiChevronRight size={22} className="text-accent-default" />
              </li>
            </Link>
          )}
        </ul>
      </nav>
      <TableOfContents contents={post.tableOfContents} />
    </Layout>
  )
}

export const Head = ({ data: { mdx: post } }) => {
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
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
