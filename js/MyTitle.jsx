const React = require('react')
// pulling in react into this file. use const instead of var because you dont plan on changing this now; if you do need to change it, update it to let
const div = React.DOM.div
const h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    const style = {color: this.props.color}
    return (
      <div>
        <h1 style={ style }>
        {this.props.title}
        </h1>
      </div>
      )
    }
  }
})

module.exports = MyTitle
