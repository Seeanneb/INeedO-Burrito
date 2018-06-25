import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurritoBuilder from './containers/BurritoBuilder/BurritoBuilder';

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
        <BurritoBuilder />
       </Layout> 
      </div>
    );
  }
}

export default App;
