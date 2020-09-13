import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAll } from "../../actions";

class TrainerList extends React.Component {
  render() {}
}

const mapStatetoProps = (state) => {
  return {
    main: state.main,
  };
};

export default connect(mapStatetoProps, { fetchAll })(TrainerList);
