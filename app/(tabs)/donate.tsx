import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { ChevronLeft, MoveVertical as MoreVertical } from 'lucide-react-native';

export default function DonateScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ChevronLeft color="#000" size={24} />
        <Text style={styles.headerTitle}>DONATE</Text>
        <MoreVertical color="#000" size={24} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Make a donation to</Text>
        
        <View style={styles.causeCard}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80' }}
            style={styles.causeImage}
          />
          <Text style={styles.causeTitle}>Help Lorem ipsum 01</Text>
          <Text style={styles.causeDescription}>
            Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Select Card</Text>
        <View style={styles.cardContainer}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1542902980-8f2b7b1c2af3?w=800&q=80' }}
            style={styles.cardImage}
          />
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.sectionTitle}>Select Amount</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="Enter amount"
            keyboardType="numeric"
          />
        </View>

        <Pressable style={styles.donateButton}>
          <Text style={styles.donateButtonText}>Send Donation</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  causeCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  causeImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  causeTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#40CFA3',
  },
  causeDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  cardContainer: {
    marginBottom: 24,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
  amountContainer: {
    marginBottom: 24,
  },
  amountInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  donateButton: {
    backgroundColor: '#40CFA3',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  donateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});