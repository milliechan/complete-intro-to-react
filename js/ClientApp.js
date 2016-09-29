/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

// all components in react must return a component and have a render function
// MyTitle is a composite component

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
// factory when called gives you back the component
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    ce(MyTitle, {title: 'Props are the best!', color: 'peru'})

    )
  )

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
