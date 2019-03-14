import React from 'react'

import logo from '../images/wandering_leaf_studios_color_logo_transparent_background.svg'
import SEO from '../components/seo'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle, faBeer } from '@fortawesome/free-solid-svg-icons'

library.add(faQuestionCircle, faBeer)

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="p-5 lg:py-16">
      <div className="container mx-auto">
        <img
          src={logo}
          alt="Wandering Leaf Studios Logo"
          className="w-full m-0"
        />
      </div>
    </div>
    <div className="bg-green p-5 lg:p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center mb-10">Projects</h2>
        <div className="flex mx-auto flex-col sm:flex-row sm:justify-center">
          <div className="text-center sm:max-w-xs mb-5 sm:mb-0">
            <h3>
              <a href="https://tea-quiz.wanderingleafstudios.com/">
                <div className="mb-5">
                  <FontAwesomeIcon icon="question-circle" size="5x" />
                </div>
                Quiz App
              </a>
            </h3>
            <p>A simple quiz application built with React and Material-UI.</p>
          </div>
          <div className="text-center sm:max-w-xs mb-5 sm:mb-0">
            <h3>
              <a href="https://www.openbrewerydb.org/">
                <div className="mb-5">
                  <FontAwesomeIcon icon="beer" size="5x" />
                </div>
                Open Brewery DB
              </a>
            </h3>
            <p>
              A free API for public information on breweries, cideries,
              brewpubs, and bottleshops.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="py-10">
      <div className="container mx-auto text-center">
        <a href="mailto:info@wanderingleafstudios.com" className="bg-transparent hover:bg-green text-green-dark font-semibold hover:text-white py-2 px-4 border border-green hover:border-transparent rounded no-underline mb-5 inline-block">
          Contact
        </a>
        <footer className="mx-auto text-center text-sm">
          © 2019 Wandering Leaf Studios LLC
        </footer>
      </div>
    </div>
  </div>
)

export default IndexPage
