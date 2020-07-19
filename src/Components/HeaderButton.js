import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../Config/Color';

const CustomHeaderButton = (props) => {
    return <HeaderButton 
            {...props} 
            IconComponent={Ionicons} 
            iconSize={23} 
            color={Color.secondary} />;
}

export default CustomHeaderButton;
