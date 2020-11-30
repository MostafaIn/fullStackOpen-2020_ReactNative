import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RepositoryItem = ({
  fullName,
  description,
  language,
  forks,
  stars,
  ratingAvg,
  reviews,
}) => {
  return (
    <View>
      <Text>Full Name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stars}</Text>
      <Text>Forks: {forks}</Text>
      <Text>Reviews: {reviews}</Text>
      <Text>Rating: {ratingAvg}</Text>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({});
