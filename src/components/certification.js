import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Certification extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <h5>{this.props.resource}:</h5>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.schoolName}</h4>
          <ul>{this.props.schoolDescription}</ul>
        </Cell>
      </Grid>
    );
  }
}

export default Certification;
