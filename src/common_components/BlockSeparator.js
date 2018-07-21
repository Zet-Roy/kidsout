import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

const BlockSeparator = (props) => (
    <View style={styles.block}>
        <Text style={styles.text}>
            {props.text}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    block: {
        height: 50,
        paddingLeft: 15,
        paddingBottom: 5,
        justifyContent: 'flex-end',
        backgroundColor: '#f7f7f7',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#d9d9d9"
    },
    text: {
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#78787c'
    },
})

export default BlockSeparator