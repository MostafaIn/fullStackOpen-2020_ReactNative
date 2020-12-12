import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });
  const [repositories, setRepositories] = useState();

  useEffect(() => {
    const repositoryNodes = data
      ? data.repositories.edges.map(({ node }) => node)
      : [];
    setRepositories(repositoryNodes);
  }, []);

  return { repositories, loading, refetch: null };
};

export default useRepositories;
