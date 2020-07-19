import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../Components/HeaderButton';

const MealsDetails = (props) => {
    return (
        <View style={styles.container}>
            <Text>Meals Details</Text>
            <Button title="Back" onPress={() => {
                props.navigation.pop();
            }}/>
        </View>
    );
}


MealsDetails.navigationOptions = ({ navigation }) => {
    const meal =  navigation.getParam('meal');

    return {
        headerTitle: meal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
            </HeaderButtons>
        )
    }
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealsDetails;
