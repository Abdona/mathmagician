import React from 'react';
import MyCalculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  render() {
    return <MyCalculator />;
  }
}

export default App;
