// import libraries for making a Component
import React, { Component } from 'react';
import { Text, View } from 'react-native';

class AlbumList extends Component {
  componentWillMount() {
    
    console.log('componentWillMount');
  }
  render() {
    return (
      <View>
        <Text>Album Lists!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
