import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList
} from 'react-native'

const switchImg = (value) => {
    switch (value) {
        case 1:
            return (
                <Image
                    resizeMode='contain'
                    style={{
                        width: 28,
                        height: 30,
                        paddingTop: 10
                    }}
                    source={require('../img/child.png')}
                />
            )
        case 2:
            return (
                <Image
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        paddingTop: 10
                    }}
                    source={require('../img/check.png')}
                />
            )
        case 3:
            return (
                <Image
                    resizeMode='contain'
                    style={{
                        width: 20,
                        height: 26,
                        paddingTop: 10
                    }}
                    source={require('../img/pointer.png')}
                />
            )
        case 4:
            return (
                <Image
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 16,
                        paddingTop: 25
                    }}
                    source={require('../img/list.png')}
                />
            )
        default:
            return (
                <Image
                    resizeMode='contain'
                    style={{
                        width: 18,
                        height: 18,
                        paddingTop: 10
                    }}
                    source={require('../img/check.png')}
                />
            )
    }
}

const renderItemData = ({ item }) => (
    <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, }}>
        <View style={{
            width: '15%',
            alignItems: 'center',
        }}>
            {switchImg(item.id_img)}
        </View>
        <View style={{ paddingRight: 40, justifyContent: 'center', }}>
            <Text style={styles.text}>{item.text}</Text>
        </View>
    </View>
)

const flatListItemSeparator = () => (
    <View style={{ alignItems: 'flex-end' }}><View style={{ width: '85%', height: 1, backgroundColor: '#6d6d72', opacity: 0.5 }}></View></View>
)

const listFooterComponent = () => (
    <View style={{ height: 80 }}></View>
)

const ListContainer = (props) => (
    <View style={{ backgroundColor: 'white' }}>
        <FlatList
            data={props.info}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItemData}
            ItemSeparatorComponent={flatListItemSeparator}
            ListFooterComponent={listFooterComponent}
        />
    </View>
)

const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        fontFamily: 'Lato-Regular',
        color: 'black',
    },
})

export default ListContainer