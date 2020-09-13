import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deletePokemon } from "../../actions";

class DeletePokemon extends React.Component {
  actions() {
    // weird !
    const id = this.props.match.params.id.slice(1);

    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deletePokemon(id)}
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
        header="Delete Pokemon"
        content="Are you sure you want to delete this pokemon?"
        actions={this.actions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default connect(null, { deletePokemon })(DeletePokemon);
