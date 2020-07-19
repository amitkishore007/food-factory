import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../Screens/CategoriesScreen';
import CategoryMealsScreen from '../Screens/CategoryMealsScreen';
import MealsDetailsScreen from '../Screens/MealsDetailsScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoriteScreen from '../Screens/FavoriteScreen';
import Color from '../Config/Color';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';


const MealsNavigation = createStackNavigator(
    {
        categories: CategoriesScreen,
        categoryMeals: CategoryMealsScreen,
        mealsDetails: MealsDetailsScreen
    }, 
    {
        initialRouteName: 'categories',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e'
            },
            headerTintColor: '#ffffff'
        }
    }
);

const TabsConfig = {
    meals: {
        screen: MealsNavigation,
        navigationOptions: {
            tabBarLabel: 'Meals',
            tabBarColor: Color.primary,
            tabBarIcon: (tabinfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabinfo.tintColor}/>
            }
        }
    },
    favorite: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: 'Favorite',
            tabBarColor: Color.primary,
            tabBarIcon: (tabinfo) => {
                return <Ionicons name="ios-star" size={25} color={tabinfo.tintColor}/>
            }
        }
    }
};


const BottomTabNavigator = Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(TabsConfig, 
    {
        activeColor: Color.secondary,
        shifting: true
    }) : 
    createBottomTabNavigator(TabsConfig, 
    {
        tabBarOptions: {
            activeTintColor: Color.primary
        }
    });

export default createAppContainer(BottomTabNavigator);