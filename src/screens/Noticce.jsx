import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

// Sample Notice Data (Replace with your actual data)
const noticeData = [
  {
    id: '1',
    header: 'New Offer',
    description: 'This is a new offer available for a limited time only.',
    footer: 'Thank you!',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    header: 'Event Notification',
    description: 'Upcoming event notification for all registered users.',
    footer: 'See you there!',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    header: 'Discount Offer',
    description: 'Get 50% off on all products till the end of the month.',
    footer: 'Happy Shopping!',
    image: '',
  },
  {
    id: '4',
    header: 'Maintenance Alert',
    description: 'Our servers will be down for maintenance tomorrow.',
    footer: 'Sorry for the inconvenience',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: '5',
    header: 'System Update',
    description: 'A new system update will be available next week.',
    footer: 'Stay tuned!',
    image: '',
  },
];

// Notice Card Component
const NoticeCard = ({ item, openModal }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => openModal(item)}>
      {item.image ? <Image source={{ uri: item.image }} style={styles.image} /> : null}
      <View style={[styles.cardContent, item.image ? styles.cardWithImage : null]}>
        <Text style={styles.header}>{item.header}</Text>
        <Text numberOfLines={1} style={styles.description}>
          {item.description}
        </Text>
        <Text style={styles.footer}>{item.footer}</Text>
      </View>
    </TouchableOpacity>
  );
};

// Main Notice List Screen
const NoticeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNotice, setSelectedNotice] = useState(null);

  const openModal = (notice) => {
    setSelectedNotice(notice);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedNotice(null);
  };

  return (
    <View style={styles.container}>

         <Header title="Notice" onBackPress={() => alert('Settings pressed')}  onRightPress={() => alert('Settings pressed')} />

      <FlatList
        data={noticeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NoticeCard item={item} openModal={openModal} />}
        contentContainerStyle={styles.list}
      />

      {/* Modal for showing Notice details */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Pressable style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </Pressable>
            {selectedNotice && (
              <>
                <Text style={styles.modalHeader}>{selectedNotice.header}</Text>
                {selectedNotice.image ? (
                  <Image source={{ uri: selectedNotice.image }} style={styles.modalImage} />
                ) : null}
                <Text style={styles.modalDescription}>{selectedNotice.description}</Text>
                <Text style={styles.modalFooter}>{selectedNotice.footer}</Text>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 5,
    borderColor: '#b27a30', // Corrected property
    borderWidth: 2, // Width of the border
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardWithImage: {
    marginLeft: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
  footer: {
    fontSize: 12,
    color: '#999',
    marginTop: 6,
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  modalFooter: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#ff3333',
    fontWeight: 'bold',
  },
});

export default NoticeScreen;
