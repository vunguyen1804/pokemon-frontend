import React from "react";
// import history from "../../history";
import { connect } from "react-redux";
import { createTrainer } from "../../actions";

class CreateTrainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Img: "" };
  }

  onClickSubmit = (event) => {
    event.preventDefault();
    const { Name, Img } = this.state;
    this.props.createTrainer({ Name: Name, Img: Img });
  };

  render() {
    return (
      <div>
        <form className="container ui form" onSubmit={this.onClickSubmit}>
          <div className="field">
            <label>Trainer Name (up to 256 characters):</label>
            <input
              onChange={(e) => this.setState({ Name: e.target.value })}
              type="text"
              name="Name"
              placeholder="Enter Trainer Name"
              required
            />
          </div>

          <div className="field">
            <label>Image URL (up to 1024 characters):</label>
            <input
              onChange={(e) => this.setState({ Img: e.target.value })}
              type="text"
              name="Img"
              placeholder="Enter Image URL"
              required
            />
          </div>

          <button
            className="ui button"
            type="submit"
            onSubmit={this.onClickSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createTrainer })(CreateTrainer);
