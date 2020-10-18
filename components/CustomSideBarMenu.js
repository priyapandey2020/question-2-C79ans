import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component{
  render(){
    return(
         <View style={styles.container}>
            <View style={styles.drawerItemsContainer}>
               <DrawerItems {...this.props}/>
           </View>
         </View>
    )
  }
}