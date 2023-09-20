import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './Button.style';
const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);



export default Button;