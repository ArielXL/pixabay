import React, { Component } from 'react';
import Search from './components/Search';
import Result from './components/Result';

class App extends Component {

  state = {
    term : '',
    images : [],
    page: ''
  }

  scroll = () => {
    const element = document.querySelector('.jumbotron');
    element.scrollIntoView('smooth', 'start');
  }

  previousPage = () => {
    let page = this.state.page;

    if(page === 1)
      return null;

    page -= 1;
    this.setState({
      page : page
    }, () => {
      this.consultApi();
      this.scroll();
    });
  }

  nextPage = () => {
    let page = this.state.page;
    page += 1;
    this.setState({
      page : page
    }, () => {
      this.consultApi();
      this.scroll();
    });
  }

  consultApi = () => {

    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${term}&per_page=32&page=${page}`;

    fetch(url)
      .then(response => response.json() )
      .then(result => this.setState({
        images : result.hits
      }) )
  }

  dataSearch = (term) => {
    this.setState({
      term : term,
      page : 1
    }, () => {
      this.consultApi();
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
        <div className="row justify-content-center">
          <Result 
            images={this.state.images}
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;