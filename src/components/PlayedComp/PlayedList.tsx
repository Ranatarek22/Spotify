import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {Played} from '../../model/Played';
import PlayedItem from './PlayedItem';
type props = {
  data: Played[];
};
const PlayedList: React.FC<props> = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <PlayedItem data={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        scrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  flatListContent: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});

export default PlayedList;
