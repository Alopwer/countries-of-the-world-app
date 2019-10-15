import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

function Index() {
  return (
    <div className="App">
      <App/>
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'))
