import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import { useDispatch } from 'react-redux';
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props => {
    return (
      <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch
          trackColor={{ true: Colors.primary}}
          thumbColor= 'white'
          value={props.state}
          onValueChange={props.onChange}
        />
      </View>
    );
  };

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);


    const dispatch = useDispatch();


    const saveFilters = useCallback(() => {
        const appliedFilters = {
          glutenFree: isGlutenFree,
          lactoseFree: isLactoseFree,
          vegetarian: isVegetarian
        };
    
        dispatch(setFilters(appliedFilters));
      }, [isGlutenFree, isLactoseFree, isVegetarian, dispatch]);
    
      useEffect(() => {
        navigation.setParams({ save: saveFilters });
      }, [saveFilters]);

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Available Filters</Text>
        <FilterSwitch
          label={"Gluten-Free"}
          state={isGlutenFree}
          onChange={(newValue) => setIsGlutenFree(newValue)}
        />
        <FilterSwitch
          label={"Vegetarian"}
          state={isVegetarian}
          onChange={(newValue) => setIsVegetarian(newValue)}
        />
       <FilterSwitch
          label={"Lactose-Free"}
          state={isLactoseFree}
          onChange={(newValue) => setIsLactoseFree(newValue)}
        />
      </View>
    );
};

FiltersScreen.navigationOptions = navData => {

    return {
      headerTitle: 'Filters Meals',
      headerLeft: () =>
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navData.navigation.toggleDrawer();
            } }
          />
        </HeaderButtons> ,
         headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Save"
                iconName="checkmark-circle-outline"
                onPress={navData.navigation.getParam('save')}
              />
            </HeaderButtons>
      
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
      },
      filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 9
      }
});

export default FiltersScreen;



