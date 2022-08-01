
import React from 'react';
import {
  View,
} from 'react-native';
import List from './src/containers/List';
import First from './src/hoc/SampleHOC/First';
import Second from './src/hoc/SampleHOC/Second';

const App = () => {

  return (
    <View style={{
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Second data={{
        name: "Sujit",
        lastName: "Kaulavkar"
      }} />
    </View>
  );
};

export default App;
