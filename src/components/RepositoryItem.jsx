import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const formatValue = (value) => {
  if (value >= 1000) return `${Math.round((value / 1000) * 10) / 10} k`;
};

const RepositoryItem = ({
  fullName,
  description,
  language,
  forks,
  stars,
  ratingAvg,
  reviews,
  avatar,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.content}>
        <Image source={{ uri: avatar }} style={styles.avatarImg} />
        <View style={styles.header}>
          <Text fontWeight="bold">{fullName}</Text>
          <Text fontSize="subheading" color="textSecondary">
            {description}
          </Text>
          <View style={styles.language}>
            <Text style={{color:'#fff'}}>{language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text
            fontWeight="bold"
            style={{ textAlign: 'center', paddingBottom: 0 }}
          >
            {formatValue(stars)}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Stars
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text
            fontWeight="bold"
            style={{ textAlign: 'center', paddingBottom: 0 }}
          >
            {formatValue(forks)}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Forks
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text
            fontWeight="bold"
            style={{ textAlign: 'center', paddingBottom: 0 }}
          >
            {reviews}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Reviews
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text
            fontWeight="bold"
            style={{ textAlign: 'center', paddingBottom: 0 }}
          >
            {ratingAvg}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            Rating
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 3,
    padding: 5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    flex:2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  avatarImg: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  language: {
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
});
