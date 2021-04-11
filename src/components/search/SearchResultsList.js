import React from 'react';

const SearchResultsList = props => {
    const images = props.images.map(image => {
        return <img key={image.id} src={image.urls.regular} />;
    });

    return <div>{images}</div>;
}

export default SearchResultsList;
