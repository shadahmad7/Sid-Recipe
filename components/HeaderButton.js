
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const customHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} Colors={Colors.primary} />
};

const styles = StyleSheet.create({});

export default customHeaderButton;