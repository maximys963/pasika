import React, {Component} from 'react';


class SearchBar extends Component {
    render() {
        return (
            <div>
                <div className="search"
                     id="search"
                     style={{zIndex: 1,}} >
                    <input className="search-input"
                           placeholder="search..."/>
                </div>
                <img onClick={this.props.searchMove}
                     className="search-icon" id="search-icon"
                     src={require("../.././icons/musica-searcher.svg")}
                     style={{zIndex: 2}} />
            </div>
        );
    }
}

export default SearchBar;