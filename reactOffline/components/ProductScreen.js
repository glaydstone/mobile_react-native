import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View, Text } from 'react-native';
import { ListItem, Button } from 'react-native-elements';
import Database from '../Database';

const db = new Database();
export default class ProductScreen extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
      products: [],
      notFound: 'Products not found.\nPlease click (+) button to add it.'
    };
  }

  componentDidMount() {
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      this.getProducts();
    });
  }

  getProducts() {
    let products = [];
    db.listProduct().then((data) => {
      products = data;
      this.setState({
        products,
        isLoading: false,
      });
    }).catch((err) => {
      console.log(err);
      this.setState = {
        isLoading: false
      }
    })
  }

  
  
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Product List',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28 } }}
          onPress={() => { 
            navigation.navigate('AddProduct', {
              onNavigateBack: this.handleOnNavigateBack
            }); 
          }}
        />
      ),
    };
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Product List</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('ProductDetails')}
        />
        <Button
          title="Go to Add Product"
          onPress={() => this.props.navigation.navigate('AddProduct')}
        />
        <Button
          title="Go to Edit Product"
          onPress={() => this.props.navigation.navigate('EditProduct')}
        />
      </View>
    );
  }
}