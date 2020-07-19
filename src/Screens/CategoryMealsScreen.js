import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { MEALS } from '../dummy/dummy-data';
import MealItem from '../Components/MealItem';

const CategoryMealsScreen = (props) => {

    const category = props.navigation.getParam('category');

    const meals = MEALS.filter((meal) => {
        return meal.categoryIds.indexOf(category.id) >=0
    });

    const goTo = (meal) => {
        props.navigation.navigate({ routeName: 'mealsDetails', params: { meal: meal }});
    }

    const renderItem = (item) => {
        return <MealItem meal={item.item} navigate={goTo}/>
    }

    return (
        <View style={styles.container}>
            <FlatList style={styles.list} data={meals} renderItem={renderItem} keyExtractor={(item) => item.id}/>
        </View>
    )
}


CategoryMealsScreen.navigationOptions = ({ navigation }) => {
    const params =  navigation.getParam('category');

    return {
        title: params.title
    }
}


const styles  = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    list: {
        width: '100%'
    }
});

export default CategoryMealsScreen;
