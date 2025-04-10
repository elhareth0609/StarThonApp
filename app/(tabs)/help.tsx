import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { ChevronLeft, MoveVertical as MoreVertical, Search } from 'lucide-react-native';

const HELP_ITEMS = [
  {
    id: '1',
    title: 'Help Lorem ipsum 01',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
  },
  {
    id: '2',
    title: 'Help Lorem ipsum 02',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&q=80',
  },
  {
    id: '3',
    title: 'Help Lorem ipsum 03',
    description: 'Lorem ipsum dolor sit amet, adipiscing elit, sed diam nonummy nibh euismod',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80',
  },
];

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ChevronLeft color="#000" size={24} />
        <Text style={styles.headerTitle}>SEARCH FILTER</Text>
        <MoreVertical color="#000" size={24} />
      </View>
      
      <View style={styles.tabs}>
        <Text style={styles.tabInactive}>Option 1</Text>
        <Text style={styles.tabActive}>Option 2</Text>
        <Text style={styles.tabInactive}>Option 3</Text>
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {HELP_ITEMS.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <View style={styles.progressBar}>
                <View style={styles.progressFill} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
  tabs: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabActive: {
    color: '#40CFA3',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 24,
  },
  tabInactive: {
    color: '#6B7280',
    fontSize: 16,
    marginRight: 24,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#40CFA3',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
  },
  progressFill: {
    width: '60%',
    height: '100%',
    backgroundColor: '#40CFA3',
    borderRadius: 2,
  },
});