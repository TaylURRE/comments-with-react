var React = require('react');
  var ReactDOM = require('react-dom');

  var Main = React.createClass({
    render: function(){
      return(
        <h2>
          Hello World
        </h2>
      )
    }
  });

  ReactDOM.render(<Main />, document.getElementById('app'))
