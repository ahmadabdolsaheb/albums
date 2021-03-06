import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDD',
    borderBottomWidth: 0,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
