import React from "react";
import { connect } from "react-redux";
import { fetchAll } from "../../actions";
import Segment from "./Segment";
import SearchCreate from "../SearchCreate";

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  onClickDeleteTrainer = () => {};

  onClickCreatePokemon = () => {};

  renderList() {
    if (this.props.main.length === 0) {
      return null;
    }

    const trainers = Object.values(this.props.main[0]);

    const segments = trainers.map((trainer) => {
      return <Segment key={trainer.UUID} data={trainer} />;
    });

    return segments;
  }

  render() {
    return (
      <div className="container ui celled list">
        <SearchCreate />
        {this.renderList()}
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    main: Object.values(state.main),
  };
};

export default connect(mapStatetoProps, { fetchAll })(Home);
