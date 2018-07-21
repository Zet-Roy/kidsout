import React from 'react'
import {
    StyleSheet,
    View,
    Text,
} from 'react-native'

const PriceContainer = (props) => (
    <View style={styles.infoContent}>
        <Text style={styles.textPrice}>
            Сумма заказа
        </Text>
        <Text style={[styles.titleTextPrice, {
            marginTop: 10,
            marginBottom: 15
        }]}>
            {props.priceInfo.price} руб.
        </Text>
        <View style={{ marginLeft: 20 }}>
            <Text style={styles.textPrice}>
                {props.priceInfo.priceSitter} руб. - цена ситтера
            </Text>
            <Text style={[styles.textPrice, {
                marginTop: 10,
            }]}>
                {props.priceInfo.serviceСommission} руб. - коммисия сервиса
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    infoContent: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: 30,
        paddingBottom: 40
    },
    titleTextPrice: {
        fontSize: 50,
        fontFamily: 'Lato-Bold',
        color: '#5dcb8e'
    },
    textPrice: {
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        color: 'black'
    },
})

export default PriceContainer
