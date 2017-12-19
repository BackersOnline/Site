import React, { Component } from 'react'
import Intro from './intro-page.jsx'
import Description from './products-description.jsx'
import Bitcoin from './bitcoin.jsx'

class HomePage extends Component {
  render() {
    return (
      <section className="container-fluid">
        <Intro/>
        <Description/>
        <Bitcoin/>
      </section>
    )
  }
}

export default HomePage