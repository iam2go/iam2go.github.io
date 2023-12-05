import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="my-32 text-text-default text-center">
        <StaticImage
          className="my-8 mx-auto"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/404.png"
          width={300}
          quality={95}
          alt="Profile picture"
        />
        <div>페이지를 찾을 수 없어요.</div>
        <div> 페이지의 주소를 다시 한번 확인 해 주세요!</div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
