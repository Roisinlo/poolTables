import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaViewComponent, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pool Tables where am ya</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hotpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
