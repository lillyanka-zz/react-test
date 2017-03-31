import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function() {
    return (
      div(null,
        MyTitleFactory({ title: 'whatevs', color: 'red' }),
        MyTitleFactory({ title: 'dammit', color: 'darkvioletred' }),
        MyTitleFactory({ title: 'sleepy', color: 'rebeccapurple' }),
        MyTitleFactory({ title: 'crap', color: 'papayawhip' })
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))