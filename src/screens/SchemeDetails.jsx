import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';

const SchemeDetails = ({ navigation }) => {
  // Dummy scheme data
  const scheme = {
    schemeName: 'Gold Investment Plan',
    description:
      'The Gold Investment Plan is designed for individuals looking to diversify their savings into gold. With this scheme, you will be contributing ₹1000 monthly towards purchasing gold at prevailing market rates. As the value of gold appreciates, your wealth will grow over time, providing you with financial security and a valuable asset.',
    benefits: [
      'Secure monthly investment with no lock-in period.',
      'Regular updates on the gold prices and your holdings.',
      'Accumulate gold in small amounts and get physical gold delivery after a certain threshold.',
      'No hidden fees or charges. All investments are transparent and trackable online.',
      'Tax benefits on long-term capital gains after 3 years of holding.',
      'Choose between digital gold, physical gold, or gold ETFs.',
    ],
    additionalDetails: [
      'Our Gold Investment Plan allows you to invest in the safest and most trusted asset class—gold. With a growing economic landscape, many financial experts recommend that a portion of your wealth be invested in precious metals to hedge against inflation.',
      'The gold you invest in is stored in high-security vaults and is fully insured, ensuring the safety of your assets at all times. Once you accumulate a sufficient amount, you can opt for physical gold delivery in the form of gold coins, bars, or jewelry, or continue to hold digital gold that can be sold instantly at market rates.',
      'This plan is ideal for people looking for both short-term gains and long-term security. Whether you want to save for a special occasion, like a wedding or future investment, gold offers a reliable and profitable avenue for your financial goals.',
      'With gold historically offering stability during times of market volatility, this plan ensures that your portfolio is well-balanced. The Gold Investment Plan allows easy tracking of your assets via our mobile app and website, with round-the-clock access to your investments.',
    ],
    monthlyAmount: '₹1000/month',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.schemeName}>{scheme.schemeName}</Text>
      <Text style={styles.sectionTitle}>Description:</Text>
      <Text style={styles.description}>{scheme.description}</Text>

      <Text style={styles.sectionTitle}>Benefits:</Text>
      {scheme.benefits.map((benefit, index) => (
        <Text key={index} style={styles.benefits}>
          • {benefit}
        </Text>
      ))}

      <Text style={styles.sectionTitle}>Additional Details:</Text>
      {scheme.additionalDetails.map((detail, index) => (
        <Text key={index} style={styles.additionalDetail}>
          {index + 1}. {detail}
        </Text>
      ))}

      <Text style={styles.monthlyAmount}>Monthly Contribution: {scheme.monthlyAmount}</Text>
      
      {/* Register Button */}
      <Button
        title="Register"
        onPress={() => alert('You are registered for the Gold Investment Plan!')}
        color="#009387"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  schemeName: {
    fontSize: 28,
    fontFamily: 'Outfit-Bold', // Bold font applied
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Outfit-Bold', // Bold font applied
    marginBottom: 10,
    marginTop: 20,
    color: '#444',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular', // Regular font applied
    color: '#666',
    marginBottom: 15,
    textAlign: 'justify',
    lineHeight: 22,
  },
  benefits: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular', // Regular font applied
    color: '#444',
    marginBottom: 5,
  },
  additionalDetail: {
    fontSize: 16,
    fontFamily: 'Outfit-Regular', // Regular font applied
    color: '#666',
    marginBottom: 10,
    textAlign: 'justify',
  },
  monthlyAmount: {
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'Outfit-Bold', // Bold font applied
    color: '#009387',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default SchemeDetails;
