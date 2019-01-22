import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ width: `100%`, margin: `1.45rem 0` }}>
      <Image />
    </div>
    <div
      style={{
        fontFamily: `sans-serif`,
        textAlign: `center`
      }}
    >
      <a
        href="mailto:info@wanderingleafstudios.com"
        style={{ color: `#588F27` }}
      >
        Contact
      </a>
    </div>
  </Layout>
)

export default IndexPage
