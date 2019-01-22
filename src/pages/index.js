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
  </Layout>
)

export default IndexPage
