import React from "react";
import Resident from "./Resident";

class Planet extends React.Component {
  constructor(props) {
    super();
    this.state = {
      num: props.num,
      planetData: {},
      residents: []
    };
    //this.createState = this.createState.bind(this);
  }

  componentDidMount() {
    let baseUrl = "https://swapi.py4e.com/api/planets/";
    baseUrl = baseUrl.concat(this.state.num + "/");

    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) => data)
      .then((res) =>
        this.setState({
          residents: res.residents.map((item) => {
            return <Resident link={item} />;
          }),
          planetData: res
        })
      );
  }
  /**
   * Fix react object error
   */
  render() {
    //this.createState();
    return (
      <div className="planet-wrapper">
        <h1>{this.state.planetData.name}</h1>
        <h3>Residents: </h3>
        <div className="resident-wrapper">
          {this.state.residents.length === 0 ? (
            <h1>There are no residents</h1>
          ) : (
            this.state.residents
          )}
        </div>
      </div>
    );
  }
}

export default Planet;
