import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Tab1Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textScreen}>Home Screen</Text>
      <Button
        title="GET ARANCEL BY CHAPTER"
        onPress={() => navigation.navigate('SA')}
      />

      <Button
        title="Search Subpartida"
        onPress={() => navigation.navigate('SB')}
      />

<Button
        title="GET SUBPARTIDA INFO"
        onPress={() => navigation.navigate('SC')}
      />

<Button
        title="ARANCEL"
        onPress={() => navigation.navigate('SD')}
      />

<Button
        title="GET CAPITULOS BY SECCION"
        onPress={() => navigation.navigate('SE')}
      />

<Button
        title="GET SUBPARTIDAS GENERALES BY CAPITULO"
        onPress={() => navigation.navigate('SF')}
      />

<Button
        title="GET SUBPARTIDAS BY SUBPARTIDA GENERAL"
        onPress={() => navigation.navigate('SG')}
      />

      <Button
        title="Open Drawer Screen"
        onPress={() => navigation.openDrawer()}
      />

      <Button title="Log out" onPress={() => navigation.navigate('Auth')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textScreen: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  }
});

export default Tab1Screen;