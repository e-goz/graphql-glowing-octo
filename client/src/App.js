import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AllPeopleQuery from "./AllPeopleQuery";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <div>
            <h2>Hello apollo react</h2>
            <AllPeopleQuery />
          </div>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
