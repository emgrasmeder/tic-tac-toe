import React from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends React.Component {
render() {
    return (
      <div>
        'Hello worlds!'
      </div>
    );
  }
}
render(<App />, document.getElementById('app'));
