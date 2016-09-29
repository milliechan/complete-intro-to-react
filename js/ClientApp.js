var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var div = React.DOM.div


// all components in react must return a component and have a render function
// MyTitle is a composite component


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
