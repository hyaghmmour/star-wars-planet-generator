import React from "react";
import "../styles.css";

class Resident extends React.Component {
  constructor(props) {
    super();
    this.state = {
      link: props.link,
      name: "",
      species: "",
      films: 0,
      birthdate: ""
    };
    this.getSpecies = this.getSpecies.bind(this);
  }

  getSpecies(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ species: data.name }));
  }

  componentDidMount() {
    fetch(this.state.link)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data.name,
          species: this.getSpecies(data.species[0]),
          films: data.films.length,
          birthdate: data.birth_year
        })
      );
  }

  render() {
    console.log(this.state);
    return (
      <div className="resident-card">
        <h5>{this.state.name}</h5>
        <div className="resident-data">
          <div className="data-card">
            <p>Birthdate</p>
            <p>{this.state.birthdate}</p>
          </div>
          <div className="data-card">
            <p>Species</p>
            <p>
              {this.state.species === undefined ? "n/a" : this.state.species}
            </p>
          </div>
          <div className="data-card">
            <p>Films</p>
            <p>{this.state.films}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Resident;
