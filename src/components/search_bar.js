import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: '' };
  }
  render(){
    return(
      <div className="search-bar">
        <a className="anchor nav-link navbar-brand" href="#item-1">Media Tunnel</a>
        <input
          value = {this.state.term}
          onChange ={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange (term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
