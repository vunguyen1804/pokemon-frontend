import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteTrainer } from "../../actions";

class DeleteTrainer extends React.Component {
  actions() {
    const uuid = this.props.match.params.uuid;

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteTrainer(uuid)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui cancel button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        header="Delete Trainer"
        content="Are you sure?"
        actions={this.actions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default connect(null, { deleteTrainer })(DeleteTrainer);
