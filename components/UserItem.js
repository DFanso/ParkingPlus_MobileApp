import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {PencilIcon} from 'react-native-heroicons/outline'

const UserItem = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{flexDirection:'row', justifyContent: 'space-between', paddingTop: 10}}>
        <Text style={styles.textStyle}>{props.sampleName}</Text>
        <PencilIcon/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '15%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        borderRadius: 20,
        padding: 20,
        marginTop: 10,
    },
    title:{
        color: 'white',
        fontSize: 25,
        fontWeight: 500,
    },
    textStyle:{
        color: 'white',
        fontWeight: 400,
        fontSize: 20,
        paddingLeft: 20,
    }
})
export default UserItem