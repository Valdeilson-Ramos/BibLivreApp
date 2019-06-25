import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, Button} from 'react-native';

export default class Book extends Component{
    render() {
        const {navigation,user} = this.props;
        const titulo= navigation.getParam('Titulo', 'NO-TITLE');
        const editora= navigation.getParam('Editora', 'NO-EDITOR');
        const edicao= navigation.getParam('Edicao', 'NO-EDITION');
        
        
        return(
            <View style={styles.container}>
            
                <Text style={styles.texto}> titulo: {titulo}</Text>
                <Text style={styles.texto}> editora: {editora}</Text>
                <Text style={styles.texto}> edicao:{edicao}</Text>
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    texto:{
        color: '#00000f',
        fontSize: 16,
    },

})