import React from "react";
import { Link } from "react-router-dom";
import history from "../history";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onChangeInput = (event) => {
    this.setState({ term: event.target.value });
  };

  onSubmitClick = (event) => {
    event.preventDefault();
    history.push(`/search/${this.state.term}`);
  };

  render() {
    return (
      <div className="ui center aligned basic segment">
        <form
          onSubmit={this.onSubmitClick}
          className="ui left icon action input"
        >
          <i className="search icon"></i>
          <input
            onChange={this.onChangeInput}
            type="text"
            placeholder="Search Trainer..."
          />
          <button className="ui blue submit button">Search</button>
        </form>
        <div className="ui horizontal divider"></div>
        <Link to="/trainers/new" className="ui teal labeled icon button">
          Create New Trainer
          <i className="add icon"></i>
        </Link>
      </div>
    );
  }
}

export default Search;
