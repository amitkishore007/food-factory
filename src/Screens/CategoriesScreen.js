import React from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { CATEGORIES } from '../dummy/dummy-data'
import CategoryGridTile from '../Components/CategoryGridTile'

const CategoriesScreen = (props) => {

    const goto = (item) => {
        props.navigation.navigate({ routeName: 'categoryMeals', params: { category: item } });
    }

    const renderItem = (item) => {
        return <CategoryGridTile item={item.item} navigate={goto}/>;
    }

    return (
        <View style={styles.container}>
                <FlatList numColumns={2} keyExtractor={(item) => item.id} data={CATEGORIES} renderItem={renderItem}/>
        </View>
    )
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

CategoriesScreen.navigationOptions = {
    title: 'Food Factory'
};

export default CategoriesScreen;

