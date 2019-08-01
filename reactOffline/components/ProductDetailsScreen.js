import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class ProductDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Product Details',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Product Details</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('ProductDetails')}
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