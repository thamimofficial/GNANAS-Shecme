import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TouchableOpacity, ImageBackground } from 'react-native';
import CarouselCard from '../components/CarouselCard';

const { width } = Dimensions.get('window'); // Get screen width for dynamic card size

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      
      <ScrollView style={styles.detailedCardContainer}>
      {/* Header for Scrollable Cards */}
      <View style={styles.cardsHeader}>
        <Text style={styles.cardsHeaderTitle}>Featured Cards</Text>
        <Text style={styles.cardsHeaderSubtitle}>Explore our latest updates</Text>
      </View>


      {/* CarouselCard Component */}
      <View>
      <CarouselCard />
      </View>

        
      {/* Vertical Scrollable Detailed Card Section */}
      <ImageBackground source={require('../../assets/GNANASLOGO.jpg')}>
        <View style={styles.detailedCard}>
          <View style={styles.cardLeft}>
            <View style={styles.cardDetails}>
              <Text style={styles.cardId}>ID: THGY675Y</Text>
              <Text style={styles.cardCustomerName}>SOWMIYA</Text>
            </View>

            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Scheme Amount:</Text>
              <Text style={styles.cardDetail}>₹2,000 Per Month</Text>
            </View>

            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Date of Maturity:</Text>
              <Text style={styles.cardDetail}>10 Feb 2023</Text>
            </View>

            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Status:</Text>
              <Text style={styles.cardDetail}>ACTIVE</Text>
            </View>
          </View>

          <View style={styles.cardRight}>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Next Due Date:</Text>
              <Text style={styles.cardDetail}>10-08-2024</Text>
            </View>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>Payment Paid:</Text>
              <Text style={styles.cardDetail}>12/7</Text>
            </View>

            <TouchableOpacity style={styles.installmentButton}>
              <Text style={styles.installmentButtonText}>Pay Installment</Text>
            </TouchableOpacity>
          </View>
        </View>

        </ImageBackground>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardsHeader: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  cardsHeaderTitle: {
    fontSize: 22,
    fontFamily:'Outfit-Bold',
    textAlign: 'center',
  },
  cardsHeaderSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    fontFamily:'Outfit-Regular'
  },
  detailedCardContainer: {
    flex: 1,
  },
  detailedCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginHorizontal: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 20,
    margin:20
  },
  cardLeft: {
    flex: 1,
    justifyContent: 'center',
  },
  cardRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardId: {
    fontSize: 16,
    fontFamily:'Outfit-Bold',
  },
  cardCustomerName: {
    fontSize: 16,
    marginVertical: 5,
  },
  cardDetail: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
    
    fontFamily:'Outfit-Regular'
  },
  cardTitle: {
    fontSize: 14,
    fontFamily:'Outfit-Bold',
  },
  installmentButton: {
    backgroundColor: '#b27a30',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  installmentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily:'Outfit-Bold',
  },
  cardDetails: {
    marginVertical: 10,
  },
});

export default HomeScreen;
