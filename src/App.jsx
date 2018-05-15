import React, { Component } from 'react';
import { Jumbotron, Grid} from 'react-bootstrap';
import './styles/App.css';

export default class App extends Component {

  render() {
    const filteredFauna = this.getFilteredFauna(Fauna, this.state.filter)
    return (
      <Grid>
        <Jumbotron>
          <h1>DSA 5 Web Crafting</h1>
        </Jumbotron>
      </Grid>
    );
  }
}
