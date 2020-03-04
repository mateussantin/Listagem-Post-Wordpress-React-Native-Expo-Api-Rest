import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      data: []
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
    this.setState({ isReady: true });
    this.fetchData();
  }

  fetchData = async() => {
    //response
    const response = await fetch('http://teste.com.br.test/wp-json/wp/v2/posts');

    //posts
    const posts = await response.json();

    this.setState({data:posts});
  }

  render() {

    const regex = /(<([^>]+)>)/ig;

    return (
      <View style={styles.container}>
          <FlatList
            data={this.state.data} 
            keyExtractor={(x, i) => i} 
            renderItem={({item}) =>
              <View style={styles.item}>
                <Text style={styles.title}>{item.title.rendered}</Text>
                <Text style={styles.description}>{item.excerpt.rendered.replace(regex, '')}</Text>
              </View>
            }
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  item: {
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 15,
  },
  
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  description: {
    fontSize: 10,
    marginTop: 5
  },
});