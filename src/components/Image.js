import React, { Component } from 'react';

class Image extends Component {
    
    render() {

        const { largeImageURL, likes, previewURL, tags, views } = this.props.image;

        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img 
                        src={previewURL} 
                        alt={tags} 
                        className="card-img-top" 
                    />
                    <div className="card-body">
                        <p className="card-text">{likes} Me guta</p>
                        <p className="card-text">{views} Vistas</p>

                        <a href={largeImageURL} rel="noreferrer" target="_blank" 
                            className="btn btn-primary btn-block">Ver imagen</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;