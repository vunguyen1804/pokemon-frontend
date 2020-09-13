import React from "react";
import { connect } from "react-redux";
import { createPokemon } from "../../actions";

class CreatePokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Img: "", Type: "Water", Move: "" };
  }

  onClickSubmit = (event) => {
    event.preventDefault();

    // obtain UUID from the url
    const { UUID } = this.props.match.params;
    const { Name, Img, Type, Move } = this.state;
    this.props.createPokemon({
      Name: Name,
      Img: Img,
      Type: Type,
      Move: Move,
      UUID: UUID,
    });
  };

  render() {
    return (
      <div>
        <form className="container ui form" onSubmit={this.onClickSubmit}>
          <div className="field">
            <label>Pokemon Name (up to 256 characters):</label>
            <input
              onChange={(e) => this.setState({ Name: e.target.value })}
              type="text"
              name="Name"
              placeholder="Enter Pokemon Name"
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

          <div className="field">
            <label>Move (up to 256 characters): </label>
            <input
              onChange={(e) => this.setState({ Move: e.target.value })}
              type="text"
              name="Img"
              placeholder="Enter Pokemon Move"
              required
            />
          </div>

          <div className="field">
            <label>Pokemon Type:</label>
            <select onChange={(e) => this.setState({ Type: e.target.value })}>
              <option defaultValue value="Water">
                Water
              </option>
              <option value="Fire">Fire</option>
              <option value="Grass">Grass</option>
            </select>
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

export default connect(null, { createPokemon })(CreatePokemon);
