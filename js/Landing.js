import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <input type='text' placeholder='Search' />
        <Link to='/search'>or Browse all</Link>
      </div>
    )
  }
})

export default Landing
