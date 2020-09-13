import React from "react";
import axios from "../../apis/axios";

class SearchTrainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { trainers: [] };
  }

  componentDidMount() {
    const { term } = this.props.match.params;
    this.helper(term);
  }

  helper = async (searchTerm) => {
    const result = await axios.get(`/search/${searchTerm}`, {});
    this.setState({ trainers: Object.values(result.data.data) });
  };

  render() {
    const { term } = this.props.match.params;

    if (this.state.trainers.length === 0) {
      return (
        <div>
          <h1>Cannot find any result for '{term}'.</h1>
        </div>
      );
    }

    return (
      <div>
        <h1> Search result for term: '{term}'</h1>
        <div className="ui celled list">{this.renderTrainerList()}</div>
      </div>
    );
  }

  renderTrainerList() {
    const trainerList = this.state.trainers.map(({ UUID, Name, Img }) => {
      return (
        <div key={UUID} className="item">
          <img
            className="ui small circular image"
            alt=""
            src={Img}
            style={{ height: 75, width: 75 }}
          />
          <div className="content">
            <h2> {Name}</h2>
          </div>
        </div>
      );
    });

    return trainerList;
  }
}

export default SearchTrainer;
