import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';


function AppView(props) {
  const [showData, setShowData] = React.useState(false);

  return (
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
  );
}

const mapStateToProps = (state) => ({
  templeData: state.templeData,
});

const mapDispatchToProps = (dispatch) => ({});

const ConnectedAppView = connect(mapStateToProps, mapDispatchToProps)(AppView);

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedAppView />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
