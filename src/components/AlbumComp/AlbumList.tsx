import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Album} from '../../model/Albums';
import AlbumItem from './AlbumItem';

type Props = {
  data: Album[];
};

const AlbumList: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <AlbumItem album={item} />}
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
    marginBottom: 0,
  },
  flatListContent: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});

export default AlbumList;
