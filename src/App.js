import React from 'react';
import './App.css';

import ErrorPage from './components/errors/errorPage'
import Error404Page from './components/errors/error404Page'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hello World !</h1>
        </header>
        <ErrorPage header="Error">
            eee
        </ErrorPage>
        <Error404Page header="Error">
            eee
        </Error404Page>
      </div>
    );
  }
}

export default App;
