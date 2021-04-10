import React from 'react';
import SearchBar from "./SearchBar";

class Search extends React.Component{
    onSearchSubmit(term){
        console.log(term);
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
