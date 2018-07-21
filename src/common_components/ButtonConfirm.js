import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native'

const ButtonConfirm = (props) => (
    <TouchableOpacity
        activeOpacity={0.8}
        style={styles.touchable}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: '#5dcb8d',
        width: '90%',
        position: 'absolute',
        alignSelf: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 10,
        bottom: 20
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 17,
        fontFamily: 'Lato-Bold',
    }
})

export default ButtonConfirm