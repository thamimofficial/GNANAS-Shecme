import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import the hook for navigation

const { width } = Dimensions.get('window'); // Get screen width for dynamic card size

const dummyData = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1018/500/300',
    schemeName: 'Gold Investment Plan',
    description: 'Invest in gold monthly and grow your wealth over time.',
    monthlyAmount: '₹1000/month',
    benefits: 'You get gold benefits with investment over time.'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/1016/500/300',
    schemeName: 'Furniture Rewards Scheme',
    description: 'Receive high-quality furniture as a reward for monthly investment.',
    monthlyAmount: '₹1500/month',
    benefits: 'You receive quality furniture at the end of the scheme.'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/1025/500/300',
    schemeName: 'Silver Savings Plan',
    description: 'Save and earn valuable silver gifts with this savings plan.',
    monthlyAmount: '₹800/month',
    benefits: 'Earn silver rewards with low investment.'
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/1038/500/300',
    schemeName: 'Luxury Electronics Scheme',
    description: 'Get rewarded with luxury electronics for your contributions.',
    monthlyAmount: '₹2000/month',
    benefits: 'Earn luxurious electronics like laptops, smartphones, etc.'
  },
];

const CarouselCard = () => {
  const scrollViewRef = useRef(null);
  const navigation = useNavigation(); // Use the navigation hook
  const cardWidth = width * 0.8; // 80% of the screen width for each card
  let currentIndex = 0;

  // Automatic scrolling every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex += 1;
      if (currentIndex === dummyData.length) currentIndex = 0; // Reset to first card after the last one

      scrollViewRef.current.scrollTo({
        x: currentIndex * cardWidth,
        animated: true,
      });
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToInterval={cardWidth}
      style={styles.scrollContainer}
    >
      {dummyData.map((item, index) => (
        <View key={item.id} style={styles.card}>
          <ImageBackground
            style={styles.cardImage}
            imageStyle={styles.imageStyle} // Adjust the image style separately
            source={{ uri: item.image }}
          >
            {/* Dark overlay for better text visibility */}
            <View style={styles.overlay}>
              <Text style={styles.cardTitle}>{item.schemeName}</Text>
              <Text numberOfLines={1} style={styles.cardDescription}>
                {item.description}
              </Text>
              <Text style={styles.monthlyAmount}>{item.monthlyAmount}</Text>
              
              {/* View button that navigates to SchemeDetails page */}
              <Button
                title="View"
                color="#009387"
                onPress={() => navigation.navigate('SchemeDetails')} // Pass scheme details
              />
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginBottom: 20,
  },
  card: {
    width: width * 0.8,
    height: 200,
    borderRadius: 15,
    marginHorizontal: 10,
    overflow: 'hidden', // Clip any overflow content (for rounded corners)
    elevation: 5, // For Android shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    margin: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  imageStyle: {
    borderRadius: 15, // Maintain rounded corners for the image
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black overlay for readability
    padding: 20,
    borderRadius: 15,
    width: '100%',
    height: '100%',
    justifyContent: 'center', // Center text vertically
    alignItems: 'center', // Center text horizontally
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#f2f2f2',
    textAlign: 'center',
    fontFamily: 'Outfit-Regular',
  },
  monthlyAmount: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: 'Outfit-Bold',
    color: '#00e676',
  },
});

export default CarouselCard;
