import React from 'react';
import unsplash from '../../api/unsplash';
import SearchBar from "./SearchBar";


class Search extends React.Component{
    state = { images: [] };

    onSearchSubmit = async term => {
        const response = await unsplash.get('/search/photos',{
            params: {query: term }
        });
        this.setState({ images: response.data.results})
    }
    render(){
        return (
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        )
    }
}

export default Search;
