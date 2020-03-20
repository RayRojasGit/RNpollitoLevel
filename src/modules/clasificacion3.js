import React, { Component } from "react";
import { StyleSheet, View, Alert, TouchableOpacity, ScrollView, ActivityIndicator, Button, FlatList, TouchableHighlightBase } from 'react-native'
import { Container, Content, Input, Header, Item, Icon, Body, Text, List, ListItem } from "native-base";


class clasificacion extends Component {
    state = {
        product: '',
        isLoading: false,
        noRecords: false
    }

    componentDidMount() {
        //this.search();
    }

    handleProductChange = product => {
        this.setState({ product })
    }

    search = () => {
        this.setState({
            isLoading: true
        })
        //return fetch('https://facebook.github.io/react-native/movies.json')
        return fetch('http://ec2-54-87-46-119.compute-1.amazonaws.com:5001/api/arancel')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    //dataSource: responseJson.movies,
                    dataSource: responseJson,
                    //dataSource: null,
                    //noRecords: true

                }, function () {

                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    clearProduct = () => {
        this.setState({
            product: ''
        })
    }

    onSelectedProduct = (product) => {
        this.props.navigation.navigate('Arancel', {
            subpartida: product
        });
    }

    render() {
        const { product } = this.state

        return (
            <Container>
                <Header searchBar style={styles.header}>
                    <Item>
                        <Icon name="ios-search" />
                        <Input
                            value={product}
                            placeholder="ingresa el producto"
                            keyboardType="default"
                            returnKeyType="search"
                            onChangeText={this.handleProductChange}
                            onSubmitEditing={this.search} />
                        {this.state.product.length > 0 ? (
                            <TouchableOpacity>
                                <Icon name="ios-close-circle-outline" onPress={this.clearProduct} />
                            </TouchableOpacity>
                        ) : null}

                    </Item>
                </Header>
                {!this.state.isLoading && !this.state.noRecords ? (
                    <ScrollView>
                        <View style={{ flex: 1, paddingTop: 20 }}>
                            <List dataArray={this.state.dataSource}
                                keyExtractor={({ id }, index) => id}
                                renderRow={(item) =>
                                    <ListItem onPress={() => {
                                        this.onSelectedProduct(item)
                                    }}>
                                        <Body>
                                            <Text>{item.codigo}</Text>
                                            <Text note>{item.descripcionEspaniol}</Text>
                                        </Body>
                                    </ListItem>}>
                            </List>
                        </View>
                    </ScrollView>
                ) :
                    this.state.isLoading ? (
                        <ActivityIndicator style={styles.loading} />

                    ) :
                        <View style={styles.loading}>
                            <Text style={styles.noRecordsMessage}>No se ha encontrado Subpartidas</Text>
                            <Button title="Usar Nomenclatura" primary />
                        </View>
                }

            </Container>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        fontSize: 14,
        borderRadius: 2,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: 'white',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 10,
        flex: 1,
    },
    header: {
        backgroundColor: 'white'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noRecordsMessage: {
        paddingBottom: 10
    }
})

export default clasificacion