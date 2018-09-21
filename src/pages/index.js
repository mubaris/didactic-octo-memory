import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>My name is Mubaris. You can call me Mubu.</p>
    <p>Connect with me on <a href="https://twitter.com/Mubaris_NK" target="_blank">Twitter</a> or visit my <a href="https://mubaris.com" target="_blank">Blog</a></p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
