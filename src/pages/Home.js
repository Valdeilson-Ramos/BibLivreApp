import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle: 'Biblioteca IFMA - Timon'
    };

    state = {
        description: '',
    };

    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    autoCorrect={false}
                    autoCapitalize='none'
                    placeholder='Digite os termos da Pesquisa'
                    placeholderTextColor='#999'
                    value={this.state.description}
                    onChange={description => this.setState({ description })}
                />
                <TouchableOpacity style={styles.searchButton} onPress={() => {}}>
                    <Text style={styles.searchButtonText}>Buscar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c5d0dc',
        paddingHorizontal: 20,
        paddingTop: 30
    },
    input:{
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        marginTop: 10,
        fontSize: 16
    },
    searchButton: {
        backgroundColor: '#7159C1',
        borderRadius: 4,
        heigth: 42,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchButtonText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFF',
    },

     
})