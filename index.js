import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
  <View style={styles.containerStyle} >
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

const styles = {
  containerStyle: {
    flex: 1
  }
};

AppRegistry.registerComponent('albums', () => App);
