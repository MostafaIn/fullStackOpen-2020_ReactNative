import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

 

  return (
    <FlatList
      data={repositories}
      renderItem={(reposData) => (
        <RepositoryItem
          fullName={reposData.item.fullName}
          description={reposData.item.description}
          language={reposData.item.language}
          forks={reposData.item.forksCount}
          stars={reposData.item.stargazersCount}
          ratingAvg={reposData.item.ratingAverage}
          reviews={reposData.item.reviewCount}
          avatar={reposData.item.ownerAvatarUrl}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      // other props
    />
  );
};

export default RepositoryList;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});
