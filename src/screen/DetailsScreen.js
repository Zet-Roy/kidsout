import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import { connect } from 'react-redux'
import { dataActions } from "../actions/dataActions"
import PriceContainer from "../components/PriceContainer"
import ListContainer from "../components/ListContainer"
import ButtonConfirm from "../common_components/ButtonConfirm"
import BlockSeparator from "../common_components/BlockSeparator"

class DetailsScreen extends React.Component {

    static navigationOptions = () => {
        return {
            title: 'Подтверждение заказа',
            headerTitleStyle: {
                fontSize: 18,
                marginLeft: 40,
                fontWeight: 'normal',
                fontFamily: 'Lato-Medium',
            },
            headerRight: (
                <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15 }}>
                    <TouchableOpacity>
                        <Image
                            resizeMode='contain'
                            style={[styles.imgStyle, { marginRight: 10 }]}
                            source={require('../img/circle.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            resizeMode='contain'
                            style={styles.imgStyle}
                            source={require('../img/heart.png')}
                        />
                    </TouchableOpacity>
                </View>
            ),
        }
    };

    componentDidMount() {
        this.props.dataActions()
    }

    renderItemData = ({ item }) => (
        <Text>{item.text}</Text>
    )

    render() {

        let { priceInfo } = this.props.data.results || {}
        let { info } = this.props.data.results || {}

        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

                    {priceInfo ? <PriceContainer priceInfo={priceInfo} /> : null}

                    <BlockSeparator text={"Подробнее о заказе"} />

                    {info ? <ListContainer info={info} /> : null}
                </ScrollView>

                <ButtonConfirm text="Подтвердить" />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    imgStyle: {
        width: 35,
        height: 35
    },
})

const mapStateToProps = state => {
    return {
        ...state
    };
};

export default connect(mapStateToProps, { dataActions })(DetailsScreen);
