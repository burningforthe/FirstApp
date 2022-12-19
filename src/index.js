import React from 'react';
import {
  StyleSheet,
  View, Text
} from 'react-native';

import { ActionSheetProvider } from '@expo/react-native-action-sheet';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

const { store } = configureStore();

function AppView() {
  return (
    <ActionSheetProvider>
      <Provider store={store}>
        <View style={styles.container}>
        <Text > Hello world</Text>
        </View>
      </Provider>
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppView;



/*import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import configureStore from './redux/store';
import { Provider } from 'react-redux';


const { store } = configureStore();

function AppView(props) {
  const [showData, setShowData] = React.useState(false);

  return (
    <ActionSheetProvider>
    <Provider store={store}>
    <View style={styles.container}>
      <Button
        title="Show Data"
        onPress={() => setShowData(true)}
      />
      {showData && props.templeData.map((temple) => (
        <View key={temple.id}>
          <Text>{temple.templeName}</Text>
          <Text>{temple.location}</Text>
          <Text>{temple.about}</Text>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
    </Provider>
  </ActionSheetProvider>
    
  );
}

const mapStateToProps = (state) => ({
  templeData: state.templeData,
});

const mapDispatchToProps = (dispatch) => ({});

//const ConnectedAppView = connect(mapStateToProps, mapDispatchToProps)(AppView);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppView; */