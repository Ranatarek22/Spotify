import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PlayedList from '../../components/PlayedComp/PlayedList'
// import { playedData } from '../../data/PlayedData';

const RecentlyPlayed = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Recently Played</Text>
        <View style={styles.line} />
      </View>
      <View>
        {/* <PlayedList data={playedData} /> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,

    fontWeight: 'bold',
    fontFamily: 'Satoshi-Bold',
    textAlign: 'center',
  },
  line: {
    width: '60%',
    borderWidth: 2,
    borderColor: '#00C853',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
});
export default RecentlyPlayed