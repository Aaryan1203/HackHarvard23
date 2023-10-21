import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  const name = "name"
  return (
    <View style={styles.container}>
      <Text>Welcome Back {name}</Text>
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

export default Home;
