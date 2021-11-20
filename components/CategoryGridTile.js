import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';

const CategoryGridTile = props => {
return (
<TouchableOpacity style={styles.gridItem}
    onPress={props.onSelect} >
 <View style={{...styles.gridContainer, ...{backgroundColor: props.color}}}>
   <Text style={styles.title}>{props.title}</Text>
 </View>
 </TouchableOpacity>
 )
};

const styles = StyleSheet.create({
    gridItem : {
        flex : 1,
        margin:15,
        height: 120,
        elevation : 5,

        overflow: 'hidden',
    },
    gridContainer : {
        flex: 1,
        borderTopLeftRadius: 10,
        borderBottomRightRadius: 10,

        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
        shadowRadius : 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    title : {
        fontFamily: 'open-sans-bold',
        fontSize : 18,
        textAlign: 'right',
    }
});

export default CategoryGridTile;
