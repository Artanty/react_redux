import React from 'react';

class SearchBar extends React.Component{
    onInputChange(event){
        console.log(event.target.value);
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <label htmlFor="">Image Search</label>
                    <input className="field" type="text"
                           onChange={this.onInputChange}
                           onClick={() => console.log('input clicked')}
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;
