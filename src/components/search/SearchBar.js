import React from 'react';

class SearchBar extends React.Component{
    onInputChange(event){
        console.log(event.target.value);
    }

    onInputClick(){
        console.log('input clicked');
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <label htmlFor="">Image Search</label>
                    <input className="field" type="text"
                           onChange={this.onInputChange}
                           onClick={this.onInputClick}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;
