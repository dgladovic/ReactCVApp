import React, {Component} from 'react';

class App extends Component {

  constructor(){
    super();

    this.state = {
      task: { text: ''},
      tasks: [],
    };
  }

  render(){
    return <div>Hello World!</div>
  }
}

export default App;