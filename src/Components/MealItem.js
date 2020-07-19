import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native'

const MealItem = (props) => {

    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.container}>
            <TouchableCmp onPress={() => props.navigate(props.meal)}>
                <View style={styles.mealWrapper}>
                    <View style={{...styles.row, ...styles.mealHeader}}>
                        <ImageBackground source={{ uri: props.meal.imageUrl }} style={styles.bgImage}>
                           <View style={styles.mealTitle}>
                             <Text style={styles.mealTitleText}>{props.meal.title}</Text>
                           </View>
                        </ImageBackground>
                    </View>

                    <View style={{...styles.row, ...styles.details}}>
                            <Text>{props.meal.duration}m</Text>
                            <Text>{props.meal.complexity.toUpperCase()}</Text>
                            <Text>{props.meal.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        height: 200,
        overflow: 'hidden',
        borderRadius: 10,
        backgroundColor: '#f5f5f5'
    },
    mealWrapper: {
        borderColor: '#000',
        borderRadius: 10,
    },  
    row: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '80%'
    },
    details: {
        height: '20%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#e5e5e5'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealTitle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor:'rgba(0,0,0,0.5)',
        alignItems: 'center'
    },
    mealTitleText:{
        fontSize: 16,
        fontFamily: 'open-sans-bold',
        color: '#ffffff',
    }
})

export default MealItem;
