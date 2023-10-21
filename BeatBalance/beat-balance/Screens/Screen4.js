import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen4 = () => {
  return (
    <View style={styles.container}>
      <Text>Screen 4</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Screen4;
