import React, { useState } from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
const [randomBackGround, setrandomBackGround] = useState("#FFFFFF");

const generateColor = () => {
  const hexRange = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexRange[Math.floor(Math.random()*16)];
  }
  setrandomBackGround(color);
}

  return (
    <>
      <StatusBar backgroundColor={randomBackGround} />
      <View style={[styles.container, {backgroundColor:randomBackGround}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>

  );
}
//27

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#6A1B4D",
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  actionBtnText:{
    fontSize:24,
    color:"#FFFFFF",
    textTransform:"uppercase"
  }
})

export default App;
