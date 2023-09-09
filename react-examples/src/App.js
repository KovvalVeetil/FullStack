import React, { Component } from 'react';
class Thing1 extends Component {
  render() {
    return (
      <div className="Thing1">
        <h2>Stuff here</h2>
      </div>
    );
  }
}

class Thing2 extends Component {
  render() {
    return (
      <div className="Thing2">
        <p><strong>More stuff here</strong></p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p> FRAP applications are fun and powerful</p>
        <Thing1 />
        <Thing2 />
        <Thing2 />
      </div>
    );
  }
}

export default App;