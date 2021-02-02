import React, { Component } from 'react';
import Search from './components/Search';

class App extends Component {

  state = {
    term : '',
    images : [],
    page: ''
  }

  dataSearch = (term) => {
    this.setState({
      term : term,
      page : 1
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Search 
            dataSearch={this.dataSearch}
          />
        </div>
      </div>
    );
  }
}

export default App;