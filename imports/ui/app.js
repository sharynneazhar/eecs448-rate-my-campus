import React, { Component, PropTypes } from 'react';
import ui from './components';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <ui.Header />
        {this.props.children}
        <ui.Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
