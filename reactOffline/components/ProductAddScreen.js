import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ProductAddScreen extends Component {
  static navigationOptions = {
    title: 'Add Product',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Add Product</Text>
        <Button
          title="Go to Add Product... again"
          onPress={() => this.props.navigation.push('AddProduct')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Product')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}