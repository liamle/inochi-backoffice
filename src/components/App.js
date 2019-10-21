import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'reactstrap';

const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => ({});

class App extends React.Component {
  render() {
    return (
      <Button color="danger">Danger!</Button>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
