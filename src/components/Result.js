import React, { Component } from 'react';
import Image from './Image';
import Pagination from './Pagination';

class Result extends Component {

    showImages = () => {
        const imgs = this.props.images;

        if(imgs.length === 0)
            return null;

        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imgs.map(img => (
                        <Image
                            key={img.id}
                            image={img}
                        />
                    ) ) }
                </div>
                <Pagination 
                    previousPage={this.props.previousPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        );
    }

    render() {
        return (
            <React.Fragment>
                { this.showImages() }
            </React.Fragment>
        );
    }
}

export default Result;