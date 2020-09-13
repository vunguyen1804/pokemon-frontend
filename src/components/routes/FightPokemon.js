import React from "react";
import { connect } from "react-redux";
import { fetchPokemons } from "../../actions";

const FIRE = "Fire";
const GRASS = "Grass";
const WATER = "Water";

class FightPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstValue: "", secondValue: "", displayResult: false };
  }

  componentDidMount() {
    this.props.fetchPokemons();
  }
  render() {
    if (this.props.pokemons.length === 0) {
      return null;
    }

    return (
      <div>
        <form className="container ui form" required>
          {this.renderPokemons(this.setFirstValue)}
          {this.renderPokemons(this.setSecondValue)}
          {this.showResult()}
        </form>
      </div>
    );
  }

  setFirstValue = (event) => {
    this.setState({ firstValue: event.target.value }, () => {
      this.setDisplayResult();
    });
  };

  setSecondValue = (event) => {
    this.setState({ secondValue: event.target.value }, () => {
      this.setDisplayResult();
    });
  };

  setDisplayResult = () => {
    const { firstValue, secondValue } = this.state;
    this.setState({
      displayResult: firstValue.length !== 0 && secondValue.length !== 0,
    });

    console.log(this.state);
  };

  renderPokemons = (setStateValue) => {
    return (
      <div className="field">
        <select onChange={(e) => setStateValue(e)} required>
          <option value="" default>
            Choose a Pokemon
          </option>
          {this.renderOptions()}
        </select>
      </div>
    );
  };

  renderOptions() {
    const pokemons = this.props.pokemons[0];
    const options = pokemons.map((pokemon) => {
      const { ID, Name, Type } = pokemon;
      const value = `${Name}-${Type}`;

      return (
        <option value={value} key={ID}>
          {Name} - {Type}
        </option>
      );
    });

    return options;
  }

  // Fire beats grass, water beats fire, grass beats water
  showResult() {
    if (!this.state.displayResult) {
      return null;
    }

    const [pokemon1, type1] = this.state.firstValue.split("-");
    const [pokemon2, type2] = this.state.secondValue.split("-");

    if (type1 === type2) {
      return (
        <div>
          <h3>TIE!</h3>
        </div>
      );
    }

    if (
      (type1 === FIRE && type2 === GRASS) ||
      (type1 === WATER && type2 === FIRE) ||
      (type1 === GRASS && type2 === WATER)
    ) {
      return (
        <div>
          <h3>{pokemon1} wins!</h3>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{pokemon2} wins!</h3>
        </div>
      );
    }
  }
}

const mapStatetoProps = (state) => {
  return {
    pokemons: Object.values(state.pokemons),
  };
};

export default connect(mapStatetoProps, { fetchPokemons })(FightPokemon);
