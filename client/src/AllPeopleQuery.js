import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const AllPeopleQuery = () => (
  <Query
    query={gql`
      {
        allPeople {
          id
          name
          gender
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.allPeople.map(({ id, name, gender }) => (
        <div key={id}>
          <p>
            {name}: {gender}
          </p>
        </div>
      ));
    }}
  </Query>
);

export default AllPeopleQuery;
