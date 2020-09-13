import React, { Fragment } from "react";
import { Link } from "react-router-dom";

class Segment extends React.Component {
  Constructor(props) {
    this.super(props);
  }

  render() {
    return (
      <div className="item ui grid" style={{ padding: 50 }}>
        {this.renderTrainer()}
        {this.renderPokemonList()}
      </div>
    );
  }

  renderDeleteTrainerButton() {
    const { pokemons, UUID } = this.props.data;

    if (pokemons.length !== 0) {
      return null;
    }

    return (
      <Link
        to={`/trainers/delete/${UUID}`}
        className="ui float bottom basic red button"
      >
        Delete Trainer
      </Link>
    );
  }

  renderTrainer() {
    const { Name, Img, pokemons, UUID } = this.props.data;

    return (
      <Fragment>
        <div className="three wide column">
          <div className="ui small circular image ">
            <img src={Img} alt="avatar" style={{ height: 150, width: 150 }} />
          </div>
          {this.renderDeleteTrainerButton()}
        </div>

        <div className="ten wide column">
          <h3>{Name}</h3>
          <div className="description">
            <p>{`Number of Owned Pokemon: ${pokemons.length}`}</p>
          </div>
          <Link className="ui basic green button" to={`/pokemons/new/${UUID}`}>
            Add a New Pokemon
          </Link>
        </div>

        <div className="three wide column"></div>
      </Fragment>
    );
  }

  renderPokemonList() {
    const { pokemons } = this.props.data;
    const pokemonList = pokemons.map((pokemon) => {
      return (
        <div className="center aligned four wide column" key={pokemon.ID}>
          <div className="ui cards">
            <div className="card">
              <div className="content">
                <img
                  alt=""
                  className="ui image"
                  src={pokemon.Img}
                  style={{ width: 100, height: 100 }}
                />
                <div className="header"> {pokemon.Name}</div>
                <div className="meta">Move: {pokemon.Move}</div>
                <div className="meta">Type: {pokemon.Type}</div>
              </div>
              <div className="extra content">
                <div className="ui two buttons">
                  <Link
                    to={`/pokemons/delete/:${pokemon.ID}`}
                    className="ui basic red button"
                  >
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return pokemonList;
  }
}

export default Segment;
