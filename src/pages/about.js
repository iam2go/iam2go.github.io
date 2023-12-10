import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="w-2/3 text-center mx-auto my-40">
        <h2>Hey there, I'm Leego👋 </h2>
        <br />
        <p className="text-text-default">
          어제의 나보다 더 나은 사람이 되는 것을 목표로 하는 프론트엔드 개발자
          입니다.
          <br />
          내가 알게된 것, 해결한 문제, 고민했던 과정들을 여기에 기록합니다.
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage

export const Head = () => <Seo title="About" />
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
