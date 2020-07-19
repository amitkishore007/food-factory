import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native'

const CategoryGridTile = (props) => {
    let Touchable = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }

    return (
        <View style={{...styles.item, backgroundColor: props.item.color}}>
            <Touchable activeOpacity={0.5} onPress={() => props.navigate(props.item)}>
                <View style={styles.listItem}>
                    <Text style={styles.itemTitle}>{props.item.title}</Text>
                </View>
            </Touchable>
        </View>
    )
}


const styles  = StyleSheet.create({
    item: {
        width: '45%',
        margin: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
        borderWidth: 0.4,
        borderColor: '#000',
    },
    itemTitle: {
        fontSize: 16,
        textAlign: 'right',
        fontFamily:'open-sans-bold'
    },
    listItem: {
        flex: 1,
        borderColor: '#fff',
        width: '100%',
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10

    }
});

export default CategoryGridTile;
