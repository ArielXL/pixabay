import React, { Component } from 'react';

class Search extends Component {

    searchRef = React.createRef();

    handleData = (event) => {
        event.preventDefault();

        // tomamos el valor del input
        const term = this.searchRef.current.value;
        // lo enviamos al componente principal
        this.props.dataSearch(term);
    }

    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.searchRef} type="text" 
                          className="form-control form-control-ng" 
                            placeholder="Busca tu imagen" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" 
                          className="btn btn-lg btn-danger btn-block" 
                            value="Buscar ..." />
                    </div>
                </div>
            </form>
        );
    }
}

export default Search;