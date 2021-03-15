import React from 'react'
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

const QUERY_USERS = gql`
query {
  about {
    id
    title
    content
  }
}
`;

const About = () => {
    const { data, loading } = useQuery(
        QUERY_USERS,
      );
    
    return (
        <div>
            
        </div>
    )
}

export default About;
