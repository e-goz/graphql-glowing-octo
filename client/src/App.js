import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    client
      .query({
        query: gql`
          {
            allPeople {
              id
              name
            }
          }
        `
      })
      .then(result => {
        console.log(result);
        this.setState({ data: result.data.allPeople });
      });
  };

  render() {
    return (
      <div className="App">
        Hello world
        <ul>
          {this.state.data.map(f => (
            <li>{f.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
