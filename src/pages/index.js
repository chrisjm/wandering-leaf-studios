import React from 'react'

import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <div className="bg-green text-white">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="bg-white p-10">
      <div className="container mx-auto">
        <Image />
      </div>
    </div>
    <div className="container mx-auto p-10 text-center bg-green">
      <a href="mailto:info@wanderingleafstudios.com" className="text-white">
        Contact
      </a>
    </div>
    <footer className="mx-auto text-center text-green-dark text-sm">
      © 2019 Wandering Leaf Studios LLC
    </footer>
  </div>
)

export default IndexPage
