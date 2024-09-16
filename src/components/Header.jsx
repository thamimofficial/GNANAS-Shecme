import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title, onBackPress, onRightPress, rightIcon = 'settings' }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#b27a30" barStyle="light-content" />
      <View style={styles.header}>
        {onBackPress ? (
          <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
        
        <Text style={styles.title}>{title}</Text>

        {onRightPress ? (
          <TouchableOpacity onPress={onRightPress} style={styles.iconContainer}>
            <Icon name={rightIcon} size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#b27a30', // Header background color
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff', // Text color
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // To center the title
  },
  iconContainer: {
    padding: 8,
  },
  iconPlaceholder: {
    width: 40, // Placeholder for when there's no back or right icon
  },
});

export default Header;
