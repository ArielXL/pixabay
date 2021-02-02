import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        return (
            <div className="py-3">
                <button onClick={this.props.previousPage} type="button" className="btn btn-info mr-1">&larr; Anterior</button>
                <button onClick={this.props.nextPage} type="button" className="btn btn-info">Siguiente &rarr;</button>
            </div>
        );
    }
}

export default Pagination;