/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import CityCard from '../Components/CityCard';
import SearchBar from '../Components/SearchBar';
import axios from 'axios';

let originalCityList = []

const Cities = (props) => {
  const [cityList, setCityList] = useState([]);

  const fetchCityData = async () => {
    const {data} = await axios.get(
      'https://opentable.herokuapp.com/api/cities',
    );
    originalCityList = [...data.cities]
    setCityList(data.cities);
  };

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => {
    return (
      <CityCard
        cityName={item}
        cityPress={() =>
          props.navigation.navigate('RestaurantList', {selectedCity: item})
        }
      />
    );
  };

  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#c2c2c2'}} />
  );

  function onSearchCity(val){
    const filteredCities = originalCityList.filter((city)=>{
      const inputVal = val.toLowerCase();
      const cityVal = city.toLowerCase();
      return(
        cityVal.includes(inputVal)
      )
      
    })  
    setCityList(filteredCities)
  }

  return (
    <SafeAreaView>
      <Text style={styles.cityHeader}>Cities</Text>
      <SearchBar
        onSearch={(val) => {
          onSearchCity(val);
        }}
      />
      <CityCard />

      <FlatList
        keyExtractor={(_, index) => index.toString()}
        data={cityList}
        renderItem={renderCities}
        ItemSeparatorComponent={renderSeperator}
      />
    </SafeAreaView>
  );
};

export {Cities};

const styles = StyleSheet.create({
  cityHeader: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
